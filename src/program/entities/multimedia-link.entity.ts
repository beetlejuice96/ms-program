import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exercise } from './exercise.entity';

@Entity(`pr_multimedia_link`)
export class MultimediaLink {
  @PrimaryGeneratedColumn()
  id?: number;
  //this field is for the link of the multimedia
  @Column({ length: 400 })
  link: string;

  //this entity is relation with only one exercise
  @ManyToOne(() => Exercise, (exercise) => exercise.id)
  @Column({ name: 'exercise_id' })
  exerciseId: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
