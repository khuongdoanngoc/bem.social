import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    // Hash the password
    const hash = await argon.hash(dto.password);

    try {
      // Create the user
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });

      // Return the user without the hash
      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already exists');
        }
      }
      throw error;
    }
  }

  async login(dto: LoginDto) {
    // Find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // If user doesn't exist, throw exception
    if (!user) {
      throw new ForbiddenException('Invalid credentials');
    }

    // Compare passwords
    const pwMatches = await argon.verify(user.hash, dto.password);

    // If password is incorrect, throw exception
    if (!pwMatches) {
      throw new ForbiddenException('Invalid credentials');
    }

    // Return the user without the hash
    delete user.hash;
    return user;
  }
} 