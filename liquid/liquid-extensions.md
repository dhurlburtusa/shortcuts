# Liquid Extensions


## Extra Filters

```ruby
# Adds extra filter(s) to the Liquid language.
module MyNamespace

  module JavaScriptFilter

    # {{ my_string | js_string }}
    def js_string(input)
      input.to_s.gsub(/'/, "\\'").gsub(/"/, '\\"')
    end

  end # eo JavaScriptFilter

end # eo module MyNamespace

Liquid::Template.register_filter(MyNamespace::JavaScriptFilter)
```


## Extra Operators

```ruby
# Adds extra operators to the Liquid language.

module Liquid

  class Condition

    @@operators['ends_with'.freeze] = lambda do |cond, left, right|
      if left && right && left.respond_to?(:end_with?)
        right = right.to_s if left.is_a?(String)
        left.end_with?(right)
      else
        false
      end
    end

    @@operators['starts_with'.freeze] = lambda do |cond, left, right|
      if left && right && left.respond_to?(:start_with?)
        right = right.to_s if left.is_a?(String)
        left.start_with?(right)
      else
        false
      end
    end

  end # eo class Condition

  class Lexer

    # Turn off warnings that will occur due to the following redefinition of a
    # constant.
    verbosity_level, $VERBOSE = $VERBOSE, nil

    # Redefine COMPARISON_OPERATOR.  Original: /==|!=|<>|<=?|>=?|contains(?=\s)/
    COMPARISON_OPERATOR = /==|!=|<>|<=?|>=?|contains(?=\s)|ends_with(?=\s)|starts_with(?=\s)/

    # Reinstate verbosity level.
    $VERBOSE = verbosity_level

  end # eo class Lexer

end # eo module Liquid
```
