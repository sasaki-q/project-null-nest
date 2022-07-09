import { Inject } from "@nestjs/common";
import { User } from "domains/user";
import { MyRepository } from "repositories/repository";

export class UserUsecaseService {
    constructor(
        @Inject(MyRepository<User>)
        private readonly repository: MyRepository<User>
    ){}

    async get(email: string):Promise<User | null> {
        return await this.repository.get(email);
    }
 
    async create(user: User): Promise<User> {
        return await this.repository.create(user);
    }
}