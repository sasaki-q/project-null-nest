import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Socket, Server } from 'socket.io';
  
  @WebSocketGateway({cors: { origin: '*'}})
  export class MessagingGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly fromUid: number;
    private readonly toUid: number;
  
    constructor() {}
   
    @WebSocketServer() server: Server;
   
    @SubscribeMessage('toServer')
    async handleSendMessage(): Promise<void> {}
   
    handleConnection(client: Socket, ...args: any[]) {}
  
    handleDisconnect(client: Socket) {}
  }