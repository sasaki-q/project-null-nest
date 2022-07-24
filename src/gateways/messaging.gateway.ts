import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { Messaging } from 'domains/messaging';
import { CreateMessageDto, GetMessagingDto } from 'dtos/messaging';
import { Server, Socket } from 'socket.io';
import { MessagingFactoryService } from 'usecases/messaging/messaging.factory.service';
import { MessagingUsecaseService } from 'usecases/messaging/messaging.usecase.service';

@WebSocketGateway({
  cors: { origin: "*" },
  namespace: '/apis/ws',
  path: '/apis/ws/socket.io',
})
export class MessagingGateway implements NestGateway {
  constructor(
    private readonly factory: MessagingFactoryService,
    private readonly usecase: MessagingUsecaseService,
  ) {}
  @WebSocketServer() server: Server
  
  async handleConnection(socket: Socket) {
    try{
      const query = socket.handshake.query
      const dto = { toUid: query.toUid, fromUid: query.fromUid }
      const msgs: Messaging[] = await this.usecase.getMessaging(dto)
      socket.emit("init_to_client", msgs)
    }catch(err){
      console.log("DEBUG error message === ", err)
    }
  }

  @SubscribeMessage("to_server")
  async handleMessage(socket: Socket, dto: CreateMessageDto) {
    const msg = this.factory.create(dto)
    const createdMsg = await this.usecase.createMessaging(msg);
    socket.emit("to_client", createdMsg)
  }
}
