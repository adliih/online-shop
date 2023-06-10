import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { ProductCategory } from '../entities/product-category.entity';
import { ProductCategoryService } from '../services/product-category.service';
import { CreateProductCategoryDto } from '../dtos/create-product-category.dto';

@Resolver(ProductCategory)
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Query(() => [ProductCategory])
  async productCategories(): Promise<ProductCategory[]> {
    return this.productCategoryService.getAllProductCategories();
  }

  @Mutation(() => ProductCategory)
  async createProductCategory(
    @Args('createProductCategoryDto')
    createProductCategoryDto: CreateProductCategoryDto,
  ): Promise<ProductCategory> {
    return this.productCategoryService.createProductCategory(
      createProductCategoryDto,
    );
  }
}
