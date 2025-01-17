import { ApiProperty } from '@nestjs/swagger';

export class ProductResDTO {
  id: string;
  name: string;
  description: string;
  totalAmount: number;
  availableAmount: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export class ProductReqDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  totalAmount: number;

  @ApiProperty()
  availableAmount: number;

  @ApiProperty()
  price: number;
}
