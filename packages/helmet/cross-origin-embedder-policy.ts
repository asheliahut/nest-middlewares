import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetCrossOriginEmbedderPolicyMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: any) {
            helmet.crossOriginEmbedderPolicy()(req, res, next);
    }
}
