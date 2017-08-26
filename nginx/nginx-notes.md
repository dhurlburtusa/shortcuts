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
