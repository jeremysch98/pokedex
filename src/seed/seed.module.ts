import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    PokemonModule,//Importando el PokemonModule el cual a su vez exporta el modelo,
    CommonModule//Importamos el módulo de Common para acceder a todo lo que exporta
  ]
})
export class SeedModule { }
