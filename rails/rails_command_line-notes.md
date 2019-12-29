# Rails Command Line Notes


## Generate Command

### Controller

```sh
rails generate controller {ControllerName} [{action} ...{action}] [--template-engine=ENGINE_NAME]
```

**ENGINE_NAME**

- `erb`
- `haml`?
- `liquid`?
- `slim`?
- `tilt`?

### Model

```sh
rails generate model {ModelName} [field[:type][:index] ...field[:type][:index]] [--no-timestamps] [--primary-key-type=PRIMARY_KEY_TYPE]
```

**:type**

| type | Description |
| ---- | ------------|
| `bigint` |  |
| `binary` |  |
| `boolean` |  |
| `date` |  |
| `datetime` |  |
| `decimal` | `decimal{10,2}` |
| `float` |  |
| `integer` |  |
| `numeric` |  |
| `primary_key` |  |
| `references` |  |
| `string` | `string{50}` |
| `text` | `text{1000}` |
| `time` |  |

**:index**

- `index`
- `uniq`


## New Command

The `rails new` command creates a new Rails application with a default directory structure and configuration at the path you specify.

You can specify extra command-line arguments to be used every time `rails new` runs in the `.railsrc` configuration file in your home directory. Note that the arguments specified in the `.railsrc` file don't affect the default values.
