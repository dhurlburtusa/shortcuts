# NGiNX Notes

NGiNX has one master process and several worker processes.  The main purpose
of the master process is to read and evaluate configuration, and maintain
worker processes.  Worker processes do actual processing of requests.

The way NGiNX and its modules work is determined in the configuration file.


## Starting, Stopping, and Reloading Configuration

See https://nginx.org/en/docs/beginners_guide.html for details.

```sh
$ nginx -s signal
```

where the signal is one of

* stop — fast shutdown
* quit — graceful shutdown
* reload — reloading the configuration file
* reopen — reopening the log files

**Preferred Alternative**

I am calling the following the preferred alternative because it is what I
commonly see in the DigitalOcean documentation. This, of course, only works
on systems with SystemV (e.g., Ubuntu).

```sh
sudo systemctl status nginx
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx
```

## Configuration

### Structure

```nginx
# Comments begin with "#".

# Simple directives (as opposed to block directives) are allowed in various
# contexts including the main context.
#
# The main context currently only allows four block directives: "events",
# "http", "mail", and "stream".  However, "mail" and "stream" are not available
# by default.

# Note: Only directives that are available by default are shown below.  Many
# other directives can be made available by rebuilding from source with certain
# options specified.

simple_directive param1 param2 ...;
# ...
simple_directive param1 param2 ...;

events {
  simple_directive param1 param2 ...;
  # ...
  simple_directive param1 param2 ...;
}

http {
  # The "http" context only allows simple directives and "server" directives.

  simple_directive param1 param2 ...;
  # ...
  simple_directive param1 param2 ...;

  charset_map charset1 charset2 {
    #...
  }

  geo [$address] $variable {
    #...
  }

  map string $variable {
    # ...
  }

  split_clients string $variable {
    #...
  }

  types {
    # ...
  }

  # Logic for Selecting a server to Process
  # ---------------------------------------
  # When searching for a virtual server by name, if name matches more than one of
  # the specified variants, e.g. both wildcard name and regular expression match,
  # the first matching variant will be chosen, in the following order of
  # precedence:
  #
  # 1) Exact name
  # 2) Longest wildcard name starting with an asterisk, e.g. "*.example.org"
  # 3) Longest wildcard name ending with an asterisk, e.g. "mail.*"
  # 4) First matching regular expression (in order of appearance in a configuration
  #    file)
  server {
    # The "server" context only allows simple directives and "location" directives.

    simple_directive param1 param2 ...;
    # ...
    simple_directive param1 param2 ...;

    if (condition) {
      #...
    }

    types {
      # ...
    }

    # Logic for Selecting a location to Process
    # -----------------------------------------
    # 1) Test the URI against all prefix strings.
    # 2) The = (equals sign) modifier defines an exact match of the URI and a prefix
    #    string.  If the exact match is found, then the search stops.
    # 3) If the ^~ (caret-tilde) modifier prepends the longest matching prefix string,
    #    the regular expressions are not checked.
    # 4) Store the longest matching prefix string.
    # 5) Test the URI against regular expressions.
    # 6) Break on the first matching regular expression and use the corresponding
    #    location.
    # 7) If no regular expression matches, use the location corresponding to the stored
    #    prefix string.
    
    # location Syntax
    # ---------------
    # `location [ = | ~ | ~* | ^~ ] uri { ... }`
    # `location @name { ... }`
    location path {
      # The "location" context only allows simple directives and other "location"
      # directives.

      simple_directive param1 param2 ...;
      # ...
      simple_directive param1 param2 ...;

      if (condition) {
        #...
      }

      types {
        # ...
      }
    }
  }

  # ...

  server {
    # ...
  }
}
```

### Samples

**Setting Long Expiration for Static Files**

```
# ...
  server {
    # ...

    location ~* \.(css|eot|gif|ico|jpeg|jpg|js|png|svg|ttf|woff|woff2)$ {
      expires max;
      log_not_found off;
    }

    # ...
  }
# ...
```
