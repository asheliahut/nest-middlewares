import { Injectable, NestMiddleware } from '@nestjs/common';
import * as requestID from 'express-request-id';

@Injectable()
export class ExpressRequestIdMiddleware implements NestMiddleware {

    // DELETE THESE LINES IF MIDDLEWARE DOES NOT TAKE OPTIONS
    public static configure(opts: requestID.Options) {
        this.options = opts;
    }

    private static options: requestID.Options;

    public use(req: any, res: any, next: any) {
        if (ExpressRequestIdMiddleware.options) {
            requestID(ExpressRequestIdMiddleware.options)(req, res, next);
        } else {
            requestID()(req, res, next);
        }
    }

}
