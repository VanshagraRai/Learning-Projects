const colors = ['green','brown','red','rgba(133,122,200)','#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',()=>{
    const random = randomnumber();//Random function calling
    console.log(random);
    
    document.body.style.backgroundColor = colors[random];
    color.textContent=colors[random];
});
// Generate a random integer number between 0-4 since arrays index no. is used  
function randomnumber() {
    return Math.floor(Math.random()*colors.length);
}