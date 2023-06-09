import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Location } from '../../location/entities/location.entity';

@Entity()
export class Revenue {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Location)
  @JoinColumn()
  location: Location;

  @Column()
  createdAt: Date;

  @Column({ type: 'decimal' })
  sum: number;
}
