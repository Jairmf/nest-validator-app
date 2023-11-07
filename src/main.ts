import { ValidationPipe } from '@nestjs/common'; // import the validation pipe
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // this will enable the validation pipe globally
  await app.listen(3000);
}
bootstrap();
