[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)
# Nest Middleware Collection

This repo is a more up to date version of [wbhob's nestjs-middlewares](https://github.com/wbhob/nest-middlewares).
Add the most common Express middlewares to your Nest app with one line.

## System Requirements
This packages requires the following:
- Node.JS 8.0.0 or later
- @nestjs/core and @nestjs/common 8.0.0 or later

## Adding Middlewares
Please do not open issues asking to support a middleware – I've tried to make this project really easy to implement and extend. See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how to create a new middleware, and I'll merge and release it if it meets the contributing guidelines. Thank you for your contribution.

## Usage
Take the name of your favorite Express middleware and prefix it with `@nest-middleware-collection/`.
```
$ npm install --save @nest-middleware-collection/helmet
```
In your module:
```ts
import { HelmetMiddleware } from '@nest-middleware-collection/helmet'; // (look around in the source code for the exact class name)

@Module(...)
export class MyModule {
    configure(consumer: MiddlewaresConsumer) {
        // IMPORTANT! Call Middleware.configure BEFORE using it for routes
        HelmetMiddleware.configure( /* options as per helmet docs */ )
        consumer.apply(HelmetMiddleware).forRoutes(
            /* your routes */
        );
    }
}
```


## Currently supports:
- **Compression**
- Connect Timeout
- **Cookie Parser**
- Cookie Session
- **CORS**
- Csurf
- **Error Handler**
- **Helmet 5.0**
- Method Override
- **Morgan**
- Response Time
- Express Request Id
- Serve Favicon
- Serve Index
- Serve Static
- VHost
