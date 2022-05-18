 const socket= io();

socket.on('message',(message)=>{

    const div=document.createElement('div');
    div.classList.add('mg');
    div.innerHTML=`<p class="text-muted">Rome,19:05</p>\n` +
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

     socket.emit('msg',msg);

 })
