import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: { origin: "*" },
  namespace: '/apis/ws',
  path: '/apis/ws/socket.io',
})
export class MessagingGateway implements NestGateway {
  @WebSocketServer() server: Server
  
  handleConnection(socket: Socket) {
    console.log("DEBUG handle connection socket === ", socket.handshake.query)
    socket.emit("init", [])
  }

  //handleDisconnect(client: Socket) {};

  @SubscribeMessage("message")
  handleMessage(socket: Socket) {
    socket.emit("to_client", [])
  }
}
