const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connected', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write('Name: SVO');

  });

  return conn;
};

console.log('Connected...');
connect();

module.exports = {
  connect
};