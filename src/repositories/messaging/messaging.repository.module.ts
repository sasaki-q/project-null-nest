import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Messaging } from "domains/messaging";
import { MyRepository } from "repositories/repository";
import { MessagingRepositoryImpl } from "./messaging.repository.impl";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Messaging
        ])
    ],
    providers: [
        {
            provide: MyRepository<Messaging>,
            useClass: MessagingRepositoryImpl,
        }
    ],
    exports: [
        MyRepository<Messaging>
    ]
})

export class MessagingRepositoryModule{}