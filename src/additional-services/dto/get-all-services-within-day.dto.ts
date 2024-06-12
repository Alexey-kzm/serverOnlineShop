import { IsDate, IsString } from "class-validator";

export class GetAllServicesWithinDayDto {
  @IsString()
  dateTime:string;
}