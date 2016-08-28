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


## _id Field

The `_id` field is the field MongoDB uses as the unique primary-key.  MongoDB automatically creates an index on this field.  MongoDB will also auto-insert an `_id` field of type `ObjectId` if one is not supplied during document insertion.


## Data Types

MongoDB stores its data in [BSON](http://bsonspec.org/) format.  See https://docs.mongodb.com/manual/reference/bson-types/ for details.

### ObjectId

Are 12-byte hex strings.  They are composed of 4 parts.  The first part is the date as a timestamp -- the number of seconds since the Unix epoch.  The second part is a MAC address.  The third part is a process ID.  And the last part is a counter (to help ensure the ObjectId is unique when multiple inserts occur simultaneously).

```
 Date   |  MAC  |  PID  | Counter
_ _ _ _ | _ _ _ |  _ _  | _ _ _ 
4-bytes  3-bytes 2-bytes 3-bytes
```

## Query Syntax and Semantics

See https://docs.mongodb.com/manual/reference/operator/query/ for details.

### Equality Matches

Find documents where `field` equals `value`:
```
collection.find({ field: value })
```

Find documents where `field1` equals `value1` AND `field2` equals `value2`:
```
collection.find({ field1: value1, field2: value2 })
```

Find documents where sub-document field `subDoc.field` equals `value`:
```
collection.find({ 'subDoc.field': value })
```

### Equality Matches on Arrays

Find documents where array field matches entire array (item order is important):
```
collection.find({ arrField: [value1, value2, ...] })
```

Find documents where any item in array field matches a value:
```
collection.find({ arrField: value })
```

Find documents where the first item in array field matches a value:
```
collection.find({ 'arrField.0': value })
```

### Comparison Matches

Find documents where field has a value greater than or equal to a value:
```
collection.find({ field: { $gte: value } })
```

Find documents where field has a value greater than a value:
```
collection.find({ field: { $gt: value } })
```

Find documents where field has a value less than a value:
```
collection.find({ field: { $lt: value } })
```

Find documents where field has a value less than or equal to a value:
```
collection.find({ field: { $lte: value } })
```

Find documents where field has a value greater than one value but less than another value:
```
collection.find({ field: { $gt: value1, $lt: value2 } })
```

Find documents where field does not have a specific value or documents that don't have the specified field:
```
collection.find({ field: { $ne: value } })
```

Find documents where field has a value equal to one of several specified values:
```
collection.find({ field: { $in: [value1, value2, ...] } })
```

Find documents where field does not have a value equal to one of several specified values:
```
collection.find({ field: { $nin: [value1, value2, ...] } })
```

### Element Matches

Find documents where a particular field exists:
```
collection.find({ field: { $exists: true } })
```

Find documents where a particular field does NOT exist:
```
collection.find({ field: { $exists: false } })
```

Find documents where a particular field is of type string:
```
collection.find({ field: { $type: 'string' } })
```

### Logical Matches

Find documents where some criteria (field1 equals value1) matches OR some other criteria (field2 > value2) matches:
```
collection.find({ $or: [{ field1: value1 }, { field2: { $gt: value2 } }] })
```

Find documents where field exists and is not equal to some value (using standard syntax would not be valid):
```
collection.find({ $and: [{ field: { $ne: value } }, { field: { $exists: true } }] })
```

Find documents where field is not greater than some value:
```
collection.find({ field: { $not: { $gt: value } } })
```

Find documents where field does not start with the letter 'p':
```
collection.find({ field: { $not: /^p.*/ } })
```

Find documents where field1 is not equal to value1 and field2 is not equal to value2:
```
collection.find({ $nor: [{ field1: value1}, { field2: value2}] })
```

### Evaluation Matches

Find documents where some criteria (field1 equals value1) matches OR some other criteria (field2 > value2) matches:
```
collection.find({ field: { $regex: /.../ } })
```

See https://docs.mongodb.com/manual/reference/operator/query/regex/ for more details on using regular expressions in queries.

Find documents where value of a field is even:
```
collection.find({ field: { $mod: [2, 0] } })
```

Find documents where value of a field is even:
```
collection.find({ field: { $mod: [2, 1] } })
```

Find documents where field1 equals field2:
```
collection.find({ $where: "this.field1 == this.field2" })
collection.find({ $where: function () { return this.field1 == this.field2; } })
```

### Array Matches

Find documents where array field contains all the specified values:
```
collection.find({ arrField: { $all: [value1, value2, ...] } })
```

Find documents where array field has length of 2:
```
collection.find({ arrField: { $size: 2 } })
```

Find documents where array field has an element that has a field of some value:
```
collection.find({ arrField: { $elemMatch: { field: value } } })
```


## Running MongoDB

### Setup on Windows 10 Pro

The following assumes MongoDB was installed in the `C:\Program Files\MongoDB\Server\3.2\` directory.

NOTE: The following commands should all be run under administrator priveleges.

#### Changing the Default Directories

NOTE: The default data directory for MongoDB is `\data\db`.

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

NOTE: The shell is a fully functional JavaScript interpreter.  So, you can do JavaScripty things at the prompt like
assign output of commands to variables.

NOTE: The shell behaves synchronously.  That is, it blocks until the command completes.

### Inserting (MongoDB Shell)

See https://docs.mongodb.com/manual/reference/method/db.collection.insert/ for details.

```sh
db.<collection-name>.insert({...})
db.<collection-name>.insert({...}, { writeConcern: {...}, ordered: <boolean> })
db.<collection-name>.insert([{...}, {...}, ...])
db.<collection-name>.insert([{...}, {...}, ...], { writeConcern: {...}, ordered: <boolean> })
```

See https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/ for details.

```sh
db.<collection-name>.insertOne({...})
db.<collection-name>.insertOne({...}, { writeConcern: {...} })
```

See https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/ for details.

```sh
db.<collection-name>.insertMany([{...}, {...}, ...])
db.<collection-name>.insertMany([{...}, {...}, ...], { writeConcern: {...}, ordered: <boolean> })
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

#### Creating an Index

```sh
db.<collection-name>.createIndex(<index-spec>, <options>)
# where <index-spec> is like { <field1>: <type>, ... }
# where <type> is 1 (ascending), -1 (descending), '2d', '2dsphere', 'hashed', or 'text'.
```

`createIndex()` will only create an index if the index does not exist.

##### Create a Single-Key Index Examples

```sh
db.collection.createIndex({ field: 1 })
db.collection.createIndex({ field: -1 })
db.collection.createIndex({ field: 1 }, { name: 'field_asc' })  # With a name
```

##### Create a Unique Index Example

```sh
db.collection.createIndex(<index-spec>, { unique: true })
```

##### Create a Partial Index Example

See https://docs.mongodb.com/manual/core/index-partial/ for details.

```sh
db.collection.createIndex(<index-spec>, { partialFilterExpression: <filter-expr> })
```

##### Create a Sparse Index Example

```sh
db.collection.createIndex(<index-spec>, { sparse: true })
```

##### Create a Text Index Example

```sh
db.collection.createIndex({ field: 'text', ... }, { ... })
```

#### Discovering Indexes

```sh
db.<collection-name>.getIndexes()
```

#### Dropping an Index

```sh
db.<collection-name>.dropIndex(<index-spec>)
# where <index-spec> is like { <field1>: <type>, ... }
# where <type> is 1 (ascending), -1 (descending), '2d', '2dsphere', 'hashed', or 'text'.
```


## Node.js

Once, the driver is installed, then you can connect to a MongoDB instance using a script similar to the following.

NOTE: The Node.js driver is designed to be asynchronous.  Callbacks are called when the asynchronous command is
complete.

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

Syntax:
```js
collection.insertOne(<doc>, <options>, <callback>);
let promise = collection.insertOne(<doc>, <options>);
```

Example:
```js
collection.insertOne(doc, (err, result) => {
  assert.equal(err, null);
  console.dir(result);
});
```

#### Inserting Multiple Documents

Syntax:
```js
collection.insertMany(<docs>, <options>, <callback>);
let promise = collection.insertMany(<docs>, <options>);
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
let cursor = collection.find(...).sort({ <field1>: 1|-1 });
let cursor = collection.find(...).sort([ [<field1>, 1|-1], [<field2>, 1|-1], ... ]);
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

#### Creating an Index

```js
collection.createIndex(<index-spec>, <options>, <callback>);
let promise = collection.createIndex(<index-spec>, <options>);
// where <index-spec> is like { <field1>: <type>, ... }
// where <type> is 1 (ascending), -1 (descending), '2d', '2dsphere', 'hashed', or 'text'.
```

`createIndex()` will only create an index if the index does not exist.

##### Create a Single-Key Index Examples

```js
collection.createIndex({ field: 1 });
collection.createIndex({ field: -1 });
collection.createIndex({ field: 1 }, { name: 'field_asc' })  // With a name
```

##### Create a Unique Index Example

```js
collection.createIndex(<index-spec>, { unique: true });
```

##### Create a Partial Index Example

See https://docs.mongodb.com/manual/core/index-partial/ for details.

```js
collection.createIndex(<index-spec>, { partialFilterExpression: <filter-expr> });
```

##### Create a Sparse Index Example

```js
collection.createIndex(<index-spec>, { sparse: true });
```

##### Create a Text Index Example

```js
collection.createIndex({ field: 'text', ... }, { ... });
```

#### Discovering Indexes

```js
collection.getIndexes()
```

#### Dropping an Index

```js
collection.dropIndex(<index-spec>)
// where <index-spec> is like { <field1>: <type>, ... }
// where <type> is 1 (ascending), -1 (descending), '2d', '2dsphere', 'hashed', or 'text'.
```


## Python

### Making a Connection (Python)

```python
import pymongo

url = 'mongodb://localhost'
connection = pymongo.MongoClient(url)
```

### Selecting a Database (Python)

```python
db = connection.<database-name>
```

### Selecting a Collection (Python)

```python
collection = db.<collection-name>
```

### Inserting (Python)

See https://api.mongodb.com/python/3.3.0/api/pymongo/collection.html#pymongo.collection.Collection.insert_one for details.

Syntax:
```python
result = collection.insert_one(<doc>, bypass_document_validation=False)
```

#### Inserting Multiple Documents

Syntax:
```python
results = collection.insert_many(<docs>, ordered=True, bypass_document_validation=False)
```

where `<docs>` is an iterable such as a list of dictionaries.

### Updating (Python)

```python
collection.update_one(<conditions>, <operators>, upsert=False, bypass_document_validation=False)

// where <operators> is like { <oper1>: { <field1>: <value1>, ... }, <oper2>: { <field1>: <value1>, ... } }
```

#### Update Multiple Documents

```python
collection.update_many(<conditions>, <operators>, upsert=False, bypass_document_validation=False)

// where <operators> is like { <oper1>: { <field1>: <value1>, ... }, <oper2>: { <field1>: <value1>, ... } }
```

#### Replace a Document

```python
collection.replace_one(<conditions>, <document>, upsert=False, bypass_document_validation=False)
```

### Deleting (Python)

```python
collection.delete_one(<conditions>)
collection.delete_many(<conditions>)
```
