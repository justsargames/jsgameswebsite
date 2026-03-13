const grid = document.getElementById("gameGrid")

for(let i=1;i<=100;i++){

let size="small"

if(i%9===0) size="big"
else if(i%4===0) size="medium"

let title="Game "+i
let link="play.html"
let img="images/game"+i+".jpg"

if(i===1){
title="Snail Adventure"
link="games/game1/index.html"
img="images/game1.jpg"
}
  if (i === 2) {
    title = "Rocket Runner";
    link = "games/game2/index.html";
    img = "images/game2.jpg";
  }
  
    if (i === 3) {
    title = "Sky Jumper";
    link = "games/game3/index.html";
    img = "images/game3.jpg";
  }

grid.innerHTML+=`

<a href="${link}" class="game ${size}">

<img src="${img}">

<div class="game-title">
${title}
</div>

</a>



`

}