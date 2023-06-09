import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductCategory } from './product-category.entity';
import { Supplier } from '../../supplier/entities/supplier.entity';
import { Location } from '../../location/entities/location.entity';
import { Product } from './product.entity';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Location)
  @JoinColumn()
  location: Location;

  @Column()
  quantity: number;
}
