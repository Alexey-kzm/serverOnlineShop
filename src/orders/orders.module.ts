import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PaymentService } from "../payment/payment.service";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService,PaymentService,PrismaService],
})
export class OrdersModule {}
