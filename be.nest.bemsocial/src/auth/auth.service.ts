import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { loginDTO, registerDTO } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private userSerivce: UserService,
    ) {}

    async handleRegister(body: registerDTO) {
        try {
            const isExistingUser = await this.userSerivce.findOne(body.email);
            if (isExistingUser) {
                throw new ConflictException('Email is existed!');
            }

            await this.userSerivce.createUser(body);
        } catch (error) {
            if (error instanceof ConflictException) {
                throw error;
            }
            throw new InternalServerErrorException(
                'An error occurred while registering an account!',
            );
        }
    }

    async handleLogin(body: loginDTO) {

    }
}
