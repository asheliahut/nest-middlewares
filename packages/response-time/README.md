# Nest Middlewares - Response Time

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [response-time](http://www.npmjs.com/package/response-time).

## Installation

`@nest-middleware-collection/response-time` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/response-time
```

## Usage

```ts
import { ResponseTimeMiddleware } from '@nest-middleware-collection/response-time';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ResponseTimeMiddleware).forRoutes( /* your routes */ );
    }
}
```
