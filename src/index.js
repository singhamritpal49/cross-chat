const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server); 

const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname,'../public');


app.use(express.static(publicDirectory));

io.on('connection',()=> {
    console.log("New Web socket connection")
})

server.listen(port, () => {
    console.log("Sever is up at " + port);
})


