import { Module } from "@nestjs/common";
import { TodoRepositoryModule } from "repositories/todo";
import { TodoFactoryService } from "./todo.factory.service";
import { TodoUsecaseService } from "./todo.usecase.service";

@Module({
    imports: [
        TodoRepositoryModule
    ],
    providers: [
        TodoUsecaseService,
        TodoFactoryService,
    ],
    exports: [
        TodoUsecaseService,
        TodoFactoryService,
    ]
})

export class TodoUsecaseModule{}