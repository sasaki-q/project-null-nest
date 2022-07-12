import { Body, Controller, Get, InternalServerErrorException, Param, Post, Put, Query } from "@nestjs/common";
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
            const user = await this.userUsecase.get(id);

            if(user.profileImageUrl) {
                return this.userFactory.createSignedUrl(user.profileImageUrl, user);
            }

            return user
        }catch(err){
            console.log("DEBUG error message === ", err)
            return err
        }
    }

    @Put("/")
    async putImagePath(@IdDecorator() id: string, @Query("path") path: string): Promise<User> {
        try{
            const user = await this.userUsecase.get(id);
            user.profileImageUrl = path;

            await this.userUsecase.create(user);

            return this.userFactory.createSignedUrl(path, user);
        }catch(err){
            console.log("DEBUG error message === ", err)
            return err
        }
    }

    @Post("/create")
    async createUser(
        @IdDecorator() id: string,
        @Body() dto : CreateUserDto
    ): Promise<any> {
        try{
            const existedUser = await this.userUsecase.get(id);

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