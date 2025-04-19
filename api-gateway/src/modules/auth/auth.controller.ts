import { Body, Controller, Inject, Post, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError, timeout } from 'rxjs';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(
    @Inject('AUTH_SERVICE') private authClient: ClientProxy,
    private httpService: HttpService,
  ) {}
 
  @Post('login') 
  async login(@Body() loginDto: any) {
    this.logger.log(`Processing login request for email: ${loginDto.email}`);
    
    // Using RabbitMQ for microservice communication
    return firstValueFrom(
      this.authClient.send('auth.login', loginDto).pipe(
        timeout(10000), // 10 second timeout
        catchError(error => {
          this.logger.error(`Login error: ${error.message}`);
          throw error; // Rethrow for global exception filter
        })
      )
    );
  }

  @Post('register')
  async register(@Body() registerDto: any) {
    this.logger.log(`Processing register request for email: ${registerDto.email}`);
    
    // Using RabbitMQ for microservice communication
    return firstValueFrom(
      this.authClient.send('auth.register', registerDto).pipe(
        timeout(10000), // 10 second timeout
        catchError(error => {
          this.logger.error(`Register error: ${error.message}`);
          throw error; // Rethrow for global exception filter
        })
      )
    );
  }
}
