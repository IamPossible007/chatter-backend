import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  const corsOptions: CorsOptions = {
    origin: "https://main.d3g1u3lo2fkskh.amplifyapp.com", // The URL of your frontend
    credentials: true,  // Allow credentials (cookies)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: '*',  // Customize as needed
  };
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  app.use(cookieParser());
  app.enableCors(corsOptions);
  const configService = app.get(ConfigService);
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
