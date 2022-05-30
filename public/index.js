




const socket= io();

let location2=window.location.href;
let location1=location2.split('/');

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
socket.on('message2',(message,time,user)=>{

    console.log(message)
    const div=document.createElement('div');
    div.classList.add('mg');
    div.classList.add('left');

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
     div.classList.add('center');
     div.innerHTML= `<h5>${message}</h5>`
     document.getElementById('scroll').appendChild(div);

     var objDiv = document.getElementById("scroll");
     objDiv.scrollTop = objDiv.scrollHeight;


     document.getElementById('msgg').value="";
     document.getElementById('msgg').focus();
 })
socket.on('people',(arr)=>{

    console.log(arr);
    const div=document.createElement('ul');
    div.classList.add('list-group');
    arr.forEach((element)=>{

        const div2=document.createElement('li');
        div2.classList.add('list-group-item');
        div2.innerHTML=element.name;
        div.appendChild(div2);


       })

    const chatList=document.getElementById('chatList');
    chatList.innerHTML='';
    chatList.appendChild(div)





})
 document.getElementById('send').addEventListener("click",(e)=>{
     e.preventDefault();
     let msg=document.getElementById('msgg').value;

     if(msg!='')
     socket.emit('msg',msg,location1[4]);

 })
