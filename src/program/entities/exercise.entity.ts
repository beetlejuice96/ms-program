/**
 * this is the entity of the exercise
 * this entity must be contain all field for exercise.
 * first field is id, this field is unique and auto increment.
 * second field is name, this field is string and max length is 100.
 * third field is description, this field is string and max length is 400.
 * fourth field is array of links,
 * this links must be contain material for exercise like:
 * video, image, pdf, etc.
 *
 * in the future we can add  relation with the same entity to
 * indicate that they  are variations of the same exercise
 */

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity(`pr_exercise`)
export class Exercise {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 400, default: null })
  description: string;

  //TODO: add array of links for exercise
  // @Column({ name: 'links', type: 'array', array: true, default: null })
  // links: string[];

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
