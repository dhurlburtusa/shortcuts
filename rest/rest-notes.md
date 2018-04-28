# REST Notes


## RESTful URL Conventions

| HTTP Verb | Example Path                     | Action                                             | Description |
| --------- | -------------------------------- | -------------------------------------------------- | ----------- |
| GET       | /resources/                      | Fetches collection of resources                    | Usually displays a list of the resources. |
| POST      | /resources/                      | Creates a new resource                             | Sends data to create a new resource. |
| PUT       | /resources/                      | Replaces entire resource collection                |  |
| PATCH     | /resources/                      | Creates/replaces subset of resource collection     |  |
| DELETE    | /resources/                      | Deletes entire resource collection                 |  |
| GET       | /resources/new                   | Presents an add-resource form                      | Displays a form to create a new resource. |
| GET       | /resources/:id/                  | Fetches the resource                               | Usually displays a representation of the resource with the specified ID. |
| GET       | /resources/:id/edit/             | Presents an edit-resource form                     | Displays a form to edit the resource with the specified ID. |
| PATCH     | /resources/:id/                  | Patches(updates) a subset of the resource          | Updates the resource with the specified ID with the supplied data. |
| PUT       | /resources/:id/                  | Replaces whole resource                            | Replaces all data of the resource with the specified ID. |
| DELETE    | /resources/:id/                  | Deletes the resource                               | Deletes the resource with the specified ID. |
| GET       | /resources/:id/subresources/     | Fetches the collection of sub-resources            |  |
| POST      | /resources/:id/subresources/     | Creates a new sub-resource                         |  |
| PUT       | /resources/:id/subresources/     | Replaces entire sub-resource collection            |  |
| PATCH     | /resources/:id/subresources/     | Creates/replaces subset of sub-resource collection |  |
| DELETE    | /resources/:id/subresources/     | Deletes entire sub-resource collection             |  |
| GET       | /resources/:id/subresources/:id/ | Fetches the sub-resource                           |  |
| PATCH     | /resources/:id/subresources/:id/ | Patches(updates) a subset of the sub-resource      |  |
| PUT       | /resources/:id/subresources/:id/ | Replaces whole sub-resource                        |  |
| DELETE    | /resources/:id/subresources/:id/ | Deletes the sub-resource                           |  |
