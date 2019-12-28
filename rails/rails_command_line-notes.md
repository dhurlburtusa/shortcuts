# Rails Command Line Notes


## Generate

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
| `string` | `string{50}` |
| `text` | `text{1000}` |
| `time` |  |

**:index**

- `index`
- `uniq`
