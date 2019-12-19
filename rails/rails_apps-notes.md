# Rails Apps Notes

Rails can be used to create a variety of wep applications from simple JSON based API to a complete multi-page web application. It also has built-in support for various client-side frameworks.


## API

The `rails`' `new` command can be used to generate an application designed as an API server.

```sh
rails new {app_name} --api [--database={database}]
# {database} is one of: mysql, postgresql, sqlite3, etc
```

See `rails new --help` and/or https://guides.rubyonrails.org/api_app.html.
