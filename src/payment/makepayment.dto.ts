import { IsNumber, IsObject } from "class-validator";

export class MakePaymentDTO {
  @IsNumber()
  readonly amount: number;

}

