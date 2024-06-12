import { Module } from '@nestjs/common';
import { AdditionalServicesService } from './additional-services.service';
import { AdditionalServicesController } from './additional-services.controller';
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [AdditionalServicesController],
  providers: [AdditionalServicesService, PrismaService],
})
export class AdditionalServicesModule {}
