import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from '../entities/product-category.entity';

@Injectable()
export class ProductCategoryRepository extends Repository<ProductCategory> {
  constructor(
    @InjectRepository(ProductCategory)
    repository: Repository<ProductCategory>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
