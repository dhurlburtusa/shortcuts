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
