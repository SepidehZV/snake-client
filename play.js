// play.js
const { connect } = require('./client');
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
//handleUserInput function to exit with ^c
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  };
}
  
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //handleUserInput function to exit with ^c
  stdin.on('data',handleUserInput );
  return stdin;
};