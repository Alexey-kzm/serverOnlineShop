import { ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { MakePaymentDTO } from "./makepayment.dto";
import axios from "axios";
import { MakePaymentResponseDto } from "./makepaymentresponse.dto";
import { CheckPaymentDto } from "./check-payment.dto";
import { CheckPaymentResponseDto } from "./check-payment-response.dto";

@Injectable()
export class PaymentService {
  async makePayment(makePayment: MakePaymentDTO) {
    const { data } = await axios.post<MakePaymentResponseDto>("https://api.yookassa.ru/v3/payments", {
      "amount": {
        "value": makePayment.amount.toString(),
        "currency": "RUB"
      },
      "confirmation": {
        "type": "redirect",
        "return_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      "description": "Заказ N1",
    }, {
      auth: {
        username: "384593",
        password: "test_8TLZ6bsUazuHtrQl7zR136X_d80CyUO8qxM1ynSR0eE"
      },
      headers: {
        "Content-Type": "application/json",
        "Idempotence-Key": Date.now().toString()
      }
    }).catch();
    return {
      id:data.id,
      confirmationUrl:data.confirmation.confirmation_url
    };
  }

  async checkPayment(checkPaymentDto: CheckPaymentDto):Promise<CheckPaymentResponseDto> {
    const {data} = await axios.get<CheckPaymentResponseDto>(`https://api.yookassa.ru/v3/payments/${checkPaymentDto.paymentId}`,{
      auth: {
        username: "384593",
        password: "test_8TLZ6bsUazuHtrQl7zR136X_d80CyUO8qxM1ynSR0eE"
      },
    });
    return {
      id:data.id,
      amount:data.amount,
      description:data.description,
      paid:data.paid,
      status:data.status,
    };
  }
}
