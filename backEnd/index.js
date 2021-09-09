const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server);
app.use(cors());
let totalConnectedUsers=0;
app.get('/', (req, res) => {
    res.send('<h1>ok</h1>');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

});

server.listen(4000, () => {
    console.log('listening on *:4000');
});