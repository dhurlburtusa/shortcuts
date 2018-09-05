# Wordpress REST API Notes

The WordPress REST API provides API endpoints for WordPress data types such as
posts, pages, media, tags, categories, users, etc.


## Routes & Endpoints

A route is a URI which can be mapped to different HTTP methods. The mapping of
an individual HTTP method to a route is known as an "endpoint".

If we make a GET request to http://oursite.com/wp-json/, we will get a JSON
response showing us what routes are available.

A list of routes for WordPress can be found at
https://developer.wordpress.org/rest-api/reference/#rest-api-developer-endpoint-reference.


## Pagination

**Parameters**

- `page`
- `per_page`
- `offset`
- `order`
- `orderby`

**Response Headers**

- `X-WP-Total`
- `X-WP_TotalPages`


## Misc

**Requests**

`WP_REST_Request`

**Responses**

`WP_REST_Response`

**Global Parameters**

https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/

- `_jsonp`
- `_method`
- `_envelope`
- `_embed`
