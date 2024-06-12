import { IsNumber, IsObject, IsString } from "class-validator";

export class MakePaymentDTO {
  @IsNumber()
  readonly amount: number;
  @IsString()
  description: string;
}

