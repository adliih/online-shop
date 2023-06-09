import { Query, Resolver } from '@nestjs/graphql';
import { ProductCategory } from '../entities/product-category.entity';

@Resolver(ProductCategory)
export class ProductCategoryResolver {
  @Query(() => [ProductCategory])
  productCategories() {
    return [];
  }
}
