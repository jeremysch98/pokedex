import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2'); //Para colocar un prejifo global

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,

      //Configuración para que tranforme la data que viaja en los DTO
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  //await app.listen(3000);
  await app.listen(process.env.PORT);//Llamando la variable de entorno PORT directamente desde el .env
  console.log(`App running on port ${process.env.PORT}`);
}
bootstrap();
