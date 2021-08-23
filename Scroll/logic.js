// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
let navToggle = document.querySelector(".nav-toggle");
let linksContainer = document.querySelector(".links-container");
let links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  let linksContainerHeight = linksContainer.getBoundingClientRect().height;
  let linksHeight = links.getBoundingClientRect().height;

  if (linksContainerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0 + "px";
  }
});
// ********** fixed navbar ************
let navbar = document.getElementById("nav");
let topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  let navbarHeight = navbar.getBoundingClientRect().height;
  let scrollHeight = window.pageYOffset;
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Preventing default
    e.preventDefault();
    //navigate to a specifit spot
    let attribute = e.currentTarget.getAttribute("href").slice(1);
    let section = document.getElementById(attribute);
    // Calculate the heights
    let navbarHeight = navbar.getBoundingClientRect().height;
    let linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let fixedNavbar = navbar.classList.contains("fixed-nav");
    let position = section.offsetTop;
    position = position-navbarHeight;
    if (!fixedNavbar) {
      position -= navbarHeight; 
    }
    if (navbarHeight>82) {
      position += linksContainerHeight;  
    }
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
