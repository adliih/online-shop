import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { ProductCategory } from '../entities/product-category.entity';
import { ProductCategoryService } from '../services/product-category.service';
import { CreateProductCategoryDto } from '../dtos/create-product-category.dto';
import { UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { UserRole } from 'src/user/user-role.enum';

@Resolver(ProductCategory)
@UseGuards(AuthenticatedGuard)
export class ProductCategoryResolver {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Query(() => [ProductCategory])
  async productCategories(): Promise<ProductCategory[]> {
    return this.productCategoryService.getAllProductCategories();
  }

  @UseGuards(RoleGuard(UserRole.ADMIN))
  @Mutation(() => ProductCategory)
  async createProductCategory(
    @Args('input')
    input: CreateProductCategoryDto,
  ): Promise<ProductCategory> {
    return this.productCategoryService.createProductCategory(input);
  }
}
