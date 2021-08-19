// THE BASIC GLITCH IS ANIMATION DURATION INCREASING IN LINE 62 TO 79
// MORE ENHANCEMENT IN CODE NEEDED
let score = 0;
let check = true;
let stop = true;
 const audio = new Audio('music.mp3');
 const audiogo = new Audio('gameover.mp3');
 setTimeout(() => {
   audio.play();
 }, 1000);
// Code for key pressing
document.onkeydown = function (e) {
  console.log("The key-id of pressed key is ", e.keyCode);
  if (e.keyCode == 38 && stop) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  } else if (e.keyCode == 39 && stop) {
    dino = document.querySelector(".dino");
    dright = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dright + 100 + "px";
  } else if (e.keyCode == 37 && stop) {
    dino = document.querySelector(".dino");
    dleft = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dleft - 100 + "px";
  }
};

//Code for Gameover and ScoreCardUpdate
setInterval(() => {
  dino = document.querySelector(".dino");
  dragon = document.querySelector(".dragon");

  dX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dY = parseInt(window.getComputedStyle(dino, null).getPropertyValue("bottom"));

  drX = parseInt(
    window.getComputedStyle(dragon, null).getPropertyValue("left")
  );

  drY = parseInt(
    window.getComputedStyle(dragon, null).getPropertyValue("bottom")
  );
  offsetX = Math.abs(dX - drX);
  offsetY = Math.abs(dY - drY);
  
  if (offsetX < 300 && offsetY < 53) {
    dino.classList.remove("animateDino");
    dragon.classList.remove("animateObs");
    document.querySelector(".gameover").innerHTML = "Game Over";
    stop = false;
    audiogo.play();
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
    }, 1000);
  } else if (offsetX < 370 && check) {
    score = score + 1;
    scoreupdater(score);
    check = false;
    setTimeout(() => {
      check = true;
    }, 1000);
  }
  setTimeout(() => {
    let animdur = parseFloat(
      window
        .getComputedStyle(dragon, null)
        .getPropertyValue("animation-Duration")
    );
    let newanimdur = animdur - 0.01;
    dragon.style.animationDuration = newanimdur + "s";
  }, 3000);//Gotta correct the animation glitch
}, 700);
function scoreupdater(score) {
  document.getElementById("scorecard").innerHTML = "Your score is :" + score;
}
