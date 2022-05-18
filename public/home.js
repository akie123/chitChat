

document.getElementById('but-1').addEventListener("click",()=>{

    document.getElementById('create').style.display='block';
    document.getElementById('join').style.display='none';

})
document.getElementById('but-2').addEventListener("click",()=>{

    document.getElementById('create').style.display='none';
    document.getElementById('join').style.display='block';

})
document.getElementById('but-3').addEventListener("click",()=>{

    document.getElementById('create').style.display='none';
    document.getElementById('join').style.display='none';

})
document.getElementById('but-5').addEventListener("click",()=>{

    document.getElementById('create').style.display='none';
    document.getElementById('join').style.display='none';

})
let typed =new Typed(".auto",{
    strings: ['Realtime Chat Application','Experience Real Time Chatting','Secured End-to-End Encrypted','Realtime Chat Application'],
    typeSpeed:100,
    // backSpeed:50,
    loop:true
});