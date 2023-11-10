import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

// we need to connect Socket with express & start the http server with express
let app = express();
let server = http.createServer(app);
// create a socket that can emit data & also accept the client connections
let io = new Server(server);

// load a file for the client to connect with this socket
app.get('/', (request, response) => {
    response.sendFile('client.html', {root: 'D:\\Training Stuffs\\Corporate Clients\\Deloitte\\examples\\day5'});
});
// accept the client connection, the callback will take the socket object to exchange the data b/w client&server
io.on('connection', (socket) => {
    // on("key", callback) is used to accept the data
    // emit("key", value) is used to send the data
    socket.on('clientKey', data => console.log(data));
    socket.emit('serverKey', 'I am server...')
});
// start the server
server.listen(9999, () => console.log('server started in 9999'));