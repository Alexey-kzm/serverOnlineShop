import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { AddAdditionalServiceDto } from "./dto/add-additional-service.dto";
import { GetAllServicesWithinDayDto } from "./dto/get-all-services-within-day.dto";
import { DateTime } from "luxon";

@Injectable()
export class AdditionalServicesService {
  constructor(private prisma: PrismaService) {
  }

  async addAdditionalService(userId: number, dto: AddAdditionalServiceDto) {
    const newService = await this.prisma.additionalService.create({
      data: {
        type: dto.type,
        time: dto.dateTime,
        user: { connect: { id: userId } }
      }
    });
    return newService;
  }

  async getAllServicesWithinDay(dto: GetAllServicesWithinDayDto) {
    const dateTime = DateTime.fromJSDate(dto.dateTime);
    return this.prisma.additionalService.findMany({
      where: {
        time: {
          lte: dateTime.set({ hour: 0, minute: 0 }).toJSDate(),
          gte: dateTime.set({ hour: 23, minute: 59 }).toJSDate()
        }
      }, select: {
        time: true
      }
    });
  }
}
