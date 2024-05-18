import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { User } from "@prisma/client";
import { UserDto } from "./user.dto";
import { hash } from "argon2";

@Injectable()
export class UserService {
  constructor(private prisma:PrismaService) {}

  async byId(id:number){
    const user = await this.prisma.user.findUnique({where:{id:id},
    select:{
      id:true,
      email:true,
      name:true,
      lastname:true,
      password:false,
      orders:{
        select:{
          address:true,
          paymentId:true,
          products:{
            select:{
              productId:true,
              count:true
            }
          }
        }
      }
    }});

    if(!user){
      throw new NotFoundException("User not found");
    }
    return user;
  }

  async updateProfile(id:number,dto:UserDto){
    const user= await this.prisma.user.findUnique({where:{id:id}});

    return this.prisma.user.update({
      where:{id:id},
      data:{
        name:dto.name,
        lastname:dto.lastname,
        password:dto.password?await hash(dto.password):user.password
      }
    })
  }
}
