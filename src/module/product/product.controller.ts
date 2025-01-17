import { Controller, Get, Param, Body } from '@nestjs/common';
import { GetProductUsecase } from './usecases/get-product.usecase';
import { CreateProductUsecase } from './usecases/create-product.usecase';
import { UpdateProductUsecase } from './usecases/update-product.usecase';
import { DeleteProductUsecase } from './usecases/delete-product.usecase';
import { ProductResDTO, ProductReqDTO } from './usecases/product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly getProductUsecase: GetProductUsecase,
    private readonly createProductUsecase: CreateProductUsecase,
    private readonly updateProductUsecase: UpdateProductUsecase,
    private readonly deleteProductUsecase: DeleteProductUsecase
  ) {}

  @Get(':id')
  public async getProduct(@Param('id') id: string): Promise<ProductResDTO> {
    return this.getProductUsecase.execute(id);
  }

  public async createProduct(@Body() createOrder: ProductReqDTO): Promise<ProductResDTO> {
    return this.createProductUsecase.execute(createOrder);
  }

  public async updateProduct(@Param('id') id: string, @Body() updateOrder: ProductReqDTO): Promise<ProductResDTO> {
    return this.updateProductUsecase.execute(id, updateOrder);
  }

    public async deleteProduct(@Param('id') id: string): Promise<string> {
        return this.deleteProductUsecase.execute(id);
    }
}
