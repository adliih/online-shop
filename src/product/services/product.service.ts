import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { ProductRepository } from '../repositories/product.repository';
import { CreateProductDto } from '../dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProductsByCategoryId(categoryId: number): Promise<Product[]> {
    return this.productRepository.find({
      where: { categoryId },
    });
  }

  async getProductById(id: number): Promise<Product> {
    return this.productRepository.findOneOrFail({ where: { id } });
  }

  async createProduct(productData: CreateProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(productData);
    return this.productRepository.save(newProduct);
  }

  async updateProduct(
    id: number,
    productData: CreateProductDto,
  ): Promise<Product> {
    await this.productRepository.update(id, productData);
    return this.getProductById(id);
  }

  async deleteProduct(id: number): Promise<boolean> {
    const deleteResult = await this.productRepository.delete(id);

    return deleteResult.affected > 0;
  }
}
