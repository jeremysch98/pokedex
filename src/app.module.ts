import { join } from 'path';//Node
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],//Integrando el archivo de configuración de variables de entorno,
      validationSchema: JoiValidationSchema//Integrando el ValidationSchema creado con Joi
    }),//Configuración para variables de entorno (debe ir primero en los imports)

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    MongooseModule.forRoot(process.env.MONGODB, {
      dbName: 'pokemonsdb'//Definiendo el nombre de la DB que se usa en la DB creadad en Railway
    }),//Tomando el valor de la variable de entorno MONGODB

    PokemonModule,
    CommonModule,
    SeedModule
  ]
})
export class AppModule { }
