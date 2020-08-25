const net = require('net');
const { IP, PORT, NAME } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //recieve data from server
  conn.on('data', (data) => {
    console.log(data);
  });
  //print on the client that we are connected
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    /*
    //moves snake up with setIntervals
    const myMove = setInterval(() => {
      conn.write("Move: up");
    },50);*/

    /*
    //moves th snake up 5 times right after connection establishes each have 50ms delay
    let timeDelay = 50;
    for (let i = 0; i < 5; ++i) {
      setTimeout(() => conn.write("Move: up"), timeDelay);
      timeDelay += 50;
    };*/

    /*
    //moves the snake up for one block as soon as we connect
    conn.write("Move: up");*/
    
  });
  //sending our name to the server
  conn.write(`Name: ${NAME}`)

  return conn;
};
module.exports = {connect};