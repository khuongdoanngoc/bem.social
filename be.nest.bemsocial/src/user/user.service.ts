import * as argon2 from 'argon2';
import { Injectable } from '@nestjs/common';
import { signUpDTO } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

    async createUser(body: signUpDTO) {
        const hashedPassword = await this.hashPassword(body.password);
        const newUser = { ...body, password: hashedPassword };

        console.log(newUser);

        const user = await this.prismaService.user.create({
            data: newUser,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                age: true,
            },
        });
        return user;
    }

    async findOne(email: string) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                age: true,
            },
        });
        console.log('change somethin g')
        return user;
    }

    async hashPassword(password: string) {
        const saltOrRounds = 10;
        return await argon2.hash(password);
    }
}
