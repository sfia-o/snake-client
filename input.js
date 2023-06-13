const {messages, moves} = require('./constants')

let connection;

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }

  if (messages.hasOwnProperty(key)) {
    connection.write(messages[key]);
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