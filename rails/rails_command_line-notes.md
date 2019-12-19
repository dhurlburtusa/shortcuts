# Rails Command Line Notes


## Generate

### Model

```sh
rails generator model {Name} [field[:type][:index] field[:type][:index]] [--no-timestamps] [--primary-key-type=PRIMARY_KEY_TYPE]
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
