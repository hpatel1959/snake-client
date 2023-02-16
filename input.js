const movementsAndKeyMappings = require("./constants").movementsAndKeyMappings;
const movementsAndKeyMappingsArr = require('./constants').movementsAndKeyMappingsArr;

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

  for (const item of movementsAndKeyMappingsArr) {
    if (data === item) {
      console.log(movementsAndKeyMappings[item]);
      connection.write(movementsAndKeyMappings[item]);
    }
  };
};

module.exports = {
  setupInput
};