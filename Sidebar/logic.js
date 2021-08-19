// Getting all the classes
const sideBar = document.querySelector('.sidebar');
const Toggle = document.querySelector('.sidebar-toggle');
const Close =  document.querySelector('.close-btn');
 
// Adding the eventListener

Toggle.addEventListener('click',()=>{
   sideBar.classList.toggle('show-sidebar'); 
});
Close.addEventListener('click',()=>{
   sideBar.classList.remove('show-sidebar');
});