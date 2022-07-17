import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GetMessagingDto {
    @IsNotEmpty({message: "fromUidは必須属性です"})
    @IsNumber()
    fromUid: number;

    @IsNotEmpty({message: "toUidは必須属性です"})
    @IsNumber()
    toUid: number;
}

export class CreateMessageDto extends GetMessagingDto {
    @IsNotEmpty({message: "typeは必須属性です"})
    @IsEnum({
        type: 'enum',
        enum: ["text", "image"],
        default: "text",
    })
    type: "text" | "image"

    @IsNotEmpty({message: "contentsは必須属性です"})
    @IsString()
    contents: string
}