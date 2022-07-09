import { Injectable } from "@nestjs/common";
import { User } from "domains/user";
import { CreateUserDto } from "dtos/user";

@Injectable()
export class UserFactoryService {
    create(dto: CreateUserDto): User {
        const user = new User();
        user.thirdpartyUid = dto.thirdpartyUid;
        user.email = dto.email.toString();
        return user;
    }
}