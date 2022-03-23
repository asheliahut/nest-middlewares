import { Injectable, NestMiddleware } from '@nestjs/common';
import helmet from 'helmet';

@Injectable()
export class HelmetXssFilterMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: any) {
        helmet.xssFilter()(req, res, next);
    }
}
