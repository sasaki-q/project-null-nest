import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "domains/todo";
import { MyRepository } from "repositories/repository";
import { TodoRepositoryImpl } from "./todo.repository.impl";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Todo
        ])
    ],
    providers: [
        {
            provide: MyRepository<Todo>,
            useClass: TodoRepositoryImpl,
        }
    ],
    exports: [
        MyRepository<Todo>
    ]
})

export class TodoRepositoryModule{}