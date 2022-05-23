# Prisma Notes

`Prisma` is an open source next-generation ORM. It consists of the following parts:

- `Prisma Client`: Auto-generated and type-safe query builder for Node.js & TypeScript.
- `Prisma Migrate`: Migration tool to easily evolve your database schema from prototyping to production.
- `Prisma Studio`: GUI to view and edit data in your database.

`Prisma`'s main goal is to make application developers more productive when working with databases. Here are a few examples of how Prisma achieves this:

- **Thinking in objects** instead of mapping relational data.
- **Queries not classes** to avoid complex model objects.
- **Single source of truth** for database and application models
- **Healthy constraints** that prevent common pitfalls and antipatterns.
- **An abstraction that makes the right thing easy** ("pit of success").
- **Type-safe database queries** that can be validated at compile time.
- **Less boilerplate** so developers can focus on the important parts of their app.
- **Auto-completion in code editors** instead of needing to look up documentation.


## Prisma CLI

Prisma comes with a CLI program: `prisma`. After it is saved locally in an npm package, you can run it with `npx`:

```sh
npx prisma
```
