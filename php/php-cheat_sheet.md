# PHP Cheat Sheet

PHP originally stood for Personal Home Page, but it now stands for the recursive acronym PHP: Hypertext Preprocessor.


## Brief History

See https://en.wikipedia.org/wiki/PHP#History for details.

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

The PHP superglobal variables are:

* $GLOBALS
* $_SERVER
* $_REQUEST
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

An associative array which holds information about headers, paths, and script locations.

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


## PHP String

A string is a sequence of characters, like "Hello world!".  You can use single or double quotes:

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


## PHP Array

An array stores multiple values in one single variable.

In the following example `$cars` is an array.

```php
<?php 
$cars = array("Chevy", "Dodge", "Ford");
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

**if...else Statement**

```php
if (condition) {
  // code to be executed if condition is true;
}
else {
  // code to be executed if condition is false;
}
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
foreach ($array as $value) {
  // code to be executed;
}
```


## Functions

```php
function functionName($arg1, $arg2, ..., $argN = defaultValue, ...) {
  // code to be executed;
  return someValue; // optional
}
```
