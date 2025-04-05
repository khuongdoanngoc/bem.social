import {
    Body,
    Controller,
    HttpCode,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { registerDTO, loginDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(201)
    @Post('register')
    async register(@Body() body: registerDTO) {
        try {
            const user = await this.authService.handleRegister(body);
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

    @Post('login')
    async login(@Body() body: loginDTO) {}
}
