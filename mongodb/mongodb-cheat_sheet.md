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


## Drivers

Drivers for MongoDB are the client libraries that handle the interface between the application and the MongoDB servers
and deployments.  Drivers are responsible for managing connections to MongoDB standalone instances, replica sets, or
sharded clusters.  Drivers provide the methods and interfaces that applications use to interact with MongoDB as well as
handle the translation of documents between BSON objects and native mapping structures.

### Node.js Driver

#### Install or Upgrade

From the root of your npm project:

```sh
npm install --save mongodb
```

### Other Drivers

See https://docs.mongodb.com/ecosystem/drivers/ for other drivers.

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


## Node.js

Once, the driver is installed, then you can connect to a MongoDB instance using a script similar to the following.

### API Docs

See http://mongodb.github.io/node-mongodb-native/2.2/api/.

### Making a Connection (Node.js)

```js
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, (err, db) => {
  assert.equal(err, null);
  console.log("Connected correctly to server.");
  db.close();
});
```

The callback passed to the `connect` function will be passed a [database object](http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html)
`db`.  This database object will be assumed to be available in the following example.

### Selecting a Collection (Node.js)

```js
let collection = db.collection('<collection-name>');
```

This will return a [collection object](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html)
which will be assumed to be available in the following examples.

### Inserting (Node.js)

```js
collection.insertOne(doc, (err, result) => {
  assert.equal(err, null);
  console.dir(result);
});
```

### Querying (Node.js)

#### Query for All Documents in a Collection

```js
let cursor = collection.find();
```

#### Query for Specific Conditions

```js
let cursor = collection.find({ <field1>: <value1>, <field2>: <value2>, ... });
```

#### Working with Cursors

```js
cursor.forEach((doc) => {
  console.dir(doc);
}, (err) => {
  assert.equal(err, null);
});
```

#### Query for Specific Conditions with Operators

```js
let cursor = collection.find({ <field1>: { <oper1>: <value1> } }, ... });
```

Operators: `$eq`, `$gt`, `$gte`, `$lt`, `$lte`, `$ne`, `$in`, `$nin`

#### Combining Conditions

##### Logical AND

```js
let cursor = collection.find({ <field1>: <value1>, <field2>: <value2>, ... });
let cursor = collection.find({ <field1>: { <oper1>: <value1> }, <field2>: <value2>, ... });
```

##### Logical OR

```js
let cursor = collection.find({ $or: [ { <field1>: <value1> }, { <field2>: <value2> }, ... ] });
```


### Sorting (Node.js)

```js
let cursor = collection.find(...).sort({ <field1>: 1, <field2>: -1, ... });
```


### Updating (Node.js)

```js
collection.updateOne(<conditions>, <operators>, <options>, <callback>);
let promise = collection.updateOne(<conditions>, <operators>, <options>);

// where <operators> is like { <oper1>: { <field1>: <value1>, ... }, <oper2>: { <field1>: <value1>, ... } }
```

See https://docs.mongodb.com/manual/reference/operator/update/ for list of update operators.

#### Update Multiple Documents

```js
collection.updateMany(<conditions>, <operators>, <options>, <callback>);
let promise = collection.updateMany(<conditions>, <operators>, <options>);

// where <operators> is like { <oper1>: { <field1>: <value1>, ... }, <oper2>: { <field1>: <value1>, ... } }
```

#### Replace a Document

```js
collection.replaceOne(<conditions>, <document>, <options>, <callback>);
let promise = collection.replaceOne(<conditions>, <document>, <options>);
```


### Deleting (Node.js)

```js
collection.deleteOne(<conditions>, <options>, <callback>);
let promise = collection.deleteOne(<conditions>, <options>);
collection.deleteMany(<conditions>, <options>, <callback>);
let promise = collection.deleteMany(<conditions>, <options>);
```


### Dropping a Collection in Node.js

```js
collection.drop(<options>, <callback>);
let promise = collection.drop(<options>);
```


### Aggregation (Node.js)

See https://docs.mongodb.com/manual/aggregation/ for details.

```js
collection.aggregate([ <stage1>, <stage2>, ... ]);
```


### Indexing (Node.js)

See https://docs.mongodb.com/manual/indexes/ for details.

```js
collection.createIndex(<index-spec>, <options>, <callback>);
let promise = collection.createIndex(<index-spec>, <options>);
// where <index-spec> is like { <field1>: <order>, ... }
// where <order> is 1 or -1.
```

`createIndex()` will only creates an index if the index does not exist.
