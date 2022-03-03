# PM2 Notes

PM2 is a daemon process manager that will help you manage and keep your application online. It is offered as a simple and intuitive CLI, installable via NPM.


## Installation

```sh
npm install pm2@latest -g
# or
yarn global add pm2
```


## Usage

**Basic Usage**

```sh
pm2 start app.js
pm2 start bashscript.sh
# etc
```

**Process Management**

```sh
pm2 restart app_name
pm2 reload app_name
pm2 stop app_name
pm2 delete app_name
```

`app_name` may also be `all` or the process ID.

**Monitoring**

There are many options. You may subscribe for a dashboard as https://pm2.io or do the following.

**List managed processes**

```sh
pm2 ls
```

**Display logs**

```sh
pm2 logs
```

**See terminal-based dashboard**

```sh
pm2 monit
```
