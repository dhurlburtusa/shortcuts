# NGiNX Notes

NGiNX has one master process and several worker processes.  The main purpose
of the master process is to read and evaluate configuration, and maintain
worker processes.  Worker processes do actual processing of requests.

The way NGiNX and its modules work is determined in the configuration file.
