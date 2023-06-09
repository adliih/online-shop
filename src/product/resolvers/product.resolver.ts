import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from '../entities/product.entity';
import { CreateProductDto } from '../dtos/create-product.dto';

@Resolver(Product)
export class ProductResolver {
  @Query(() => [Product])
  products(@Args('categoryId', { type: () => ID }) categoryId: number) {
    return [];
  }
  @Query(() => Product)
  product(@Args('id', { type: () => ID }) id: number) {
    return { id };
  }

  @Mutation(() => Product)
  createProduct(@Args('input') productInput: CreateProductDto) {
    return productInput;
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('id', { type: () => ID }) id: number,
    @Args('input') productInput: CreateProductDto,
  ) {
    return { id, ...productInput };
  }

  @Mutation(() => Boolean)
  deleteProduct(@Args('id', { type: () => ID }) id: number) {
    return false;
  }
}
