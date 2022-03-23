import { Injectable, NestMiddleware } from '@nestjs/common';
import requestID, { Options as requestIdOptions } from 'express-request-id';

@Injectable()
export class ExpressRequestIdMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: requestIdOptions) {
        this.options = opts;
    }

    private static options: requestIdOptions;

    public use(req: any, res: any, next: any) {
        if (ExpressRequestIdMiddleware.options) {
            requestID(ExpressRequestIdMiddleware.options)(req, res, next);
        } else {
            requestID()(req, res, next);
        }
    }

}
