import { IsBoolean, IsObject, IsString } from "class-validator";


export class MakePaymentResponseDto{
  @IsString()
  id:string;
  @IsString()
  status:string;

  @IsObject()
  amount:{
    value:string;
    currency:string;
  };

  @IsString()
  description:string;

  @IsObject()
  confirmation:{
    type:string;
    confirmation_url:string;
  }

  @IsBoolean()
  test:boolean;

  @IsBoolean()
  paid:boolean;

  @IsBoolean()
  refundable:boolean;

  @IsObject()
  metadata:object;
}