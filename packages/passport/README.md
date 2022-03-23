# Nest Middlewares - Passport

[![Coverage Status](https://coveralls.io/repos/github/asheliahut/nest-middlewares/badge.svg?branch=master)](https://coveralls.io/github/asheliahut/nest-middlewares?branch=master)

This is the Nest Middleware wrapper around [passport](http://www.npmjs.com/package/passport).

## Installation

`@nest-middleware-collection/passport` is available from NPM. You can install it with this command:

```sh
npm install --save @nest-middleware-collection/passport
```

## Usage

```ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PassportInitializeMiddleware, PassportSessionMiddleware } from '@nest-middleware-collection/passport';
import { AppController } from './app.controller';

@Module(...)
export class AppModule implements NestModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer
        	.apply(PassportInitializeMiddleware)
        	.forRoutes(AppController)
        	.apply(PassportSessionMiddleware)
        	.forRoutes(AppController)
    }
}
```
