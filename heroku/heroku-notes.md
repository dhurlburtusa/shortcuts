# Heroku Notes

Heroku is a PaaS that has support for various languages.

See https://en.wikipedia.org/wiki/Heroku and https://www.heroku.com/what for
details.

The interface to Heroku primarily consists of a web-based dashboard and the
`heroku` CLI.


## Uncategorized

**App's First Deployment**

- `heroku login`
- `cd path/to/app/`
- `heroku create`
- `git push heroku master`
- `heroku open`

**Associate a Git Repo with Heroku**

- `heroku login`
- `heroku git:remote -a <your-app-name>`

**Scaling a Web App**

- `heroku login`
- `cd path/to/app/`
- `heroku ps:scale web={n}`
