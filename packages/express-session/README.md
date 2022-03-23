# Nest Middlewares - Express Session

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [express-session](http://www.npmjs.com/package/express-session).

## Installation

`@nest-middleware-collection/express-session` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/express-session
```

## Usage

```ts
import { ExpressSessionMiddleware } from '@nest-middleware-collection/express-session';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        ExpressSessionMiddleware.configure( /* options as per express-session docs */ )
        consumer.apply(ExpressSessionMiddleware).forRoutes( /* your routes */ );
    }
}
```
