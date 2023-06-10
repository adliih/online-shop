import { Injectable } from '@nestjs/common';
import { ProductCategoryRepository } from '../repositories/product-category.repository';
import { ProductCategory } from '../entities/product-category.entity';
import { CreateProductCategoryDto } from '../dtos/create-product-category.dto';
import { In } from 'typeorm';

@Injectable()
export class ProductCategoryService {
  constructor(
    private readonly productCategoryRepository: ProductCategoryRepository,
  ) {}

  async getAllProductCategories(): Promise<ProductCategory[]> {
    return this.productCategoryRepository.find();
  }

  async createProductCategory(
    createProductCategoryDto: CreateProductCategoryDto,
  ): Promise<ProductCategory> {
    const productCategory = this.productCategoryRepository.create(
      createProductCategoryDto,
    );

    return this.productCategoryRepository.save(productCategory);
  }

  async getProductCategoriesByIds(ids: number[]): Promise<ProductCategory[]> {
    return this.productCategoryRepository.find({
      where: {
        id: In(ids),
      },
    });
  }
}
