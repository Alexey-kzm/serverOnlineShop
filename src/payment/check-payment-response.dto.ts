import { IsBoolean, IsObject, IsString } from "class-validator";

export class CheckPaymentResponseDto{
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

  @IsBoolean()
  paid:boolean;
}