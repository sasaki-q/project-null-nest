import { Injectable } from "@nestjs/common";
import { Todo } from "domains/todo";
import { CreateTodoDto } from "dtos/todo";

@Injectable()
export class TodoFactoryService {
    create(dto: CreateTodoDto): Todo {
        const todo = new Todo()
        todo.uid = dto.uid;
        todo.title = dto.title;
        return todo;
    }
}