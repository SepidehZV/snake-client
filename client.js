const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //recieve data from server
  conn.on('data', (data) => {
    console.log(data);
  });
  //print on the client that we are connected
  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  });
  //sending our name to the server
  conn.write("Name: SZV")

  return conn;
};
module.exports = {connect};