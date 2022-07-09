import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from 'config/orm';
import { AppController } from './app.controller';
import { UserController } from 'controllers/user.controller';
import { UserUsecaseModule } from 'usecases/user';
import { TodoUsecaseModule } from 'usecases/todo/todo.usecase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    UserUsecaseModule,
    TodoUsecaseModule,
  ],
  controllers: [AppController, UserController],
  providers: [],
})

export class AppModule {}
