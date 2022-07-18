import { Module } from "@nestjs/common";
import { MessagingRepositoryModule } from "repositories/messaging";
import { MessagingFactoryService } from "./messaging.factory.service";
import { MessagingUsecaseService } from "./messaging.usecase.service";

@Module({
    imports: [
        MessagingRepositoryModule,
    ],
    providers: [
        MessagingUsecaseService,
        MessagingFactoryService,
    ],
    exports: [
        MessagingUsecaseService,
        MessagingFactoryService,
    ]
})

export class MessagingUsecaseModule{}