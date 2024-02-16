let hrs=document.querySelector("#hours");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");
let p=document.querySelector("p");
let textCol=document.querySelector(".clock");

setInterval(()=>{
    let date= new Date();
    hrs.innerHTML=(date.getHours()<10?"0":"")+date.getHours();
    min.innerHTML=(date.getMinutes()<10?"0":"")+date.getMinutes();
    sec.innerHTML=(date.getSeconds()<10?"0":"")+date.getSeconds();
    if(date.getHours()>12){
        p.innerHTML="pm";
            }
            else{
                p.innerHTML="am";
            }
},1000);


const container = document.querySelector('.main');

function getRandomPosition() {
  const screenWidth = window.innerWidth - container.clientWidth;
  const screenHeight = window.innerHeight - container.clientHeight;

  const randomX = Math.floor(Math.random() * screenWidth);
  const randomY = Math.floor(Math.random() * screenHeight);

  return { x: randomX, y: randomY };
}
 var colors=["red","green","yellow","cadetblue","navy","brown","coral"];
 var index=0;
 function changeColor(){
  var randomIndex=Math.floor(Math.random()*colors.length);
  var color=colors[randomIndex];
  textCol.style.color=color;
 }
//  setInterval(()=>{
//   changeColor();
//  },1000);




function moveContainer() {
  const newPosition = getRandomPosition();
  container.style.left = `${newPosition.x}px`;
  container.style.top = `${newPosition.y}px`;
  container.style.transform = `translateZ(${Math.random() * 80}px)`;
   container.style.animation = 'none'; 
  void container.offsetWidth; 
  container.style.animation = null; 
changeColor();

}
setInterval(moveContainer, 1000); 
