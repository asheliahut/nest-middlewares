# Nest Middlewares - Serve Favicon

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [serve-favicon](http://www.npmjs.com/package/serve-favicon).

## Installation

`@nest-middleware-collection/serve-favicon` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/serve-favicon
```

## Usage

```ts
import { ServeFaviconMiddleware } from '@nest-middleware-collection/serve-favicon';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        ServeFaviconMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(ServeFaviconMiddleware).forRoutes( /* your routes */ );
    }
}
```
