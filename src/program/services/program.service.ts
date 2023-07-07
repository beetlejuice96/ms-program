import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from '../dto/create-program.dto';
import { UpdateProgramDto } from '../dto/update-program.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Program } from '../entities/program.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private programRepository: Repository<Program>,
  ) {}
  create(createProgramDto: CreateProgramDto) {
    const newProgram = this.programRepository.create({
      ...createProgramDto,
    });
    return this.programRepository.save(newProgram);
  }

  findAll() {
    return this.programRepository.find();
  }

  findOne(id: number) {
    return this.programRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateProgramDto: UpdateProgramDto) {
    return this.update(id, updateProgramDto);
  }

  remove(id: number) {
    return this.programRepository.softDelete(id);
  }
}
