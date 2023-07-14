/**this entity is created with the finnality to marrry the program with the user because wod and exercise have a many to many relationship
 * fields:
 * first field is id, this field is number and autoincrement.
 * second field is relation with exercise, FK is exercise_id, this field is number.
 * third field is relation with wod, FK is wod_id, this field is number.
 */
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exercise } from './exercise.entity';
import { Wod } from './wod.entity';

@Entity(`pr_wod_exercise`)
export class WodExercise {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Exercise, (exercise) => exercise, { eager: true })
  @JoinColumn({ name: 'exercise_id' })
  exerciseId: Exercise;

  @ManyToOne(() => Wod, (wod) => wod, { eager: true })
  @JoinColumn({ name: 'wod_id' })
  wodId: Wod;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
