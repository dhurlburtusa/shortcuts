/*
# Node Script Template

This template contains a bunch of code snippets you may find useful in your next
node script.

Note: What is found here generally does not apply to library style code. Library
style code is usually characterized by the fact that a module only exports
declarations and does not have side-effects. Scripts, on the otherhand, do
generally have side-effects and usually don't export anything.

See https://nodejs.org/docs/latest/api/
*/

// Common requires:
const fs = require('fs');
const os = require('os');
const path = require('path');

let exitCode = 0;

// Set the process title to make it easier to find with `ps` command.
process.title = 'My Script';

// The process that is created has many events you may want to listen for.
// See https://nodejs.org/docs/latest/api/process.html

// It is recommended to exit the process after the `multipleResolves` and
// `uncaughtException` events are emitted. So, it is recommended to set up handlers
// for these events early in the script.

process.on('multipleResolves', (type, promise, reason) => {
  console.log('process#multipleResolves');
  console.log('type:', type);
  console.log('promise:', promise);
  console.log('reason:', reason);
  process.exit(1);
});

// Note: The default behavior if an `uncaughtException` handler is not set is to
// print the stack trace to `stderr` and exit with code 1.
// process.on('uncaughtException', err => {
//   // Note: Exceptions thrown from this handler will not be caught. Instead the
//   // process will exit with a non-zero exit code and the stack trace will be
//   // printed. This is to avoid infinite recursion.
//   console.error('Caught exception:', err);
//
//   // TODO: Perform synchronous cleanup of allocated resources and then exit.
//
//   process.exit(1);
// });

// Emitted whenever a `Promise` is rejected and no error handler is attached to the
// promise within a turn of the event loop.
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection on:', promise);
  console.error('Cause:', reason);
  // Application specific logging, throwing an error, or other logic here
});

// Emitted whenever a `Promise` has been rejected and an error handler was attached
// to it (using `promise.catch()`, for example) later than one turn of the Node.js
// event loop.
process.on('rejectionHandled', (...args) => {
  console.log('process#rejectionHandled');
  console.log('args:', args);
});

// Process the script's arguments. May want to do this now or after setting up all
// the event handles. The arguments may dictate the behavior of the handler.
console.log('process.argv:', process.argv);

// You may want to read the environment variables:
console.log('process.env:', process.env);

// You may want to update the environment variables:
process.env.DEBUG = true;

// Emitted when Node.js empties its event loop and has no additional work to
// schedule. Is not emitted for conditions causing explicit termination, such as
// calling `process.exit()` or uncaught exceptions. Should not be used as an
// alternative to the 'exit' event unless the intention is to schedule additional
// work.
process.on('beforeExit', exitCode => {
  console.log('process#beforeExit');
  console.log('exitCode:', exitCode);
});

process.on('exit', (...args) => {
  console.log('process#exit');
  console.log('args:', args);
});

// If the Node.js process is spawned with an IPC channel (using `child_process` or
// `cluster` modules), this event will be emitted when the IPC channel is closed.
process.on('disconnect', (...args) => {
  console.log('process#disconnect');
  console.log('args:', args);
});

// If the Node.js process is spawned with an IPC channel (using `child_process` or
// `cluster` modules), this event is emitted whenever a message sent by a parent
// process using `childprocess.send()` is received by the child process.
process.on('message', (...args) => {
  console.log('process#message');
  console.log('args:', args);
});

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});

const handleSignal = signal => {
  console.log(`Received ${signal}`);
  
  if (signal === 'SIGINT') {
    // TODO: Perform some process cleanup work. This may be asynchronous or
    // synchronous. When finished, exit the process with an appropriate code.
    // This is a good way to provide a graceful shutdown.

    // ...

    process.exit();
  } else {
    // Handle other signals if desired.
  }
};

process.on('SIGINT', handleSignal);
process.on('SIGTERM', handleSignal);
process.on('SIGPIPE', handleSignal);
process.on('SIGHUP', handleSignal);
process.on('SIGBREAK', handleSignal);
process.on('SIGWINCH', handleSignal);

// You may want to change the working directory.
process.chdir('/tmp');

// At some point, you may want to exit the process with some exit code:
process.exit(1);

// Note: Node.js will not terminate until all the 'exit' event listeners are
// called.

// Print the current memory usage:
console.log(process.memoryUsage());
// {
//   rss: 4935680,
//   heapTotal: 1826816,
//   heapUsed: 650472,
//   external: 49879
// }

if (require.main === module) {
  // Do something special when run as a script.
  console.log('I am being run as a script direct with `node`.');
}

// The entry point of the running app. Will be this module if it is being run as a
// script.
console.log(require.main.filename);
