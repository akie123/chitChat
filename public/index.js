




const socket= io();

let location2=window.location.href;
let location1=location2.split('/');
console.log(location1);
document.getElementById('sl1').innerHTML=`Chat Room Id = ${location1[5]} (Share With Your Group)`
socket.emit('joinRoom',location1[4],location1[5]);
socket.on('message',(message,time,user)=>{

    const div=document.createElement('div');
    div.classList.add('mg');
    div.innerHTML=`<p class="text-muted">${user}, ${time}</p>\n` +
        `                               <h5>${message}</h5>`
    document.getElementById('scroll').appendChild(div);

    var objDiv = document.getElementById("scroll");
    objDiv.scrollTop = objDiv.scrollHeight;


    document.getElementById('msgg').value="";
    document.getElementById('msgg').focus();
})
 socket.on('message1',(message,time)=>{

     const div=document.createElement('div');
     div.classList.add('mg');
     div.innerHTML=`<p class="text-muted">Chit Chat, ${time}</p>\n` +
         `                               <h5>${message}</h5>`
     document.getElementById('scroll').appendChild(div);

     var objDiv = document.getElementById("scroll");
     objDiv.scrollTop = objDiv.scrollHeight;


     document.getElementById('msgg').value="";
     document.getElementById('msgg').focus();
 })

 document.getElementById('send').addEventListener("click",(e)=>{
     e.preventDefault();
     let msg=document.getElementById('msgg').value;

     socket.emit('msg',msg,location1[4]);

 })
