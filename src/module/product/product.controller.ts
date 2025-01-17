import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductUsecase } from './usecases/create-product.usecase';
import { DeleteProductUsecase } from './usecases/delete-product.usecase';
import { GetProductUsecase } from './usecases/get-product.usecase';
import { GetProductsUsecase } from './usecases/get-products.usecase';
import { ProductReqDTO, ProductResDTO } from './usecases/product.dto';
import { UpdateProductUsecase } from './usecases/update-product.usecase';

@Controller('product')
export class ProductController {
  constructor(
    private readonly getProductUsecase: GetProductUsecase,
    private readonly getProductsUsecase: GetProductsUsecase,
    private readonly createProductUsecase: CreateProductUsecase,
    private readonly updateProductUsecase: UpdateProductUsecase,
    private readonly deleteProductUsecase: DeleteProductUsecase,
  ) {}

  @Get()
  public async getProducts(): Promise<ProductResDTO[]> {
    return this.getProductsUsecase.execute();
  }

  @Get(':id')
  public async getProduct(@Param('id') id: string): Promise<ProductResDTO> {
    return this.getProductUsecase.execute(id);
  }

  @Post()
  public async createProduct(
    @Body() data: ProductReqDTO,
  ): Promise<ProductResDTO> {
    return this.createProductUsecase.execute(data);
  }

  @Patch(':id')
  public async updateProduct(
    @Param('id') id: string,
    @Body() data: ProductReqDTO,
  ): Promise<ProductResDTO> {
    return this.updateProductUsecase.execute(id, data);
  }

  @Delete(':id')
  public async deleteProduct(@Param('id') id: string): Promise<string> {
    return this.deleteProductUsecase.execute(id);
  }
}
