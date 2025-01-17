import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDL } from './Product.dl';
import { ProductEntity } from './Product.entity';

@Injectable()
export class ProductDAL {
  constructor(
    @InjectRepository(ProductEntity)
    private ProductRepository: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ProductDL[]> {
    const entities = await this.ProductRepository.find();
    return entities.map((entity) => this.toDataLayer(entity));
  }

  async getById(id: string): Promise<ProductDL> {
    const entity = await this.ProductRepository.findOneBy({ id });
    if (!entity) throw new NotFoundException('Product not found');
    return this.toDataLayer(entity);
  }

  async create(productDL: Partial<ProductDL>): Promise<ProductDL> {
    const entity = this.ProductRepository.create(productDL);
    const result = await this.ProductRepository.save(entity);
    return this.toDataLayer(result);
  }

  async update(id: string, ProductDL: Partial<ProductDL>): Promise<ProductDL> {
    await this.ProductRepository.update(id, ProductDL);
    return this.getById(id);
  }

  async delete(id: string): Promise<string> {
    await this.ProductRepository.delete(id);
    return 'Product deleted';
  }

  toDataLayer(entity: ProductEntity): ProductDL {
    return {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      totalAmount: entity.totalAmount,
      availableAmount: entity.availableAmount,
      price: entity.price,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
