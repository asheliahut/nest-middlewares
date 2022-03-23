# Nest Middlewares - Helmet

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [helmet](http://www.npmjs.com/package/helmet).

## Installation

`@nest-middleware-collection/helmet` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/helmet
```

## Usage

```ts
import { HelmetMiddleware } from '@nest-middleware-collection/helmet';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(HelmetMiddleware).forRoutes( /* your routes */ );
    }
}
```

The following classes are also available for more specialized imports:

- HelmetContentSecurityPolicyMiddleware
- HelmetCrossOriginEmbedderPolicyMiddleware
- HelmetCrossOriginOpenerPolicyMiddleware
- HelmetCrossOriginResourcePolicyMiddleware
- HelmetDnsPrefetchControlMiddleware
- HelmetExpectCtMiddleware
- HelmetFrameguardMiddleware
- HelmetHidePoweredByMiddleware
- HelmetHstsMiddleware
- HelmetIeNoOpenMiddleware
- HelmetNoSniffMiddleware
- HelmetOriginAgentClusterMiddleware
- HelmetPermittedCrossDomainPoliciesMiddleware
- HelmetReferrerPolicyMiddleware
- HelmetXssFilterMiddleware