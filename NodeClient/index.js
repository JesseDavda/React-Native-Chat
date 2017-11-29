const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

users = [];
connections = [];

server.listen(process.env.PORT || 3000);

io.sockets.on('connection', (socket) => {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);

    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(source), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('send message', (data) => {
        io.sockets.emit('new message', {message: data});
        console.log("message: " + data);
    });
});
