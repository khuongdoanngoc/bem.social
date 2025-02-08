import {
    Body,
    Controller,
    HttpCode,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { signInDTO, signUpDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(201)
    @Post('sign-up')
    async signUp(@Body() body: signUpDTO) {
        try {
            const user = await this.authService.signUp(body);
            return {
                statusCode: HttpStatus.CREATED,
                message: 'User registered successfully!',
                data: user,
            };
        } catch (error) {
            throw new HttpException(
                {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: error.message,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Post('sign-in')
    async signIn(@Body() body: signInDTO) {}
}
