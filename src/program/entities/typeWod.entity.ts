/**
 *  this entity must be contain all field for typeWod.
 * first field is id, this field is unique and auto increment.
 * second field is name, this field is string and max length is 100.
 * third field is description, this field is string and max length is 400.
 *
 *
 * when i say "wod" i mean "workout of the day" but not like crossfit, this is rutine if the day in a gym.
 * the point to this entity is to know what type of wod in a gym, for example:
 * 1. fullbody
 * 2. upper body
 * 3. lower body
 * 4. push
 * 5. pull
 * 6. etc
 *
 *
 * this entity could change in the future, because i could add tags in exercise, and this tags could be the same of typeWod.
 */

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity(`pr_type_wod`)
export class TypeWod {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 400, default: null })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
