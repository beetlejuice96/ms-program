/**
 * this class use TYPEORM.
 * this is the entity of the typeProgram table in the database
 * this entity must be contain all field for typeProgram.
 * first field is id, this field is unique and auto increment.
 * second field is name, this field is string and max length is 100.
 * third field is description, this field is string and max length is 400.
 * fourth field is amount days peer week for typeProgram, this field is number.
 *
 */
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity(`pr_type_program`)
export class TypeProgram {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 400, default: null })
  description: string;

  @Column({ name: 'amount_days_week', default: null })
  amountDaysWeek: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt?: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt?: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt?: Date;
}
