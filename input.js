// const connect = require("./client").connect;

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  };

  if (data === 'w' || data === 'W') {
    console.log('up');
    connection.write('Move: up');
  };

  if (data === 'a' || data === 'A') {
    console.log('left');
    connection.write('Move: left');
  };

  if (data === 's' || data === 'S') {
    console.log('down');
    connection.write('Move: down');
  };

  if (data === 'd' || data === 'D') {
    console.log('right');
    connection.write('Move: right');
  };

  if (data === 'h' || data === 'H') {
    console.log('You sent message: Hi');
    connection.write('Say: Hi');
  };

  if (data === 'u' || data === 'U') {
    console.log('You sent message: Whats up?');
    connection.write("Say: What's Up");
  };

  if (data === 'm' || data === 'M') {
    console.log('You sent message: Mine!');
    connection.write('Say: Mine!');
  };

  if (data === 'c' || data === 'C') {
    console.log('You sent message: *crashes*');
    connection.write('Say: *crashes*');
  };
};

module.exports = {
  setupInput
};