import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "domains/todo";
import { MyRepository } from "repositories/repository";
import { Repository } from "typeorm";

@Injectable()
export class TodoRepositoryImpl implements MyRepository<Todo> {
    constructor(
        @InjectRepository(Todo)
        private readonly repository: Repository<Todo>
    ) {}

    async getAll():Promise<Todo[]> { return [] };
}