import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsEnum,
  MaxLength,
  IsUrl,
} from 'class-validator';
import { STATE_PROGRAM } from 'src/utils/state-program.enum';
export class CreateProgramDto {
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
  @IsDateString()
  @IsNotEmpty()
  initDate: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  endDate: string;

  @ApiProperty()
  @IsEnum(STATE_PROGRAM)
  @IsNotEmpty()
  status: STATE_PROGRAM;

  //add file url
  @ApiProperty()
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  fileUrl: string;
}
