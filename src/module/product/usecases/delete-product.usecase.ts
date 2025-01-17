import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Injectable()
export class DeleteProductUsecase {
  constructor(private readonly productService: ProductService) {}

  public async execute(id: string): Promise<string> {
    return this.productService.deleteProduct(id);
  }
}
