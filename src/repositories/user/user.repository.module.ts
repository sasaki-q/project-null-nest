import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "domains/user";
import { MyRepository } from "repositories/repository";
import { UserRepositoryImpl } from "./user.repository.impl";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ])
    ],
    providers: [
        {
            provide: MyRepository<User>,
            useClass: UserRepositoryImpl,
        }
    ],
    exports: [
        MyRepository<User>
    ]
})

export class UserRepositoryModule{}