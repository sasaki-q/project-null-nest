import { Injectable } from "@nestjs/common";
import { User } from "domains/user";
import { CreateUserDto } from "dtos/user";

@Injectable()
export class UserFactoryService {
    create(dto: CreateUserDto): User {
        const user = new User();
        user.age = dto.age;
        user.name = dto.name;
        user.role = dto.role;
        user.email = String(dto.email);
        user.password = dto.password;
        return user;
    }
}