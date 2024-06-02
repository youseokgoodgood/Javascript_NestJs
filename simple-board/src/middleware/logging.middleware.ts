import { Logger, NestMiddleware } from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

export class LoggingMiddleWare implements NestMiddleware {
  private readonly logger = new Logger();

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const startTime = Date.now();

    //API가 완료되는 시점에 동작
    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;

      this.logger.log(
        `[${method}]${originalUrl}:${statusCode} - ${responseTime}ms`,
      );
    });

    next();
  }
}
