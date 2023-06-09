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

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'double precision' })
  weight: number;

  @ManyToOne(() => ProductCategory)
  @JoinColumn()
  category: ProductCategory;

  @ManyToOne(() => Supplier)
  @JoinColumn()
  supplier: Supplier;
}
