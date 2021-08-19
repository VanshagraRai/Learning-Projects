const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// e.g. of a hex = #f15025

btn.addEventListener('click',()=>{
let  hexcolor = '#';

for (let i = 0; i <6; i++) {//loop to select random values from the array
    let a = Math.floor(Math.random()*hex.length);
    hexcolor += hex[a];
}

color.textContent = hexcolor;
document.body.style.backgroundColor = hexcolor;
});