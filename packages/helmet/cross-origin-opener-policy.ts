import { Injectable, NestMiddleware } from '@nestjs/common';
import * as helmet from 'helmet';
import { CrossOriginOpenerPolicyOptions } from 'helmet/dist/types/middlewares/cross-origin-opener-policy';

@Injectable()
export class HelmetCrossOriginOpenerPolicyMiddleware implements NestMiddleware {

    public static configure(opts: CrossOriginOpenerPolicyOptions) {
        this.options = opts;
    }

    private static options: CrossOriginOpenerPolicyOptions;

    public use(req: any, res: any, next: any) {
        if (HelmetCrossOriginOpenerPolicyMiddleware.options) {
            helmet.crossOriginOpenerPolicy(HelmetCrossOriginOpenerPolicyMiddleware.options)(req, res, next);
        } else {
            helmet.crossOriginOpenerPolicy()(req, res, next);
        }
            
    }
}
