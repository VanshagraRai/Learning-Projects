// local reviews data
const reviews = [
  {
    id: 0,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 1,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// select buttons
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

// initial value
let i = 0;
let item = 0;
//load intial item
window.addEventListener("DOMContentLoaded", () => {
    item = reviews[i];
  display();
});
//for random button
random.addEventListener("click", () => {
  i = randomNum();
  item = reviews[i];
  display();
});
//for previous button
prev.addEventListener("click", () => {
  if (i == 0) {
    i = reviews.length - 1;
    item = reviews[i];
  } else {
    item = reviews[--i];
  }
  display();
});
//for next button
next.addEventListener("click", () => {
  if (i == reviews.length - 1) {
    i = 0;
    item = reviews[i];
  } else {
    item = reviews[++i];
  }
  display();
});

function randomNum() {
  return Math.floor(Math.random() * reviews.length);
}
function display() {
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  info.textContent = item.text;
}
