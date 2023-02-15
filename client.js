const net = require('net');

// const setupInput = require('./input').setupInput;

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
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