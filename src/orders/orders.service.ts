import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { PaymentService } from "../payment/payment.service";
import { PrismaService } from "../prisma.service";

@Injectable()
export class OrdersService {
  constructor(private readonly paymentService: PaymentService, private prisma: PrismaService) {
  }

  async createOrder(userId: number, createOrderDto: CreateOrderDto) {
    const allOrders = await this.getAllOrders(userId);
    const payment = await this.paymentService.makePayment({ amount: createOrderDto.orderCost, description: `Заказ №${allOrders.length}`});
    const order = await this.prisma.order.create({
      data: {
        paymentId: payment.id,
        address: createOrderDto.address,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });
    for (const product of createOrderDto.products) {
      await this.prisma.orderProduct.create({
        data: {
          count: product.count,
          productId: product.productId,
          mainorder: {
            connect: {
              id: order.id
            }
          }
        }
      });
    }
    return payment;
  }

  async getAllOrders(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId: userId
      },
      select: {
        address: true,
        paymentId: true,
        products: {
          select: {
            productId: true,
            count: true
          }
        }
      }
    });
  }
}
