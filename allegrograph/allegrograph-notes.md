# AllegroGraph Notes

AllegroGraph is a database and application framework for building Semantic Web applications. It can store data and meta-data as triples; query these triples through various query APIs like SPARQL; and apply RDFS++ reasoning with its built-in reasoner.

AllegroGraph is a high-performance database built to hold this information, query it, and reason with it.

AllegroGraph implements the ACID properties of transaction processing (atomicity, consistency, isolation, and durability) similarly to other database products.


## Managing the Server

**Starting**

```sh
[ag-dir]/bin/agraph-control --config [agdir]/lib/agraph.cfg start
```

**Stopping**

```sh
[ag-dir]/bin/agraph-control --config [agdir]/lib/agraph.cfg stop
```

### Users

AllegroGraph supports Role Based Access Control. A role is a collection of permissions. A user who is assigned a particular role has all the permissions of that role.
