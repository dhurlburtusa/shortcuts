# Laravel Cheat Sheet

See https://laravel.com/ for details.

Laravel is a PHP framework for web applications using MVC.

Laravel uses the following components (among others):

* Composer: A PHP dependencies manager
* Symfony: A PHP development framework
* Eloquent ORM: Object-oriented database management and migration
* Blade: A templating engine


## Installation

See https://laravel.com/docs for details.


## Routing

Routes will be defined in route files.  The location and name of the route files varies between releases.

### Basic Routing

**Basic GET**

```php
Route::get('/', function () { ... });
```

**Basic POST**

```php
Route::post('foo', function () { ... });
```

**Available Router Methods**

```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

**Matching Many HTTP Methods**

```php
Route::match(['get', 'post'], '/', function () { ... });

Route::any('foo', function () { ... });
```

### Parameters

```php
Route::get('user/{id}', function ($id) { ... });

Route::get('posts/{post}/comments/{comment}', function ($postId, $commentId) { ... });

// Optional Parameters:

Route::get('user/{name?}', function ($name = null) { ... });

// Regular Expression Constraints:

Route::get('user/{id}', function ($id) { ... })->where('id', '[0-9]+');

Route::get('user/{id}/{name}', function ($id, $name) { ... })->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
```

### Named Routes in 4.x

**Creating**

```php
// Route named 'profile':
Route::get('user/profile', array('as' => 'profile', function () { ... }));
Route::get('user/profile', array('as' => 'profile', 'uses' => 'UserController@showProfile'));
```

**Using**

```php
$url = URL::route('profile');

$redirect = Redirect::route('profile');
```

### Named Routes in 5.x

**Creating**

```php
// Route named 'profile':
Route::get('user/profile', function () { ... })->name('profile');
Route::get('user/{id}/profile', function ($id) { ... })->name('profile');
Route::get('user/profile', 'UserController@showProfile')->name('profile');
```

**Using**

```php
$url = route('profile');
// With parameters:
$url = route('profile', [ 'id' => 1 ]);

$redirect = redirect()->route('profile');
```
