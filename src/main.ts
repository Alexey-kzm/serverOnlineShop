import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from "./prisma.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const prismaService = app.get(PrismaService);
  app.enableCors({
    origin: 'https://frontendonlineshop.onrender.com',
    credentials: true,
  });
  await app.listen(4200);
}
bootstrap();
