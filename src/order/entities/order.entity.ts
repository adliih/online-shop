import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Location } from '../../location/entities/location.entity';
import { Address } from '../../location/entities/address.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Location)
  @JoinColumn()
  shippedFrom: Location;

  @ManyToOne(() => Customer)
  @JoinColumn()
  customer: Customer;

  @Column()
  createdAt: Date;

  @Column(() => Address)
  address: Address;
}
