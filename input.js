let connection;
//importing moves!
const {KEYS} = require('./constants')
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
//handleUserInput function to exit with ^c
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  };
}; 
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //handleUserInput function to exit with ^c
  stdin.on('data',handleUserInput );
  // sending moves to the server
  stdin.on('data',(key) => connection.write(KEYS[key]));
  return stdin;
};
module.exports = {setupInput};