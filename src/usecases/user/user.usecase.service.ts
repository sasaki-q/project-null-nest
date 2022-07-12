import { Inject } from "@nestjs/common";
import { User } from "domains/user";
import { MyRepository } from "repositories/repository";

export class UserUsecaseService {
    constructor(
        @Inject(MyRepository<User>)
        private readonly repository: MyRepository<User>
    ){}

    async get(sub: string):Promise<User | null> {
        return await this.repository.get(sub);
    }

    async getAll():Promise<Array<User>> {
        return await this.repository.getAll();
    }
 
    async create(user: User): Promise<User> {
        return await this.repository.create(user);
    }
}