# Nest Middlewares - VHost

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [vhost](http://www.npmjs.com/package/vhost).

## Installation

`@nest-middleware-collection/vhost` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/vhost
```

## Usage

```ts
import { VhostMiddleware } from '@nest-middleware-collection/vhost';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(VhostMiddleware).forRoutes( /* your routes */ );
    }
}
```
