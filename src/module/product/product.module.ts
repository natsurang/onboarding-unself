import { Module } from '@nestjs/common';
import {DataAccessLayerModule} from '../data-access-layer/data-access-layer.module';
import { ProductController } from './product.controller';
import { ProductService } from './services/product.service';
import { GetProductUsecase } from './usecases/get-product.usecase';
import { CreateProductUsecase } from './usecases/create-product.usecase';
import { UpdateProductUsecase } from './usecases/update-product.usecase';
import { DeleteProductUsecase } from './usecases/delete-product.usecase';

@Module({
    imports:[DataAccessLayerModule],
    controllers:[ProductController],
    providers:[ProductService, GetProductUsecase, CreateProductUsecase, UpdateProductUsecase, DeleteProductUsecase],
})
export class ProductModule {}
