import { Type } from "class-transformer";
import { IsEmail, IsIn, IsNotEmpty, IsNumber, IsString, IsDefined, IsNotEmptyObject, IsObject, ValidateNested } from "class-validator";
import { Role } from "domains/user";
import { CreateTodoDto } from "./todo";

const mailreg = /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+\)$/;

export class CreateUserDto {
    @IsNotEmpty({message: "ageは必須属性です"})
    @IsNumber()
    age: number;

    @IsNotEmpty({message: "nameは必須属性です"})
    @IsString()
    name: string;

    @IsNotEmpty({message: "emailは必須属性です"})
    @IsIn(["ADMIN", "MASTER", "USER"], { message: "指定されたロールは存在しません" })
    role: Role;

    @IsNotEmpty({message: "emailは必須属性です"})
    @IsEmail({message: "emailの形式で入力されていません"})
    email: typeof mailreg;

    @IsNotEmpty({message: "passwordは必須属性です"})
    @IsString()
    password: string;
}

export class TransactionDto {
    @IsDefined()
    @IsObject()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;

    @IsDefined()
    @IsObject()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateTodoDto)
    todo: CreateTodoDto;
}