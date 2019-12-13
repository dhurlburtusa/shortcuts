# Rails Notes


## Installing

**Prerequisites**

Rails requires Ruby version 2.5.0 or later, SQLite3, and [yarn].

```sh
# This may take a few minutes if it is the first time installing.
gem install rails
```


## Uncategorized

**Generate New App**

```sh
rails new {app_name}
# E.g.
rails new blog
```

**Generate a Controller**

```sh
rails generate controller {Controller_name} {action_name}
# E.g.
rails generate controller Example index
```


[yarn]: https://yarnpkg.com/
