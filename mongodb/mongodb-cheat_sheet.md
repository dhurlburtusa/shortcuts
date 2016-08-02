# MongoDB Cheatsheet

See https://www.mongodb.com/.

MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.
MongoDB obviates the need for an Object Relational Mapping (ORM) to facilitate development.


## Documents

A record in MongoDB is a document, which is a data structure composed of field and value pairs.  MongoDB documents are
similar to JSON objects.  The values of fields may include other documents, arrays, and arrays of documents.

## Collections

MongoDB stores documents in collections.  Collections are analogous to tables in relational databases.  Unlike a table,
however, a collection does not require its documents to have the same schema.

In MongoDB, documents stored in a collection must have a unique `_id` field that acts as a primary key.


## Running MongoDB

### Setup on Windows 10 Pro

The following assumes MongoDB was installed in the `C:\Program Files\MongoDB\Server\3.2\` directory.

NOTE: The following commands should all be run under administrator priveleges.

```sh
mkdir \home\databases\mongodb\db
mkdir \home\databases\mongodb\log
```

Create a `mongod.cfg` configuration file at C:\Program Files\MongoDB\Server\3.2\ with the following contents.

```
systemLog:
    destination: file
    path: C:\home\databases\mongodb\log\mongod.log
storage:
    dbPath: C:\home\databases\mongodb\db
```

Create a service for MongoDB by running the following.

```sh
"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.2\mongod.cfg" --install
```

### Starting the Service

```sh
net start MongoDB
```

Or use the Services dialog.

### Stopping the Service

```sh
net stop MongoDB
```

Or use the Services dialog.

## Importing Documents

Use the `mongoimport` executable (included with installation) to import documents (aka data).

NOTE: You must have a running `mongod` instance in order to import data into the database.

```sh
mongoimport --db <db-name> --collection <collection-name> --drop --file <file-path>
```


## MongoDB Shell

Use the `mongo` executable (included with installation) to start the interactive MongoDB shell program.

### Inserting (MongoDB Shell)

```sh
db.<collection-name>.insert({...})
```

### Querying (MongoDB Shell)

#### Query for All Documents in a Collection

```sh
db.<collection-name>.find()
```

#### Query for Specific Conditions

```sh
db.<collection-name>.find({ <field1>: <value1>, <field2>: <value2>, ... })
```

#### Query for Specific Conditions with Operators

```sh
db.<collection-name>.find({ <field1>: { <oper1>: <value1> } }, ... })
```

Operators: `$eq`, `$gt`, `$gte`, `$lt`, `$lte`, `$ne`, `$in`, `$nin`

#### Combining Conditions

##### Logical AND

```sh
db.<collection-name>.find({ <field1>: <value1>, <field2>: <value2>, ... })
db.<collection-name>.find({ <field1>: { <oper1>: <value1> }, <field2>: <value2>, ... })
```

##### Logical OR

```sh
db.<collection-name>.find({ $or: [ { <field1>: <value1> }, { <field2>: <value2> }, ... ] })
```


### Sorting (MongoDB Shell)

```sh
db.<collection-name>.find(...).sort({ <field1>: 1, <field2>: -1, ... })
```


### Updating (MongoDB Shell)

```sh
db.<collection-name>.update(<conditions>, <operators|document>, <options>)

# where <operators> is like { <oper1>: { <field1>: <value1>, ... }, <oper2>: { <field1>: <value1>, ... } }
```

See https://docs.mongodb.com/manual/reference/operator/update/ for list of update operators.

#### Update Multiple Documents

```sh
db.<collection-name>.update(<conditions>, <operators|document>, { multi: true } })

# where <operators> is like { <oper1>: { <field1>: <value1>, ... }, <oper2>: { <field1>: <value1>, ... } }
```


### Deleting (MongoDB Shell)

```sh
db.<collection-name>.remove(<conditions>, <options>)
```


### Dropping a Collection (MongoDB Shell)

```sh
db.<collection-name>.drop()
```


### Aggregation (MongoDB Shell)

See https://docs.mongodb.com/manual/aggregation/ for details.

```sh
db.<collection-name>.aggregate( [ <stage1>, <stage2>, ... ] )
```


### Indexing (MongoDB Shell)

See https://docs.mongodb.com/manual/indexes/ for details.

```sh
db.<collection-name>.createIndex(<index-spec>)
# where <index-spec> is like { <field1>: <order>, ... }
# where <order> is 1 or -1.
```

`createIndex()` will only creates an index if the index does not exist.
