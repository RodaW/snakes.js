const net = require("net");
const { IP, PORT } = require('./constants');
// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port: PORT
    });
    conn.on('data', (data) => {
      console.log('Server says:', data)
    });
    conn.on('connect', () => {
        console.log('Successfully connected to game server \n')
        conn.write('Name: LNW')
        // }, 50)
    })
    conn.setEncoding("utf8");
    return conn;
  };

  module.exports = connect;
