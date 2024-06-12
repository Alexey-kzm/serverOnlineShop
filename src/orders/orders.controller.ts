import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { Auth } from "../auth/decorators/auth.decorator";
import { CurrentUser } from "../auth/decorators/user.decorator";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }

  @Auth()
  @UsePipes(new ValidationPipe())
  @Post("/create")
  async createOrder(@CurrentUser("id") userId: number, @Body() orderDto: CreateOrderDto) {
    return this.ordersService.createOrder(userId, orderDto);
  }

  @Auth()
  @Get()
  async getAllOrders(@CurrentUser("id") id: number) {
    return this.ordersService.getAllOrders(id);
  }
}
