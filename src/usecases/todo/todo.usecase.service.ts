import { Inject, Injectable } from "@nestjs/common";
import { Todo } from "domains/todo";
import { MyRepository } from "repositories/repository";

@Injectable()
export class TodoUsecaseService {
    constructor (
        @Inject(MyRepository<Todo>)
        private readonly repo: MyRepository<Todo>
    ){}
}