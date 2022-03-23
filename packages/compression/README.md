# Nest Middlewares - Compression

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [compression](http://www.npmjs.com/package/compression).

## Installation

`@nest-middleware-collection/compression` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/compression
```

## Usage

```ts
import { CompressionMiddleware } from '@nest-middleware-collection/compression';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(CompressionMiddleware).forRoutes( /* your routes */ );
    }
}
```
