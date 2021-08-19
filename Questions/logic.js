//using selectors inside the element method
let question = document.querySelectorAll(".question");
question.forEach((q) => {
  let btn = q.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    question.forEach((e) => {
      if (e !== q) {
        e.classList.remove("show-text");
      }
    });
    q.classList.toggle("show-text");
  });
});

//transversing the DOM method

// let btns = document.querySelectorAll(".question-btn");
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text')
//   });
// });
