// selecting the various classes 
let modaloverlay = document.querySelector('.modal-overlay');
let Open = document.querySelector('.modal-btn');
let Close = document.querySelector('.close-btn');

// setting the eventlisteners

Open.addEventListener('click',()=>{
modaloverlay.classList.add('open-modal');
});
Close.addEventListener('click',()=>{
modaloverlay.classList.remove('open-modal');
});
