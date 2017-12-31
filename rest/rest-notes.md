# REST Notes

## RESTful API

| HTTP Verb | Example Path        | Description |
| --------- | ------------------- | ----------- |
| GET       | /resources          | Usually displays a list of the resources. |
| GET       | /resources/new      | Displays a form to create a new resource. |
| POST      | /resources          | Sends data to create a new resource. |
| GET       | /resources/:id      | Displays a representation of the resource with the specified ID. |
| GET       | /resources/:id/edit | Displays a form to edit the resource with the specified ID. |
| PATCH     | /resources/:id      | Updates the resource with the specified ID with the supplied data. |
| PUT       | /resources/:id      | Replaces all data of the resource with the specified ID. |
| DELETE    | /resources/:id      | Deletes the resource with the specified ID. |
