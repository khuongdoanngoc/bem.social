import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  // Cấu hình microservice với RabbitMQ
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [configService.get<string>('RABBITMQ_URL')],
      queue: configService.get<string>('RABBITMQ_AUTH_QUEUE'),
      queueOptions: {
        durable: false
      },
    },
  });

  // Khởi động microservice
  await app.startAllMicroservices();
  
  // Cấu hình validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('BEM Social Auth Service')
    .setDescription('The BEM Social Auth Service API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Khởi động server
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Auth Service is running on: http://localhost:${port}`);
  console.log(`Auth Service RabbitMQ consumer started on queue: ${configService.get<string>('RABBITMQ_AUTH_QUEUE')}`);
}
bootstrap();
