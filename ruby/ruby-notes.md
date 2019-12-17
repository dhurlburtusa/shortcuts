# Ruby Notes

Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.


## Documentation

**Online**

[Ruby-Doc.org](https://ruby-doc.org/)

**Offline**

Use the `ri` command that comes with Ruby.

```sh
ri
ri Object
ri Object.static_method
ri Object#instance_method
```


## Language

See [Ruby Language Notes](./ruby_language-notes.md).


## Commonly Used Object Methods

```ruby
# `new`, `object_id`
class A; end

a1 = A.new
a2 = A.new

a1.object_id == a2.object_id  #=> false

# `class`
1.class #=> Integer

# `===`, `==`, `equal?`, `eql?`
obj1 === obj2 # Case equality, i.e., used with `case` statements.
obj1 == obj2  # Same object reference or equivalency. Depends on object implementation.
obj1.equal? obj2  # Same object reference (aka equality).
obj1.eql? obj2  # Same hash key.

# `instance_of?`
class A; end
class B < A; end
class C < B; end

b = B.new
b.instance_of? A  #=> false
b.instance_of? B  #=> true
b.instance_of? C  #=> false

# `is_a?` and `kind_of?`
module M; end
class A
  include M
end
class B < A; end
class C < B; end

b = B.new
b.is_a? A #=> true
b.is_a? B #=> true
b.is_a? C #=> false
b.is_a? M #=> true

b.kind_of? A  #=> true
b.kind_of? B  #=> true
b.kind_of? C  #=> false
b.kind_of? M  #=> true

# `nil?`
0.nil?  #=> false
1.nil?  #=> false
false.nil?  #=> false

# `freeze`
foo.freeze

# Reflection
foo.methods
foo.private_methods
foo.protected_methods
foo.public_methods
foo.singleton_methods
foo.respond_to? :bar

# Conversions
foo.to_a  # Convert to array (available on Enumerable, Hash, Struct, etc)
foo.to_f  # Convert to float (available on Integer, String, etc)
foo.to_h  # Convert to hash (available on Array, Enumerable, Struct, etc)
foo.to_i  # Convert to integer (available on Float, String, Time, etc)
foo.to_s  # Convert to string (available on all objects)
foo.to_sym  # Convert to symbol (available on Strin, etc)
```


## Misc

- Everything except nil and false is considered true.
- Symbols are not lightweight Strings. Symbols can best be described as identities. A symbol is all about who it is, not what it is.
- Since Ruby 2.0, methods can be defined using keyword arguments.
- Constants are not really constant. If you modify an already initialized constant, it will trigger a warning, but not halt your program.
- “Everything is an object”, even classes and integers are objects.
- Ruby classes are open. You can open them up, add to them, and change them at any time. Even core classes, like `Integer` or even `Object`, the parent of all objects.
- Most operators in Ruby are just syntactic sugar (with some precedence rules) for method calls.
- Message passing, not function calls.
- Blocks are Objects, they just don’t know it yet.
- Most operators in Ruby are just syntactic sugar (with some precedence rules) for method calls.
- The `Kernel` module methods may be called without a receiver and thuse can be be called in functional form.


## To be Categorized

**Checking if Current Scripts is Main**

```ruby
if __FILE__ == $0
  # ...
end
```

**Useful Reads**

- https://www.ruby-lang.org/en/documentation/ruby-from-other-languages/
- https://www.ruby-lang.org/en/libraries/


## Resources

- [Bundler](https://bundler.io/)
- [GraphQL Ruby](https://graphql-ruby.org/)
- [Ruby](https://www.ruby-lang.org/)
- [Ruby-Doc.org](https://ruby-doc.org/)
- [RubyDocs](https://rubydocs.org/)
- [RubyGems](https://rubygems.org/)
- [RubyInstall](https://rubyinstaller.org/)
- [Ruby Toolbox](https://www.ruby-toolbox.com/)
