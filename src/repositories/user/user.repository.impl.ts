import { InjectRepository } from "@nestjs/typeorm";
import { User } from "domains/user";
import { MyRepository } from "repositories/repository";
import { Repository } from "typeorm";

export class UserRepositoryImpl implements MyRepository<User> {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ){}

    async getAll(): Promise<User[]> {
        return await this.repository.find();
    }
}