import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {//Al extender de PartialType le indicamos que va a tener todas las propiedade del CreatePokemonDto pero opcionales
}
