import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Program } from '../entities/program.entity';
import { Repository } from 'typeorm';
import { Wod } from '../entities/wod.entity';
import { CreateWodDto } from '../dto/create-wod.dto';
import { UpdateWodDto } from '../dto/update-wod.dto';

@Injectable()
export class WodService {
  constructor(
    @InjectRepository(Program)
    private wodRepository: Repository<Wod>,
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
