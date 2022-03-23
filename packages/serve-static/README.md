# Nest Middlewares - Serve Static

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [serve-static](http://www.npmjs.com/package/serve-static).

## Installation

`@nest-middleware-collection/serve-static` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/serve-static
```

## Usage

```ts
import { ServeStaticMiddleware } from '@nest-middleware-collection/serve-static';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        ServeStaticMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ServeStaticMiddleware).forRoutes( /* your routes */ );
    }
}
```
