import { IsEmail, IsString, MinLength, minLength } from "class-validator";

export class LoginDto{
  @IsEmail()
  email: string;

  @MinLength(6,{
    message: 'Password must be at least 6 characters',
  })
  @IsString()
  password:string
}

export class RegisterDto{
  @IsEmail()
  email: string;

  @MinLength(6,{
    message: 'Password must be at least 6 characters',
  })
  @IsString()
  password:string;

  @IsString()
  name: string;

  @IsString()
  lastname: string;
}