import { Module } from '@nestjs/common';
import { ProductCategoryResolver } from './resolvers/product-category.resolver';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductRepository } from './repositories/product.repository';
import { ProductCategoryRepository } from './repositories/product-category.repository';
import { ProductCategoryService } from './services/product-category.service';
import { ProductCategory } from './entities/product-category.entity';
import { ProductCategoryDataLoader } from './dataloaders/product-category.dataloader';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductCategory])],
  providers: [
    ProductResolver,
    ProductService,
    ProductRepository,
    ProductCategoryResolver,
    ProductCategoryService,
    ProductCategoryRepository,
    ProductCategoryDataLoader,
  ],
})
export class ProductModule {}
