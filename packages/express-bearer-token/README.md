# Nest Middlewares - Bearer Token

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [express-bearer-token](http://www.npmjs.com/package/express-bearer-token).

## Installation

`@nest-middleware-collection/express-bearer-token` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/express-bearer-token
```

## Usage

```ts
import { ExpressBearerTokenMiddleware } from '@nest-middleware-collection/express-bearer-token';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ExpressBearerTokenMiddleware).forRoutes( /* your routes */ );
    }
}
```
