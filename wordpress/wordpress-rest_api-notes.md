# Wordpress REST API Notes

The WordPress REST API provides API endpoints for WordPress data types such as
posts, pages, media, tags, categories, users, etc.


## Routes & Endpoints

A route is a URI which can be mapped to different HTTP methods. The mapping of
an individual HTTP method to a route is known as an "endpoint".

If pretty permalinks is enabled, then we can make a GET request to
https://yoursite.com/wp-json/ and get a JSON response showing us what routes are
available. Otherwise use https://yoursite.com/?rest_route=/

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


## Custom Routes and Endpoints

**Registering a Route**

Use `register_rest_route` in the `rest_api_init` action hook.

The following demonstrates registering a route using the function-based API.

```php
<?php
add_action( 'rest_api_init', function () {
  register_rest_route( 'myplugin/v1', '/authors/(?P<id>\d+)', array(
    array(
      'methods' => 'GET',
      'callback' => 'my_plugin__get_author_endpoint',
      'args' => array(
        'id' => array(
          'default' => -1,
          'required' => true,
          'sanitize_callback' => function ($param_value, $request, $param_name) {
            return sanitize_text_field( $param_value );
          },
          'validate_callback' => function ($param_value, $request, $param_name) {
            return is_numeric( $param_value );
          }
        ),
      ),
      'permission_callback' => function ($request) {
        return current_user_can( 'edit_others_posts' );
      },
    ),
    'schema' => 'my_plugin__route_schema',
  ) );
} );

function my_plugin__get_author_endpoint( WP_REST_Request $request ) {
  $some_param = $request['some_param'];
  $some_param = $request->get_param( 'some_param' );
  
  $all_params_except_file_params = $request->get_params();
  $url_params = $request->get_url_params();
  $query_params = $request->get_query_params();
  $body_params = $request->get_body_params();
  $json_params = $request->get_json_params();
  $default_params = $request->get_default_params();
  $file_params = $request->get_file_params();
  ...
  if ( ... ) {
    return new WP_Error( 'code...', 'message...', array( 'status' => 404 ) );
  }
  $result = ...
  ...
  // Wrap result in a response. This is optional unless you need to set a
  // custom status code or custom headers.
  $response = new WP_REST_Response( $result );
  $response->set_status( 205 );
  $response->header( 'Location', 'https://example.com/' );
  return $response;
}

function my_plugin__route_schema() {
  $schema = array(
    // This tells the spec of JSON Schema we are using which is draft 4.
    '$schema'              => 'http://json-schema.org/draft-04/schema#',
    // The title property marks the identity of the resource.
    'title'                => 'comment',
    'type'                 => 'object',
    // In JSON Schema you can specify object properties in the properties attribute.
    'properties'           => array(
      'id' => array(
        'description'  => esc_html__( 'Unique identifier for the object.', 'my-textdomain' ),
        'type'         => 'integer',
        'context'      => array( 'view', 'edit', 'embed' ),
        'readonly'     => true,
      ),
      'author' => array(
        'description'  => esc_html__( 'The id of the user object, if author was a user.', 'my-textdomain' ),
        'type'         => 'integer',
      ),
      'content' => array(
        'description'  => esc_html__( 'The content for the object.', 'my-textdomain' ),
        'type'         => 'string',
      ),
    ),
  );
  return $schema;
}
```


## Adding REST API Support for Custom Post Types

To make a custom post type available via the REST API, simply set
`'show_in_rest'` to `true` when registering the custom post type.

```php
function my_plugin__register_post_types() {
  $args = array(
    'public' => true,
    'show_in_rest' => true,
    ...
  );
  register_post_type( 'resource', $args );
}
add_action( 'init', 'my_plugin__register_post_types' );
```

If the custom post type has already been registered before your plugin, then you
must manually update the global variable where post types are kept.

```php
function my_plugin__add_rest_api_support() {
  global $wp_post_types;
  
  $post_type_name = 'name_of_custom_post_type';
  if ( isset( $wp_post_types[$post_type_name] ) ) {
    $wp_post_types[$post_type_name]->show_in_rest = true;
    // Optionally customize the `rest_base` or controller class:
    $wp_post_types[$post_type_name]->rest_base = $post_type_name;
    $wp_post_types[$post_type_name]->rest_controller_class = 'WP_REST_Posts_Controller';
  }
}
add_action( 'init', 'my_plugin__add_rest_api_support', 25 );
```


## Adding REST API Support for Custom Taxonomies

To make a custom taxonomy available via the REST API, simply set
`'show_in_rest'` to `true` when registering the custom taxonomy.

```php
function my_plugin__register_taxonomies() {
  $args = array(
    ...
    'show_in_rest' => true,
    ...
  );
  register_taxonomy( 'genre', array( 'resource' ), $args );
}
add_action( 'init', 'my_plugin__register_taxonomies' );
```

If the custom taxonomy has already been registered before your plugin, then you
must manually update the global variable where taxonomies are kept.

```php
function my_plugin__add_rest_api_support() {
  global $wp_taxonomies;
  
  $taxonomy_name = 'name_of_taxonomy';
  if ( isset( $wp_taxonomies[$taxonomy_name] ) ) {
    $wp_taxonomies[$taxonomy_name]->show_in_rest = true;
    // Optionally customize the `rest_base` or controller class:
    $wp_taxonomies[$taxonomy_name]->rest_base = $post_type_name;
    $wp_taxonomies[$taxonomy_name]->rest_controller_class = 'WP_REST_Terms_Controller';
  }
}
add_action( 'init', 'my_plugin__add_rest_api_support', 25 );
```


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
