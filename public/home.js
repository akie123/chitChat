

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
document.getElementById('but-4').addEventListener("click",async (e)=>{


e.preventDefault();


  let check=true;
  let room;
    let user=document.getElementById('name-1').value;
  while(check) {
      room=  Math.floor(Math.random() * 100000) + 10000;
      const rawResponse = await fetch('/chitChat', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({flag:"getSlot",slot:room,user:user})

      });
      let content= await rawResponse.json();
      console.log(content.available)
      if(content.available==true) {

          break;
      }

  }


     window.location.href=`chitChat/${user}/${room}`


})
document.getElementById('but-6').addEventListener("click",async (e)=>{


    e.preventDefault();

    let user=document.getElementById('name2').value;
    let room=document.getElementById('id2').value;


    window.location.href=`chitChat/${user}/${room}`


})

let typed =new Typed(".auto",{
    strings: ['Realtime Chat Application','Experience Real Time Chatting','Secured End-to-End Encrypted','Realtime Chat Application'],
    typeSpeed:100,
    // backSpeed:50,
    loop:true
});