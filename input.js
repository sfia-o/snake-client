let connection;

const moves = {
  'w': 'Move: up',
  'a': 'Move: left',
  's': 'Move: down',
  'd': 'Move: right'
};

const message = {
  'q': 'Say: Get out of my way!!',
  'e': 'Say: That is my pixel!',
  'z': 'Say: Well played!'
};

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }

  if (message.hasOwnProperty(key)) {
    connection.write(message[key]);
  }

  if (moves.hasOwnProperty(key)) {
    connection.write(moves[key]);
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};



module.exports = {
  setupInput
};