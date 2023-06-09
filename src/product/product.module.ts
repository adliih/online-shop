import { Module } from '@nestjs/common';
import { ProductCategoryResolver } from './resolvers/product-category.resolver';
import { ProductResolver } from './resolvers/product.resolver';

@Module({
  providers: [ProductCategoryResolver, ProductResolver],
})
export class ProductModule {}
