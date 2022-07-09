import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("hc")
  hc(): string { return "healthy" }
}
