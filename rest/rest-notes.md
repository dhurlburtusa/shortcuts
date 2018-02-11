# REST Notes

## RESTful API

| HTTP Verb | Example Path        | Action                     | Description |
| --------- | ------------------- | -------------------------- | ----------- |
| GET       | /resources          | Fetch resource             | Usually displays a list of the resources. |
| GET       | /resources/new      | Present add resource form  | Displays a form to create a new resource. |
| POST      | /resources          | Create resource            | Sends data to create a new resource. |
| GET       | /resources/:id      | Display resource           | Displays a representation of the resource with the specified ID. |
| GET       | /resources/:id/edit | Present edit resource form | Displays a form to edit the resource with the specified ID. |
| PATCH     | /resources/:id      | Patch subset of resource   | Updates the resource with the specified ID with the supplied data. |
| PUT       | /resources/:id      | Update whole resource      | Replaces all data of the resource with the specified ID. |
| DELETE    | /resources/:id      | Delete resource            | Deletes the resource with the specified ID. |
