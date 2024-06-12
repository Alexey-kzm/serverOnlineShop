import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
  products:ProductDto[];

  @IsString()
  address:string;

  @IsNumber()
  orderCost:number;
}

class ProductDto{
  @IsNumber()
  productId:number;
  @IsNumber()
  count:number;
}