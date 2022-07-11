import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MyGuard } from 'common/guard.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("/apis")
  app.useGlobalGuards(new MyGuard());
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT || 9000);
}
bootstrap();
