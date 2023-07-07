/**
 * this entity must be contain all field for wod.
 * first field is id, this field is unique and auto increment.
 * second field is name, this field is string and max length is 100.
 * third field is description, this field is string and max length is 400.
 * fourth field is relation with exercise, this field is array of exercise.
 * fifth field is relation with program, this field is array of program.
 * sixth field is  day of week for wod, this field is string and max length is 100.
 *
 *  */

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Program } from './program.entity';
import { TypeWod } from './typeWod.entity';

// import { Exercise } from '../../exercise/entities/exercise.entity';

@Entity(`pr_wod`)
export class Wod {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 400, default: null })
  description: string;

  //TODO: think about how add order for wods in program, know which wod comes first
  //   @Column({ name: 'day_of_week', length: 100, default: null })
  //   dayOfWeek: string;

  //   @Column({ name: 'exercise_id', nullable: true, type: 'int', array: true })
  //   exerciseId: number[];

  @ManyToOne(() => TypeWod, { eager: true })
  @JoinColumn({ name: 'type_wod_id' })
  typeProgram: TypeWod;

  @ManyToOne(() => Program, { nullable: false })
  @JoinColumn({ name: 'program_id' })
  programId: Program;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
