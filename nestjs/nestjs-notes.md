# NestJS Notes

Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript), and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, Nest makes use of robust HTTP Server frameworks like [Express](https://expressjs.com/) (the default) and optionally can be configured to use [Fastify](https://fastify.io/) as well!

## Installation

```sh
npm i -g @nestjs/cli
nest new --strict project-name
```

## Controllers

Controllers are responsible for handling incoming requests and returning responses to the client. A routing mechanism controls which controller receives which requests.

To create a basic controller, Nest uses classes and decorators. Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).

```ts
import { Controller, Get } from '@nestjs/common';

@Controller('foobars')
export class FooBarsController {

  @Get()
  findAll(): string {
    return 'All the foobars.';
  }

}
```
