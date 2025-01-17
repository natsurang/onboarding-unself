import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductResDTO } from './product.dto';

@Injectable()
export class GetProductUsecase {
  constructor(private readonly productService: ProductService) {}

  public async execute(id: string): Promise<ProductResDTO> {
    return this.productService.getProduct(id);
  }
}
