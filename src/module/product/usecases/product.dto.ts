export class ProductResDTO {
    id: string;
    name: string;
    description: string;
    totalAmount: number;
    availableAmount: number;
    price: number;
}

export class ProductReqDTO {
    name: string;
    description: string;
    totalAmount: number;
    availableAmount: number;
    price: number;
}