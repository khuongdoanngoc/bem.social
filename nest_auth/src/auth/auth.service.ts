import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { signUpDTO } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private userSerivce: UserService,
    ) {}

    async signUp(body: signUpDTO) {

        // const isExistingUser = await 

        await this.userSerivce.createUser(body);
    }
}
