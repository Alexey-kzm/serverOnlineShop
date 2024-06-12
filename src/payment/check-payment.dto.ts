import { IsString } from "class-validator";

export class CheckPaymentDto {
  @IsString()
  readonly paymentId: string;
}