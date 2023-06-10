import * as DataLoader from 'dataloader';
import { ProductCategory } from '../entities/product-category.entity';
import { ProductCategoryService } from '../services/product-category.service';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ProductCategoryDataLoader extends DataLoader<
  number,
  ProductCategory
> {
  private logger = new Logger(ProductCategoryDataLoader.name);

  constructor(productCategoryService: ProductCategoryService) {
    super(async (ids: number[]): Promise<ProductCategory[]> => {
      this.logger.log(`Start loading: ${ids}`);

      const productCategories =
        await productCategoryService.getProductCategoriesByIds(ids);

      this.logger.log(`Finish loading: ${ids}`);

      return productCategories;
    });
  }
}
