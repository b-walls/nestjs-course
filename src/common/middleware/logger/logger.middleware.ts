import { Module, NestMiddleware } from '@nestjs/common';

export class LoggerMidleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    console.log('Request ...', new Date().toDateString());
    next();
  }
}
