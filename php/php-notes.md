# PHP Notes

PHP originally stood for Personal Home Page, but it now stands for the recursive acronym PHP: Hypertext Preprocessor.


## Brief History

See http://php.net/manual/en/history.php.php and https://en.wikipedia.org/wiki/PHP#History for details.

**PHP 1.0**: Started in 1995.

**PHP 2.0**: Started in 1997.

**PHP 3**: Started in 1998.

**PHP 4**: Started in 2000. No longer maintained.

**PHP 5**: Started in 2006.  Powered by the new Zend Engine II.  PHP 5 included new features such as improved support for object-oriented programming, the PHP Data Objects (PDO) extension (which defines a lightweight and consistent interface for accessing databases), and numerous performance enhancements.

**PHP 6**: In March 2010, the project in its current form was officially abandoned.

**PHP 7**: Started in 2015.


## Basic PHP Syntax

A PHP script can be placed anywhere in the document.

A PHP script starts with `<?php` and ends with `?>`:

```php
<?php
// PHP code goes here
?>
```

**Note**: PHP statements end with a semicolon (;).


## Comments

```php
<?php
// This is a single-line comment

# This is also a single-line comment

/*
This is a multiple-lines comment block
that spans over multiple
lines.
*/

// You can also use comments to leave out parts of a code line
$x = 5 /* + 15 */ + 5;
echo $x;
?>
```


## Case Sensitivity

 All keywords (e.g. `if`, `else`, `while`, `echo`, etc.), classes, functions, and user-defined functions are NOT case-sensitive.  However, all variable names __are__ case-sensitive.


## PHP 5 Variables

A variable starts with the `$` sign, followed by the name of the variable:

```php
<?php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
?>
```

**Note**: Unlike other programming languages, PHP has no command for declaring a variable.  It is created the moment you first assign a value to it.

Rules for PHP variables:

* A variable starts with the `$` sign, followed by the name of the variable.
* A variable name must start with a letter or the underscore character.
* A variable name cannot start with a number.
* A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ).
* Variable names are case-sensitive ($age and $AGE are two different variables).


## Global Variables

Several predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class, or file without having to do anything special.

See https://secure.php.net/manual/en/reserved.variables.php for details.

The PHP superglobal variables are:

* $GLOBALS
* $_SERVER see https://secure.php.net/manual/en/reserved.variables.server.php for details.
* $_REQUEST See https://secure.php.net/manual/en/reserved.variables.request.php for details.
* $_POST
* $_GET
* $_FILES
* $_ENV
* $_COOKIE
* $_SESSION

### $GLOBALS

An associative array of the variables in the global scope.

Use `$GLOBALS['x']` to access `$x`.

### $_SERVER

An associative array containing information such as headers, paths, and script
locations.  The entries in this array are created by the web server.

**Common Variables**

* `'SERVER_ADDR'`: The IP address of the server under which the current script is
  executing.
* `'SERVER_NAME'`: The name of the server host under which the current script is
  executing.  If the script is running on a virtual host, this will be the value
  defined for that virtual host.
* `'REQUEST_METHOD'`: Which request method was used to access the page; i.e.
  'GET', 'HEAD', 'POST', 'PUT'.
* `'QUERY_STRING'`: The query string, if any, via which the page was accessed.
* `'HTTP_HOST'`: Contents of the `Host:` header from the current request, if there
  is one.
* `'HTTP_REFERER'`: The address of the page (if any) which referred the user agent
  to the current page.  This is set by the user agent.  Not all user agents will
  set this, and some provide the ability to modify `HTTP_REFERER` as a feature.
  In short, it cannot really be trusted.
* `'HTTP_USER_AGENT'`: Contents of the `User-Agent:` header from the current
  request, if there is one.  This is a string denoting the user agent being which
  is accessing the page.
* `'HTTPS'`: Set to a non-empty value if the script was queried through the HTTPS
  protocol.  Note: Note that when using ISAPI with IIS, the value will be `'off'`
  if the request was not made through the HTTPS protocol.
* `'REMOTE_ADDR'`: The IP address from which the user is viewing the current page.
* `'REMOTE_HOST'`: The Host name from which the user is viewing the current page.
  The reverse dns lookup is based off the `REMOTE_ADDR` of the user.
* `'SCRIPT_FILENAME'`: The absolute pathname of the currently executing script.
* `'PATH_TRANSLATED'`: Filesystem- (not document root-) based path to the current
  script, after the server has done any virtual-to-real mapping.
* `'SCRIPT_NAME'`: Contains the current script's path.  This is useful for pages
  which need to point to themselves.  The `__FILE__` constant contains the full
  path and filename of the current (i.e. included) file.
* `'REQUEST_URI'`: The URI which was given in order to access this page; for
  instance, '/index.html'.
* `'PATH_INFO'`: Contains any client-provided pathname information trailing the
  actual script filename but preceding the query string, if available.  For
  instance, if the current script was accessed via the URL
  http://www.example.com/php/path_info.php/some/stuff?foo=bar, then
  `$_SERVER['PATH_INFO']` would contain `/some/stuff`.
* `'ORIG_PATH_INFO'`: Original version of 'PATH_INFO' before processed by PHP.


### $_REQUEST

An associative array containing URL query data or HTML form data (regardless of HTTP method).

### $_GET

An associative array containing HTML form data due to an HTTP GET or URL query data.


### $_POST

An associative array containing HTML form data due to an HTTP POST.


## Output Variables

Templates:

```php
<?php
$txt = "PHP";
echo "I love $txt!";
?>
```

Concatenation:

```php
<?php
$txt = "PHP";
echo "I love " . $txt . "!";
?>
```


## Variables Scope

In PHP, variables can be declared anywhere in the script.

The scope of a variable is the part of the script where the variable can be referenced/used.

PHP has three different variable scopes:

* local
* global
* static

### Global and Local Scope

A variable declared __outside__ a function has a global scope and can only be accessed outside a function:

```php
<?php
$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
} 
myTest();

echo "<p>Variable x outside function is: $x</p>";
?>
```

A variable declared __within__ a function has a local scope and can only be accessed within that function:

```php
<?php
function myTest() {
  $x = 5; // local scope
  echo "<p>Variable x inside function is: $x</p>";
} 
myTest();

// using x outside the function will generate an error
echo "<p>Variable x outside function is: $x</p>";
?>
```


## The global Keyword

The `global` keyword is used to access a global variable from within a function.

To do this, use the `global` keyword before the variables (inside the function):

```php
<?php
$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();
echo $y; // outputs 15
?>
```

PHP also stores all global variables in an array called `$GLOBALS[index]`.  The index holds the name of the variable.  This array is also accessible from within functions and can be used to update global variables directly.

The example above can be rewritten like this:

```php
<?php
$x = 5;
$y = 10;

function myTest() {
  $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
} 

myTest();
echo $y; // outputs 15
?>
```


## The static Keyword

Normally, when a function is completed/executed, all of its variables are deleted.  However, sometimes we want a local variable NOT to be deleted.  We need it for a further job.

To do this, use the `static` keyword when you first declare the variable:

```php
<?php
function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();
myTest();
myTest();
?>
```

**Note**: The variable is still local to the function.


## echo and print Statements

In PHP there are two basic ways to get output: `echo` and `print`.  They are more or less the same.  They are both used to output data to the screen.

The differences are small: `echo` has no return value while `print` has a return value of 1 so it can be used in expressions.  `echo` can take multiple parameters while `print` can take one argument.  `echo` is marginally faster than `print`.


## PHP Data Types

PHP supports the following data types:

* Boolean
* Float (floating point numbers - also called double)
* Integer
* String
* Array
* Object
* NULL
* Resource

**Determining the Data Type**:

```php
gettype($var);  // Returns 'array', 'boolean', 'double', 'integer', 'NULL',
                // 'object', 'resource', 'string', or 'unknown type'.
get_class($var);
is_array($var);
is_bool($var);
is_callable($var);
is_float($var);
is_int($var);
is_null($var);
is_numeric($var);
is_object($var);
is_resource($var);
is_scalar($var);
is_string($var);
```


## PHP String

A string is a sequence of characters, where a character is the same as a byte.
This means that PHP only supports a 256-character set, and hence does not offer
native Unicode support.

A string literal can be specified in four different ways:

* Single quoted
* Double quoted
* Heredoc syntax
* Nowdoc syntax (since PHP 5.3.0)

**Single Quoted**

A string specified by enclosing it in single quotes (the ' character).

To specify a literal single quote, escape it with a backslash (\\').  To specify
a literal backslash, double it (\\\\).

**Double Quoted**

A string specified by enclosing it in double quotes (the " character).

In double quoted strings, PHP **will** interpret the escape sequences for
special characters it **will** expand variable names.

**Heredoc Syntax**

A third way to delimit strings is the heredoc syntax: <<<.  After this operator,
an identifier is provided, then a newline.  The string itself follows, and then
the same identifier again to close the quotation.

The closing identifier must begin in the first column of the line.  Also, the
identifier must follow the same naming rules as any other label in PHP: it must
contain only alphanumeric characters and underscores, and must start with a
non-digit character or underscore.

Heredoc text behaves just like a double-quoted string, without the double
quotes.

Starting with PHP 5.3.0, the opening Heredoc identifier may optionally be
enclosed in double quotes.

**Nowdoc Syntax**

Nowdocs are to single-quoted strings what heredocs are to double-quoted strings.
A nowdoc is specified similarly to a heredoc, but no parsing is done inside a
nowdoc.  The construct is ideal for embedding PHP code or other large blocks of
text without the need for escaping.

A nowdoc is identified with the same <<< sequence used for heredocs, but the
identifier which follows is enclosed in single quotes, e.g. <<<'EOT'.

Nowdoc support was added in PHP 5.3.0.

**Examples**

```php
<?php 
$x = "Hello";
$y = ' world!';
echo $x . $y; // Can be concatenated
?>
```

**Common String Functions**

```php
<?php 
$str = 'Hello world!';
strlen($str); // Total number of characters.  Returns 12.
str_word_count($str); // Count of words.  Returns 2.
strrev($str); // Reverses characters.  Returns '!dlrow olleH'.
strpos($str, 'world'); // Finds position of a string.  Returns 6.
str_replace('world', 'Dolly', $str); // Returns 'Hello Dolly!'.
addslashes('Special "chars"');  // Returns 'Special \"chars\"'.
chop('foo bar\t\n  '); // Returns 'foo bar'.
explode(',', 'foo,bar,baz,quux');  // Returns array of 'foo', 'bar', 'baz', and 'quux'.
implode(',', array('foo', 'bar', 'baz', 'quux')); // Returns 'foo,bar,baz,quux'. Alias of `join`.
htmlspecialchars('This is some <b>bold</b> text.'); // Returns 'This is some &lt;b&gt;bold&lt;/b&gt; text.'.
strtolower('FooBar'); // Returns 'foobar'.
trim('\tFoo Bar\r\n'); // Returns 'Foo Bar'.
?>
```


## PHP Integer

An integer data type is a non-decimal number between -2,147,483,648 and 2,147,483,647.

Rules for integers:

* An integer must have at least one digit.
* An integer must not have a decimal point.
* An integer can be either positive or negative.
* Integers can be specified in three formats: decimal (10-based), hexadecimal (16-based - prefixed with 0x) or octal (8-based - prefixed with 0)


## PHP Boolean

A Boolean represents two possible states: TRUE or FALSE.

```php
<?php
$x = true;
$y = false;
?>
```


## PHP Arrays

An array stores multiple values in one single variable.

**Indexed Arrays**

```php
<?php
$cars = array('Chevy', 'dodge', 'Ford');
$cars[1] = 'Dodge';
echo $cars[2];  // outputs Ford
echo count($cars);  // outputs 3
?>
```

**Associative Arrays**

```php
<?php
$car = array('make' => 'Ford', 'model' => 'Mustang', 'year' => 1967);
$car['year'] = 1968;
echo $car['model'];  // outputs Mustang
?>
```


## PHP Object

An object is a data type which stores data and information on how to process that data.

In PHP, an object must be explicitly declared.

First we must declare a class of object.  For this, we use the `class` keyword.  A class is a structure that can contain properties and methods:

```php
<?php
class Car {
  function Car() {
    $this->model = "Mustang";
  }
}

// Create an object
$car = new Car();

// Show object properties
echo $car->model;
?>
```


## PHP NULL Value

Null is a special data type which can have only one value: `null`.

A variable of data type NULL is a variable that has no value assigned to it.

**Note**: If a variable is created without a value, it is automatically assigned a value of `null`.


## PHP 5 Operators

### Arithmetic Operators

| Operator | Function       | Example  |
| ---------| -------------- | -------- |
| +        | Addition       | $x + $y  |
| -        | Subtraction    | $x - $y  |
| *        | Multiplication | $x * $y  |
| /        | Division       | $x / $y  |
| %        | Modulus        | $x % $y  |
| **       | Exponentiation | $x ** $y |

### Assignment Operators

| Operator | Example  |
| -------- | -------- |
| =        | $x = 10  |
| +=       | $x += 10 |
| -=       | $x -= 10 |
| *=       | $x *= 10 |
| /=       | $x /= 10 |
| %=       | $x %= 10 |


### Comparison Operators

| Operator | Function                 | Example   |
| -------- | ------------------------ | --------- |
| ==       | Equal                    | $x == $y  |
| ===      | Identical                | $x === $y |
| !=       | Not Equal                | $x != $y  |
| !==      | Not identical            | $x !== $y |
| >        | Greater than             | $x > $y   |
| <        | Less than                | $x < $y   |
| >=       | Greater than or equal to | $x >= $y  |
| <=       | Less than or equal to    | $x <= $y  |

### Increment / Decrement Operators

| Operator | Function       | Example |
| -------- | -------------- | ------- |
| ++       | Pre-increment  | ++$x    |
| ++       | Post-increment | $x++    |
| --       | Pre-decrement  | --$x    |
| --       | Post-decrement | $x--    |

### Logical Operators

The following is in order of precedence from higher to lower.

| Operator | Function | Example    | Result                                         |
| -------- | -------- | ---------- | ---------------------------------------------- |
| !        | Not      | !$x        | True if $x is not true.                        |
| &&       | And      | $x && $y   | True if both $x and $y are true.               |
| \|\|     | Or       | $x \|\| $y | True if either $x or $y is true.               |
| and      | And      | $x and $y  | True if both $x and $y are true.               |
| xor      | Xor      | $x xor $y  | True if either $x or $y is true, but not both. |
| or       | Or       | $x or $y   | True if either $x or $y is true.               |

### String Operators

| Operator | Function                 | Example  |
| -------- | ------------------------ | -------- |
| .        | Concatenation            | $x . $y  |
| .=       | Concatenation assignment | $x .= $y |

### Array Operators

| Operator |	Function     |	Example    |	Result                                                                                           |
| -------- | ------------ | ---------- | ------------------------------------------------------------------------------------------------ |
| +        | Union        |	$x + $y	   | Union of $x and $y.                                                                              |
| ==	      | Equality	    | $x == $y	  | Returns true if $x and $y have the same key/value pairs.                                         |
| ===	     | Identity	    | $x === $y	 | Returns true if $x and $y have the same key/value pairs in the same order and of the same types. |
| !=	      | Inequality	  | $x != $y	  | Returns true if $x is not equal to $y.                                                           |
| !==	     | Non-identity	| $x !== $y	 | Returns true if $x is not identical to $y.                                                       |


## PHP 5 Constants

A valid constant name starts with a letter or underscore (no $ sign before the constant name).

**Note**: Unlike variables, constants are automatically global across the entire script.

### Create a PHP Constant

To create a constant, use the `define()` function.

```php
define(name, value, case-insensitive)
```

**Parameters**:

* name: Specifies the name of the constant.
* value: Specifies the value of the constant.
* case-insensitive: Specifies whether the constant name should be case-insensitive. Default is `false`.

## Control Flow Statements

### Conditional Statements

**if Statement**

```php
if (condition) {
  // code to be executed if condition is true;
}
```

```php
<?php if (condition): ?>
  Some text to output if condition is true.
<?php endif ?>
```

**if...else Statement**

```php
if (condition) {
  // code to be executed if condition is true;
}
else {
  // code to be executed if condition is false;
}
```

```php
<?php if (condition): ?>
  Some text to output if condition is true.
<?php else: ?>
  Some text to output if condition is false.
<?php endif ?>
```

**if...elseif...else Statement**

```php
if (condition) {
  // code to be executed if this condition is true;
}
elseif (condition) {
  // code to be executed if this condition is true;
}
// other elseif clauses may be added here;
else {
  // code to be executed if all conditions are false;
}
```

```php
<?php if (condition): ?>
  Some text to output if this condition is true.
<?php elseif (condition): ?>
  Some text to output if this condition is true.
<?php else: ?>
  Some text to output if all conditions are false.
<?php endif ?>
```

**switch Statement**

```php
switch (n) {
  case value1:
    // code to be executed if n == value1;
    break;
  case value2:
    // code to be executed if n == value2;
    break;
  case value3:
    // code to be executed if n == value3;
    break;
  ...
  default:
    // code to be executed if n is different from all values;
}
```

```php
<?php switch (n): ?>
<?php case value1: ?>
  Some text to output if n == value1.
<?php break; case value2: ?>
  Some text to output if n == value1.
<?php break; case value3: ?>
  Some text to output if n == value3.
<?php ... ?>
<?php break; default: ?>
  Some text to output if n is different from all values.
<?php endswitch ?>
```

### Loop Statements

**while Loop**

```php
while (condition) {
  // code to be executed while condition is true;
}
```

**do...while Loop**

```php
do {
  // code to be executed while condition is true;
} while (condition);
```

**for Loop**

```php
for (init counter; test counter; increment counter) {
  // code to be executed;
}
```

```php
<?php 
for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
} 
?>
```

**foreach Loop**

```php
// Indexed Arrays:
foreach ($array as $value) {
  // code to be executed;
}

// Associative Arrays:
foreach ($array as $key => $value) {
  // code to be executed;
}
```

### throw Statement

```php
throw new Exception('message');
```

### try/catch Statements

```php
try {
  // code to be executed that might throw an exception;
}
catch(CustomException $e) {
  echo 'Message: ' . $e->getMessage();
}
...
catch(ErrorException $e) {
  echo 'Message: ' . $e->getMessage();
}
catch(Exception $e) {
  echo 'Message: ' . $e->getMessage();
}
finally {
  // code to always be executed regardless of exceptions;
}
```


## Functions

```php
function functionName($arg1, $arg2, ..., $argN = defaultValue, ...) {
  // code to be executed;
  return someValue; // optional
}
```

**Function Reference**

PHP has many functions available.  See http://php.net/manual/en/funcref.php for
details.


## PHP Classes

```php

namespace NamespaceName {

  [abstract | final] class ClassName [extends OtherClassName] [implements SomeInterface[, SomeOtherInterface]] {

    const CONSTANT = 'constant value';
    // As of PHP 7.1.0, may provide visibility modifiers.
    public const CONSTANT = 'constant value';
    private const CONSTANT = 'constant value';

    public static $staticVar = ...;
    private static $staticVar = ...;

    public static function staticMethodName(...) {
      ...
      self::$staticVar
      self::CONSTANT
    }

    /**
     * Triggered when invoking inaccessible methods in a static context.
     * 
     * @param {string} $name - The property name.
     * @param {Array} $arguments - The arguments.
     */
    static function __callStatic($name, $arguments) {
      ...
      return ...;
    }

    private static function staticMethodName(...) {
      ...
      self::$staticVar
      self::CONSTANT
    }

    // Properties:

    public $pubPropName1;
    public $pubPropName2 = defaultValue;  // Default value must be able to be evaluated at compile time.
    ...

    protected $protPropName1;
    protected $protPropName2 = defaultValue;  // Default value must be able to be evaluated at compile time.
    ...

    private $privPropName1;
    private $privPropName2 = defaultValue;  // Default value must be able to be evaluated at compile time.
    ...

    function __construct(...) {
      ...
      parent::__construct(...);
      ...
      self::$staticVar
      self::CONSTANT
    }

    function __destruct() {
      ...
      parent::__destruct();
      ...
    }
  
    /**
     * Run when reading data from inaccessible properties.
     * 
     * @param {string} $name - The property name.
     * @return {mixed}
     */
    function __get($name) {
      ...
      return ...;
    }

    /**
     * Run when writing data to inaccessible properties.
     * 
     * @param {string} $name - The property name.
     * @param {mixed} $value - The property value.
     */
    function __set($name, $value) {
      ...
    }

    /**
     * Triggered by calling `isset()` or `empty()` on inaccessible properties.
     * 
     * @param {string} $name - The property name.
     */
    function __isset($name) {
      ...
      return ...;
    }

    /**
     * Invoked when `unset()` is used on inaccessible properties.
     * 
     * @param {string} $name - The property name.
     */
    function __unset($name) {
      ...
    }

    /**
     * Triggered when invoking inaccessible methods in an object context.
     * 
     * @param {string} $name - The property name.
     * @param {Array} $arguments - The arguments.
     */
    function __call($name, $arguments) {
      ...
      return ...;
    }

    /**
     * Invoked when a script tries to call an object as a function.
     */
    function __invoke(...) {
      return ...;
    }

    /**
     * @return {string} A string representation of this object.
     */
    function __toString() {
      return ...;
    }

    /**
     * Executed prior to any serialization.
     * 
     * @return {Array} The names of all variables of that object that should be serialized.
     */
    function __sleep() {
      return ...;
    }

    function __wakeup() {
      return ...;
    }

    abstract [public|protected] function methodName(...);
    
    final [public|protected|private] function methodName(...) { ... }

    /**
     * Method description.
     *
     * @param {type} $param1 - Param1 description.
     * @param {type} [$param2=defaultValue] - Param2 description.
     *
     * @return {type} Return description.
     */
    public function methodName($param1, $param2 = defaultValue) {
      self::$staticVar
      ...
      $this->propName;
      return ...;
    }

    /**
     * @override
     */
    public function overriddenMethod(...) {
      ...
      parent::overriddenMethod(...);
      ...
    }

    /**
     *
     */
    function methodName(...) {
      ...
      return ...;
    }

    /**
     *
     */
    protected function methodName(...) {
      ...
      return ...;
    }

    /**
     *
     */
    private function methodName(...) {
      ...
      return ...;
    }

  }

}

// Calling a static method:
ClassName::staticMethodName(...);

// Accessing the constant:
ClassName::CONSTANT;

// Instantiating an object of a particular class:
$var = new ClassName;
$var = new ClassName();
$className = 'ClassName';
$var = new $className();
```
