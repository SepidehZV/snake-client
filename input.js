let connection;
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
//const moves = ["up",'left','down','right']; 
//const keys = ['w','a','s','d']; 
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //handleUserInput function to exit with ^c
  stdin.on('data',handleUserInput );

  stdin.on('data',(key) => {
    switch (key) {
      case 'w': 
        connection.write("Move: up");
        break;
      case 'a': 
      connection.write("Move: left");
        break;
      case 's':
        connection.write("Move: down");
        break;
      case 'd':
        connection.write("Move: right");
        break;
    };
  } );
  return stdin;
};
module.exports = {setupInput};