import { Module } from '@nestjs/common';
import { DataAccessLayerModule } from '../data-access-layer/data-access-layer.module';
import { ProductController } from './product.controller';
import { ProductService } from './services/product.service';
import { CreateProductUsecase } from './usecases/create-product.usecase';
import { DeleteProductUsecase } from './usecases/delete-product.usecase';
import { GetProductUsecase } from './usecases/get-product.usecase';
import { GetProductsUsecase } from './usecases/get-products.usecase';
import { UpdateProductUsecase } from './usecases/update-product.usecase';

@Module({
  imports: [DataAccessLayerModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    GetProductUsecase,
    GetProductsUsecase,
    CreateProductUsecase,
    UpdateProductUsecase,
    DeleteProductUsecase,
  ],
})
export class ProductModule {}
