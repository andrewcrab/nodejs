#!/usr/bin/env node




process.stdin.resume();

process.on('SIGINT', function () {
  console.log('Got a SIGINT. Goodbye cruel world');
  process.exit(0);
});








// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
// process.stdin.pipe(process.stdout);