import { Field, InputType, PickType } from '@nestjs/graphql';
import { ProductCategory } from '../entities/product-category.entity';

@InputType()
export class CreateProductCategoryDto extends PickType(
  ProductCategory,
  ['name', 'description'],
  InputType,
) {}
