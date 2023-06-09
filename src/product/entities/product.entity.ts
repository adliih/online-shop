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
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column({ type: 'decimal' })
  @Field()
  price: number;

  @Column({ type: 'double precision' })
  @Field()
  weight: number;

  @ManyToOne(() => ProductCategory)
  @JoinColumn()
  @Field(() => ProductCategory)
  category: ProductCategory;

  @ManyToOne(() => Supplier)
  @JoinColumn()
  @Field(() => Supplier)
  supplier: Supplier;
}
