import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
import { CrossOriginResourcePolicyOptions } from 'helmet/dist/types/middlewares/cross-origin-resource-policy';

@Injectable()
export class HelmetCrossOriginResourcePolicyMiddleware implements NestMiddleware {

    public static configure(opts: CrossOriginResourcePolicyOptions) {
        this.options = opts;
    }

    private static options: CrossOriginResourcePolicyOptions;

    public use(req: any, res: any, next: any) {
        if (HelmetCrossOriginResourcePolicyMiddleware.options) {
            helmet.crossOriginResourcePolicy(HelmetCrossOriginResourcePolicyMiddleware.options)(req, res, next);
        } else {
            helmet.crossOriginResourcePolicy()(req, res, next);
        }
            
    }
}
