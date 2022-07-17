import { Injectable } from "@nestjs/common";
import { Messaging } from "domains/messaging";
import { CreateMessageDto } from "dtos/messaging";

@Injectable()
export class MessagingFactoryService {
    constructor(){}

    create(dto: CreateMessageDto): Messaging {
        const message = new Messaging()
        message.fromUid = dto.fromUid;
        message.toUid = dto.toUid;
        message.type = dto.type;
        message.contents = dto.contents
        return message;
    }
}