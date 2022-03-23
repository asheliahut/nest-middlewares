import { Injectable, NestMiddleware } from '@nestjs/common';
import helmet from 'helmet';

@Injectable()
export class HelmetHidePoweredByMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: any) {
        helmet.hidePoweredBy()(req, res, next);
    }
}
