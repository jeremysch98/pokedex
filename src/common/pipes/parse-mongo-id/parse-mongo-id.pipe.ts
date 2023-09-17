import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if(!isValidObjectId(value))//Usando método del framework mongoose para validar
      throw new BadRequestException(`${value} is not a valid MongoID`);

    return value.toLocaleUpperCase();
  }
}
