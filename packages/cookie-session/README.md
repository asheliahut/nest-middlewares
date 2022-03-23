# Nest Middlewares - Cookie Session

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [cookie-session](http://www.npmjs.com/package/cookie-session).

## Installation

`@nest-middleware-collection/cookie-session` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/cookie-session
```

## Usage

```ts
import { CookieSessionMiddleware } from '@nest-middleware-collection/cookie-session';

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(CookieSessionMiddleware).forRoutes( /* your routes */ );
    }
}
```
