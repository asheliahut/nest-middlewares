import { Injectable, NestMiddleware } from '@nestjs/common';
import helmet from 'helmet';

@Injectable()
export class HelmetNoSniffMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: any) {
        helmet.noSniff()(req, res, next);
    }
}
