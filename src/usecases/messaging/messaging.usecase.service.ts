import { Inject, Injectable } from "@nestjs/common";
import { Messaging } from "domains/messaging";
import { GetMessagingDto } from "dtos/messaging";
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