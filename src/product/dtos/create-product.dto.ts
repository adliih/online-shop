import { Field, ID, InputType, PartialType, PickType } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';

@InputType()
export class CreateProductDto extends PickType(
  Product,
  ['name', 'description', 'price', 'weight'],
  InputType,
) {
  @Field(() => ID, { nullable: false })
  categoryId: number;
}
