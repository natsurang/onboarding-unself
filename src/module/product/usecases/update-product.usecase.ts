import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductReqDTO, ProductResDTO } from './product.dto';

@Injectable()
export class UpdateProductUsecase {
  constructor(private readonly productService: ProductService) {}

  public async execute(
    id: string,
    data: ProductReqDTO,
  ): Promise<ProductResDTO> {
    return this.productService.updateProduct(id, data);
  }
}
