import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AdditionalServicesService } from "./additional-services.service";
import { Auth } from "../auth/decorators/auth.decorator";
import { CurrentUser } from "../auth/decorators/user.decorator";
import { UserDto } from "../user/user.dto";
import { AddAdditionalServiceDto } from "./dto/add-additional-service.dto";
import { GetAllServicesWithinDayDto } from "./dto/get-all-services-within-day.dto";

@Controller("additional-services")
export class AdditionalServicesController {
  constructor(private readonly additionalServicesService: AdditionalServicesService) {
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Post("create")
  async createNew(@CurrentUser("id") id: number, @Body() dto: AddAdditionalServiceDto) {
    await this.additionalServicesService.addAdditionalService(id, dto);
  }

  @Get("within-day")
  async getWithinDay(@Body() dto: GetAllServicesWithinDayDto) {
    await this.additionalServicesService.getAllServicesWithinDay(dto);
  }
}
