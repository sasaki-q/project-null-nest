import { Inject, Injectable } from "@nestjs/common";
import { Messaging } from "domains/messaging";
import { CreateMessageDto, GetMessagingDto } from "dtos/messaging";
import { MessagingRepositoryModule } from "repositories/messaging";
import { MyRepository } from "repositories/repository";

@Injectable()
export class MessagingUsecaseService {
    constructor(
        @Inject(MyRepository<Messaging>)
        private readonly repository: MyRepository<Messaging>
    ){}

    async getMessaging(dto: GetMessagingDto): Promise<Array<Messaging>> {
        return await this.repository.getMessaging(dto)
    }

    async createMessaging(dto: Messaging): Promise<Messaging> {
        return await this.repository.create(dto)
    }
}