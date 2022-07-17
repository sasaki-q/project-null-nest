import { Bind } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { CreateMessageDto } from 'dtos/messaging';
import { Socket } from 'socket.io';
import { MessagingFactoryService } from 'usecases/messaging/messaging.factory.service';
import { MessagingUsecaseService } from 'usecases/messaging/messaging.usecase.service';
  
  @WebSocketGateway({cors: { origin: '*'}})
  export class MessagingGateway implements NestGateway {
    // private readonly fromUid: number;
    // private readonly toUid: number;
  
    constructor(
      private readonly usecase: MessagingUsecaseService,
      private readonly factory: MessagingFactoryService,
    ) {}

    afterInit(server: any) {
      console.log("DEBUG socket server init === ", server);
    }
   
    handleConnection(sender: any, ...args: any[]) {
      console.log("DEBUG handling connection === ", sender, args)
      process.nextTick((_) => {
        sender.emit("all_chats", this.usecase.getMessaging({toUid: 1, fromUid: 1}))
      })
    }
  
    handleDisconnect(client: Socket) {
      console.log("DEBUG handling disconnect === ", client)
    }

    @Bind(MessageBody(), ConnectedSocket())
    @SubscribeMessage("to_server")
    handleMessage(dto: CreateMessageDto, sender: any) {
      console.log("DEBUG handler create request === ", dto);
      const createdMessaging =  this.factory.create(dto)
      const res = this.usecase.createMessaging(createdMessaging)
      console.log("DEBUG create message === ", createdMessaging, res, dto)
      sender.emit("to_client", res)
      sender.broadcasr.emit("to_client", res)
    }
  }