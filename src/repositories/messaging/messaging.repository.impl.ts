import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Messaging } from "domains/messaging";
import { GetMessagingDto } from "dtos/messaging";
import { MyRepository } from "repositories/repository";
import { Repository } from "typeorm";

@Injectable()
export class MessagingRepositoryImpl implements MyRepository<Messaging> {
    constructor(
        @InjectRepository(Messaging)
        private readonly repository: Repository<Messaging>
    ){}

    async get(e: PropertyKey): Promise<Messaging | null> {
        return await this.repository.findOne({where: {"id": e as number}});
    }

    async getAll():Promise<Messaging[]> {
        return await this.repository.find()
    }

    async create(data: Messaging): Promise<Messaging> {
        return await this.repository.save(data);
    }

    async getMessaging(dto: GetMessagingDto): Promise<Messaging[]>{
        return await this.repository.find({
            where: {
                fromUid: dto.fromUid,
                toUid: dto.toUid,
            },
            order: { "createdAt": "DESC" }
        });
    };
}