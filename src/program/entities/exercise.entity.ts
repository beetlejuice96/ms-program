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
