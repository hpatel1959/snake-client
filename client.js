const net = require('net');

const IP = require('./constants').IP;
const PORT = require('./constants').PORT;

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Connected to the game server!");
    conn.write('Name: HDP');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.setEncoding("utf-8");

  return conn;
};

module.exports = {
  connect
};