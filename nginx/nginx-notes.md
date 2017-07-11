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
