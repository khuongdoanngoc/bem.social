import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private authClient: ClientProxy,
    private httpService: HttpService,
  ) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    // Using RabbitMQ for microservice communication
    return firstValueFrom(this.authClient.send('auth.login', loginDto));
  }

  @Post('register')
  async register(@Body() registerDto: any) {
    // Using RabbitMQ for microservice communication
    return firstValueFrom(this.authClient.send('auth.register', registerDto));
  }
}
