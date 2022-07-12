import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "domains/user";
import { MyRepository } from "repositories/repository";
import { Repository } from "typeorm";

@Injectable()
export class UserRepositoryImpl implements MyRepository<User> {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ){}

    async get(sub: string): Promise<User | null> {
        return await this.repository.findOne({where: {"thirdpartyUid": sub}})
    }

    async create(data: User): Promise<User> {
        return await this.repository.save(data);
    }
}