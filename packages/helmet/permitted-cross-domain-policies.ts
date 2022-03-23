import { Injectable, NestMiddleware } from '@nestjs/common';
import helmet from 'helmet';
import { XPermittedCrossDomainPoliciesOptions } from 'helmet/dist/types/middlewares/x-permitted-cross-domain-policies';

@Injectable()
export class HelmetPermittedCrossDomainPoliciesMiddleware implements NestMiddleware {

    public static configure(opts: XPermittedCrossDomainPoliciesOptions) {
        this.options = opts;
    }

    private static options: XPermittedCrossDomainPoliciesOptions;

    public use(req: any, res: any, next: any) {
        if (HelmetPermittedCrossDomainPoliciesMiddleware.options) {
            helmet.permittedCrossDomainPolicies(HelmetPermittedCrossDomainPoliciesMiddleware.options)(req, res, next);
        } else {
            helmet.permittedCrossDomainPolicies()(req, res, next);
        }
            
    }
}
