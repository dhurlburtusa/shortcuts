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
