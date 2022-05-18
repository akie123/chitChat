const express=require('express');
const app= express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const http = require('http');
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server);


app.get('/chitChat',(req,res)=>{

    res.render('index');
})
app.get('/chitChat/user',(req,res)=>{

    res.render('chat');
})
io.on('connection',(socket)=>{
    console.log(socket.id);
    socket.emit('message','Welcome to ChitChat!')
    socket.on('msg',(msg)=>{
       io.emit('message',msg);

    })
    socket.on('disconnect',()=>{
        console.log('disconnected')
    })
})


server.listen(3000, () => {
    console.log('listening on :3000');
});
