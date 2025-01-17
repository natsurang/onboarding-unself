import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductResDTO } from './product.dto';

@Injectable()
export class GetProductsUsecase {
  constructor(private readonly productService: ProductService) {}

  public async execute(): Promise<ProductResDTO[]> {
    return this.productService.getProducts();
  }
}
