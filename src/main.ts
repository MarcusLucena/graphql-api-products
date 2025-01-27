import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.CORS_ORIGIN ?? '*',
      methods: 'GET, POST, PUT, DELETE',
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
