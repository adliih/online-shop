import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductService } from '../services/product.service';
import { ProductCategory } from '../entities/product-category.entity';
import { ProductCategoryDataLoader } from '../dataloaders/product-category.dataloader';

@Resolver(Product)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly productCategoryLoader: ProductCategoryDataLoader,
  ) {}

  @Query(() => [Product])
  products(@Args('categoryId', { type: () => ID }) categoryId: number) {
    return this.productService.getProductsByCategoryId(categoryId);
  }

  @Query(() => Product, { nullable: true })
  product(@Args('id', { type: () => ID }) id: number) {
    return this.productService.getProductById(id);
  }

  @Mutation(() => Product)
  createProduct(@Args('input') productInput: CreateProductDto) {
    return this.productService.createProduct(productInput);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('id', { type: () => ID }) id: number,
    @Args('input') productInput: CreateProductDto,
  ) {
    return this.productService.updateProduct(id, productInput);
  }

  @Mutation(() => Boolean)
  deleteProduct(@Args('id', { type: () => ID }) id: number) {
    return this.productService.deleteProduct(id);
  }

  @ResolveField(() => ProductCategory)
  category(@Parent() product: Product) {
    return this.productCategoryLoader.load(product.categoryId);
  }
}
