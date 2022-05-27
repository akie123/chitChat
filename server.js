const express=require('express');
const app= express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const moment=require('moment');

const http = require('http');
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server);
const mongoose = require("mongoose");
const dbURI="mongodb+srv://aalhad:aalhad123@aalhad123.2dfdc.mongodb.net/ChitChat?retryWrites=true&w=majority"
const Data=require('./models/data');


 let func=function(){
     return  Math.floor(Math.random() * 100000) + 10000;
 }
 let check=function( a){

     

}

mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{

        console.log('connected to mongodb');
        server.listen(3000, () => {
            console.log('listening on :3000');
        });

    })
    .catch((error)=>{
        console.log(error)
    })


app.get('/chitChat',(req,res)=>{

    res.render('index');
})
app.post('/chitChat',(req,res)=>{
    if(req.body.flag=='getSlot')
    {

    Data.find({roomc: req.body.slot}, (err, data) => {

        if(data.length!=0)
        {
            res.json({available:false});
        }
        else
        {
            res.json({available:true});
        }

    })

    }
})
app.get('/chitChat/:user/:room',(req,res)=>{

    res.render('chat');
})
io.on('connection',(socket)=>{

   socket.on('joinRoom',(user,room1)=>{

       let model=new Data({idc:socket.id,name:user,roomc:room1});
       model.save((err,res)=>{
         if(res)
         {
             socket.join(room1);

             console.log(socket.id);
             socket.broadcast.to(room1).emit('message1',`${user} joined chat`,moment().format('h:mm a'))
             socket.emit('message1','Welcome to ChitChat!',moment().format('h:mm a'))
         }
       })


   })
    socket.on('msg',(msg,user)=>{
        Data.find({idc:socket.id},(err,data)=>{
            if(data) {
                console.log(data[0].roomc)
                io.to(data[0].roomc.toString()).emit('message', msg, moment().format('h:mm a'), user);

            }
        })


    })
    socket.on('disconnect',()=>{

       Data.find({idc:socket.id},(err,res)=>{

           Data.deleteOne({id:socket.id},(err,res1)=>{


           })
       })

        console.log('disconnected')
    })
})



