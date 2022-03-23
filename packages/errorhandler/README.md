# Nest Middlewares - Error Handler

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [errorhandler](http://www.npmjs.com/package/errorhandler).

## Installation

`@nest-middleware-collection/errorhandler` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/errorhandler
```

## Usage

```ts
import { ErrorHandlerMiddleware } from '@nest-middleware-collection/errorhandler';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ErrorHandlerMiddleware).forRoutes( /* your routes */ );
    }
}
```
