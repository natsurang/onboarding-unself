import { Injectable } from '@nestjs/common';
import { ProductResDTO, ProductReqDTO } from '../usecases/product.dto';

@Injectable()
export class ProductService {
    constructor(private readonly productDAL: ProductDAL) {}

    public async getProduct(id: string): Promise<ProductResDTO> {
        return this.productDAL.getById(id);
    }

    public async createProduct(product: ProductReqDTO): Promise<ProductResDTO> {
        return this.productDAL.create(product);
    }

    public async updateProduct(id: string, product: ProductReqDTO): Promise<ProductResDTO> {
        return this.productDAL.update(id, product);
    }

    public async deleteProduct(id: string): Promise<string> {
        return this.productDAL.delete(id);
    }
}
