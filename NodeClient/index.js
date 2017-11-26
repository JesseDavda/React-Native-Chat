const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 3000);

io.on('connection', (socket) => {
    socket.emit('send', { message: 'Welcome'});
    socket.on('recieve', (data) => {
        console.log(data);
    });
});


app.post('/message', (req, res) => {
    console.log('Message Recieved');
    res.send('React!');
})
