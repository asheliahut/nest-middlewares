import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';

@Injectable()
export class HelmetOriginAgentClusterMiddleware implements NestMiddleware {
    public use(req: any, res: any, next: any) {
        helmet.originAgentCluster()(req, res, next);    
    }
}
