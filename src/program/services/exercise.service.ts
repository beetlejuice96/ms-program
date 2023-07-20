import { Injectable } from '@nestjs/common';
import { Exercise } from '../entities/exercise.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private wodRepository: Repository<Exercise>,
  ) {}
  create(createWoDdto: CreateWodDto) {
    const newWod = this.wodRepository.create({
      ...createWoDdto,
    });
    return this.wodRepository.save(newWod);
  }

  findAll() {
    return this.wodRepository.find();
  }

  findOne(id: number) {
    return this.wodRepository.findOne({
      where: { id },
    });
  }

  update(id: number, UpdateWodDto: UpdateWodDto) {
    return this.wodRepository.update(id, UpdateWodDto);
  }

  remove(id: number) {
    return this.wodRepository.softDelete(id);
  }
}
