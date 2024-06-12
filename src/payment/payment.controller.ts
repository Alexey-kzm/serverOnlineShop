import { Body, Controller, Get, Post } from "@nestjs/common";
import { PaymentService } from './payment.service';
import { MakePaymentDTO } from "./makepayment.dto";
import { Auth } from "../auth/decorators/auth.decorator";
import { CheckPaymentDto } from "./check-payment.dto";

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Auth()
  @Post()
  makePayment(@Body() makePaymentDto:MakePaymentDTO){
    return this.paymentService.makePayment(makePaymentDto);
  }

  @Auth()
  @Get("/info")
  checkPayment(@Body() checkPaymentDto:CheckPaymentDto){
    return this.paymentService.checkPayment(checkPaymentDto);
  }
}
