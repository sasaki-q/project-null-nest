import { Body, Controller, Get, InternalServerErrorException, Post } from "@nestjs/common";
import { IdDecorator } from "common/decorator.service";
import { User } from "domains/user";
import { CreateUserDto } from "dtos/user";
import { UserFactoryService, UserUsecaseService } from "usecases/user";

@Controller("/user")
export class UserController {
    constructor(
        private readonly userFactory: UserFactoryService,
        private readonly userUsecase: UserUsecaseService,
    ){}

    @Get("/")
    async getUser(@IdDecorator() id: string): Promise<User> {
        try{
            return new User()
        }catch(err){
            console.log("DEBUG error message === ", err)
            return err
        }
    }

    @Post("/create")
    async createUser(@Body() dto : CreateUserDto): Promise<any> {
        try{
            const existedUser = await this.userUsecase.get(dto.email.toString());

            if(existedUser) return existedUser;

            const createdUser = this.userFactory.create(dto)
            const res = await this.userUsecase.create(createdUser)

            return res;
        }catch(err){
            console.log("DEBUG error message === ", err)
            throw new InternalServerErrorException()
        }
    }
}