let hrs=document.querySelector("#hours");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");

setInterval(()=>{
    let date= new Date();
    hrs.innerHTML=(date.getHours()<10?"0":"")+date.getHours();
    min.innerHTML=(date.getMinutes()<10?"0":"")+date.getMinutes();
    sec.innerHTML=(date.getSeconds()<10?"0":"")+date.getSeconds();
},1000);
const container = document.querySelector('.main');

function getRandomPosition() {
  const screenWidth = window.innerWidth - container.clientWidth;
  const screenHeight = window.innerHeight - container.clientHeight;

  const randomX = Math.floor(Math.random() * screenWidth);
  const randomY = Math.floor(Math.random() * screenHeight);

  return { x: randomX, y: randomY };
}
const colorArray = ['red', 'yellow', 'green', 'pink'];

let colorIndex = 0;

function moveContainer() {
  const newPosition = getRandomPosition();
  container.style.left = `${newPosition.x}px`;
  container.style.top = `${newPosition.y}px`;
  container.style.transform = `translateZ(${Math.random() * 100}px)`;

  const color = colorArray[colorIndex];
container.style.backgroundColor = color;

colorIndex = (colorIndex + 1) % colorArray.length;


  container.style.animation = 'none'; 
void container.offsetWidth; 
container.style.animation = null; 


}
setInterval(moveContainer, 3000); 
