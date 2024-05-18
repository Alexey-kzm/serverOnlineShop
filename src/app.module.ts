import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma.service";
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ConfigModule.forRoot(),AuthModule, UserModule, PaymentModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}