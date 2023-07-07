import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Program } from './entities/program.entity';
import { Wod } from './entities/wod.entity';
import { ProgramController } from './controllers/program.controller';
import { ProgramService } from './services/program.service';

@Module({
  imports: [TypeOrmModule.forFeature([Program, Wod])],
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule {}
