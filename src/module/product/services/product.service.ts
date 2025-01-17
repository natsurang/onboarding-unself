import { Injectable } from '@nestjs/common';
import { ProductDAL } from 'src/module/data-access-layer/product/product.dal';
import { ProductReqDTO, ProductResDTO } from '../usecases/product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productDAL: ProductDAL) {}

  public async getProducts(): Promise<ProductResDTO[]> {
    return this.productDAL.getAll();
  }

  public async getProduct(id: string): Promise<ProductResDTO> {
    return this.productDAL.getById(id);
  }

  public async createProduct(data: ProductReqDTO): Promise<ProductResDTO> {
    return this.productDAL.create(data);
  }

  public async updateProduct(
    id: string,
    data: ProductReqDTO,
  ): Promise<ProductResDTO> {
    return this.productDAL.update(id, data);
  }

  public async deleteProduct(id: string): Promise<string> {
    return this.productDAL.delete(id);
  }
}
