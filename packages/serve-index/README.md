# Nest Middlewares - Serve Index

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [serve-index](http://www.npmjs.com/package/serve-index).

## Installation

`@nest-middleware-collection/serve-index` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/serve-index
```

## Usage

```ts
import { ServeIndexMiddleware } from '@nest-middleware-collection/serve-index';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ServeIndexMiddleware).forRoutes( /* your routes */ );
    }
}
```
