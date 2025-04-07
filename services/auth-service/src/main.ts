import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Cấu hình microservice
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3001,
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
}
bootstrap();
