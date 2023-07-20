import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsEnum,
  MaxLength,
  IsUrl,
  IsArray,
} from 'class-validator';
import { STATE_PROGRAM } from 'src/utils/state-program.enum';
import { MultimediaLink } from '../entities/multimedia-link.entity';
export class CreateExerciseDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(400)
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  multimediaLinks: MultimediaLink[];
}
