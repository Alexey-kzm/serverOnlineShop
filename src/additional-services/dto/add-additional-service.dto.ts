import { IsDate, IsEnum, IsString } from "class-validator";
import { ServiceType } from "@prisma/client";

export class AddAdditionalServiceDto {
  @IsEnum(ServiceType)
  type: ServiceType;

  @IsString()
  dateTime:string
}