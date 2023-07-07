import { STATE_PROGRAM } from 'src/utils/state-program.enum';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Wod } from './wod.entity';
import { TypeProgram } from './typeProgram.entity';

@Entity(`pr_program`)
export class Program {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 400, default: null })
  description: string;

  @Column({ name: 'file_url', length: 100, default: null })
  fileUrl: string;

  @Column({ name: 'init_date', type: 'timestamp', default: null })
  initDate: string;

  @Column({ name: 'end_date', type: 'timestamp', default: null })
  endDate: string;

  @Column({
    type: 'enum',
    enum: STATE_PROGRAM,
    default: STATE_PROGRAM.OTHER,
  })
  status: STATE_PROGRAM;

  //add relation with wod
  @OneToMany(() => Wod, (wod) => wod.id, { eager: true })
  wod!: Wod[];

  //add relation with typeProgram
  @ManyToOne(() => TypeProgram, { eager: true })
  @JoinColumn({ name: 'type_program_id' })
  typeProgram: TypeProgram;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
