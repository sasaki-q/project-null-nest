import { Module } from "@nestjs/common";
import { UserRepositoryModule } from "repositories/user";
import { UserFactoryService } from "./user.factory.service";
import { UserUsecaseService } from "./user.usecase.service";

@Module({
    imports: [
        UserRepositoryModule,
    ],
    providers: [
        UserUsecaseService,
        UserFactoryService,
    ],
    exports: [
        UserUsecaseService,
        UserFactoryService,
    ]
})

export class UserUsecaseModule{}