# REST Notes

## RESTful API

| HTTP Verb | Example Path        | Action                                    | Description |
| --------- | ------------------- | ----------------------------------------- | ----------- |
| GET       | /resources          | Fetches collection of resources           | Usually displays a list of the resources. |
| GET       | /resources/new      | Presents an add-resource form             | Displays a form to create a new resource. |
| POST      | /resources          | Creates a new resource                    | Sends data to create a new resource. |
| GET       | /resources/:id      | Displays resource                         | Displays a representation of the resource with the specified ID. |
| GET       | /resources/:id/edit | Presents an edit-resource form            | Displays a form to edit the resource with the specified ID. |
| PATCH     | /resources/:id      | Patches(updates) a subset of the resource | Updates the resource with the specified ID with the supplied data. |
| PUT       | /resources/:id      | Updates whole resource                    | Replaces all data of the resource with the specified ID. |
| DELETE    | /resources/:id      | Deletes the resource                      | Deletes the resource with the specified ID. |
