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
    linksContainer.style.height =`${linksHeight}px`;
  } else {
    linksContainer.style.height = 0 + "px";
  }
});
// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
