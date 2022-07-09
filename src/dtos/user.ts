import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

const mailreg = /^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+\)$/;

export class CreateUserDto {
    @IsNotEmpty({message: "外部サービスのIDは必須属性です"})
    @IsString()
    thirdpartyUid: string;

    @IsNotEmpty({message: "emailは必須属性です"})
    @IsEmail({message: "emailの形式で入力されていません"})
    email: typeof mailreg;
}