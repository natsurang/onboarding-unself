import { Injectable } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { ProductResDTO, ProductReqDTO } from './product.dto';

@Injectable()
export class CreateProductUsecase {
  constructor(private readonly productService: ProductService) {}

  public async execute(createProductDTO: ProductReqDTO): Promise<ProductResDTO> {
    return this.productService.createProduct(createProductDTO);
  }
}