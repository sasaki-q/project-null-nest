import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty({message: "userIDは必須属性です"})
    @IsNumber()
    uid: number;

    @IsNotEmpty({message: "タイトルは必須属性です"})
    @IsString()
    @MinLength(8, {message: "最低8文字は必須です"})
    title: string;
}