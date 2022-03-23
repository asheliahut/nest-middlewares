import { Injectable, NestMiddleware } from '@nestjs/common';
import morgan, { Options as MorganOptions, FormatFn as MorganFormatFn, TokenCallbackFn as MorganTokenCallbackFn, Morgan } from 'morgan';
import { IncomingMessage, ServerResponse } from 'http';

@Injectable()
export class MorganMiddleware implements NestMiddleware {

    public static configure(format: string | MorganFormatFn, opts?: MorganOptions<IncomingMessage, ServerResponse>) {
        this.format = format;
        this.options = opts;
    }

    public static token(name: string, callback: MorganTokenCallbackFn): Morgan<IncomingMessage, ServerResponse> {
        return morgan.token(name, callback);
    }

    private static options: MorganOptions<IncomingMessage, ServerResponse>;
    private static format: string | MorganFormatFn;

    public use(req: any, res: any, next: any) {
        if (MorganMiddleware.format) {
            morgan(MorganMiddleware.format as any, MorganMiddleware.options)(req, res, next);
        } else {
            throw new Error('MorganMiddleware must be configured with a logger format.');
        }
    }
}
