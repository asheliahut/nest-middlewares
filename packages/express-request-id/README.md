# Nest Middlewares - Express Request Id

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [express-request-id](http://www.npmjs.com/package/express-request-id).

## Installation

`@nest-middleware-collection/express-request-id` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/express-request-id
```

## Usage

```ts
import { ExpressRequestIdMiddleware } from '@nest-middleware-collection/express-request-id';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply(ExpressRequestIdMiddleware).forRoutes( /* your routes */ );
    }
}
```
