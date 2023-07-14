import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Program } from './entities/program.entity';
import { Wod } from './entities/wod.entity';
import { ProgramController } from './controllers/program.controller';
import { ProgramService } from './services/program.service';
import { TypeProgram } from './entities/typeProgram.entity';
import { TypeWod } from './entities/typeWod.entity';
import { WodExercise } from './entities/wod-exercise.entity';
import { Exercise } from './entities/exercise.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TypeProgram,
      TypeWod,
      Wod,
      Program,
      Exercise,
      WodExercise,
    ]),
  ],
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule {}
