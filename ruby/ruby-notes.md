# Ruby Notes

Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.


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
