import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductReqDTO, ProductResDTO } from './product.dto';

@Injectable()
export class CreateProductUsecase {
  constructor(private readonly productService: ProductService) {}

  public async execute(data: ProductReqDTO): Promise<ProductResDTO> {
    return this.productService.createProduct(data);
  }
}
