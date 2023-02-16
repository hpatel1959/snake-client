const IP = '165.227.47.243';
const PORT = 50541;

const movementsAndKeyMappings = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  c: 'Say: *crashes*',
  h: 'Say: Hi',
  m: 'Say: MINE!',
  u: 'Say: Whats up!'
};

const movementsAndKeyMappingsArr = Object.keys(movementsAndKeyMappings);

module.exports = {
  IP,
  PORT,
  movementsAndKeyMappings,
  movementsAndKeyMappingsArr,
};