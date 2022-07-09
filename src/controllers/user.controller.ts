import { Body, Controller, Get, InternalServerErrorException, Post } from "@nestjs/common";
import { User } from "domains/user";
import { CreateUserDto } from "dtos/user";
import { UserFactoryService, UserUsecaseService } from "usecases/user";

@Controller("/user")
export class UserController {
    constructor(
        private readonly userFactory: UserFactoryService,
        private readonly userUsecase: UserUsecaseService,
    ){}

    @Post("/auth")
    async createUser(@Body() dto : CreateUserDto): Promise<any> {
        try{
            const createdUser: User = this.userFactory.create(dto)
            const res = await this.userUsecase.create(createdUser)

            return res;
        }catch(err){
            console.log("DEBUG error message === ", err)
            throw new InternalServerErrorException()
        }
    }
}