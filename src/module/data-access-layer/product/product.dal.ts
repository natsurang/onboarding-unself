import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { ProductDL } from './product.dl';


@Injectable()
export class ProductDAL {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {
  }

  async getById(id: string): Promise<ProductDL> {
    const entity = await this.productRepository.findOneBy({ id });
    if (!entity) throw new NotFoundException('Order not found');
    return this.toDataLayer(entity);
  }

  async create(productDL: Partial<ProductDL>): Promise<ProductDL> {
    const entity = this.productRepository.create(productDL);
    const result = await this.productRepository.save(entity);
    return this.toDataLayer(entity);
  }

  async update(id: string, productDL: Partial<ProductDL>): Promise<ProductDL> {
    const entity = this.productRepository.create(productDL);
    entity.id = id;
    const result = await this.productRepository.save(entity);
    return this.toDataLayer(entity);
  }

  async delete(id: string): Promise<string> {
    const entity = await this.productRepository.findOneBy({ id });
    if (!entity) throw new NotFoundException('Order not found');
    await this.productRepository.remove(entity);
    return id;
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
