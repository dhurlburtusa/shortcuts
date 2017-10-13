# Node Notes


## Global

### Environment Variables

See https://nodejs.org/api/process.html#process_process_env for details.

* `process.env`

**Common Environment Variables**

* `process.env.NODE_ENV`
  + Commonly used values: `'development'` | `'test'` | `'production'`

### Special Variables

The following variables are available in each module (i.e., each JavaScript
file run by node).

* __dirname
* __filename

### Process Variable

* process.argv
