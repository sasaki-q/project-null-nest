import { Body, Controller, Get, InternalServerErrorException, Post } from "@nestjs/common";
import { User } from "domains/user";
import { TransactionDto } from "dtos/user";
import { Todo } from "domains/todo";
import { UserFactoryService, UserUsecaseService } from "usecases/user";
import { TodoFactoryService } from "usecases/todo/todo.factory.service";

@Controller("/user")
export class UserController {
    constructor(
        private readonly userFactory: UserFactoryService,
        private readonly userUsecase: UserUsecaseService,

        private readonly todoFactory: TodoFactoryService,
    ){}

    @Get("/")
    async getAll(): Promise<Array<User>> {
        try{
            return await this.userUsecase.getAll();
        } catch(err) {
            console.log("DEBUG error message === ", err)
            
            throw new InternalServerErrorException()
        }
    }

    @Post("/")
    async createUser(@Body() dto : TransactionDto): Promise<any> {
        const { user, todo } = dto;
        try{
            const createdUser: User = this.userFactory.create(user)
            const createdTodo: Todo = this.todoFactory.create(todo)

            return { "user": createdUser, "todo": createdTodo }
        }catch(err){
            console.log("DEBUG error message === ", err)
            throw new InternalServerErrorException()
        }
    }
}