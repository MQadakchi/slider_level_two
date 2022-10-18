const slides = document.querySelectorAll(".slides");
const next = document.querySelector(".controls .next-btn");
const prev = document.querySelector(".controls .prev-btn");
const slidesLength = slides.length;
let index = 0;

const showSlide = (direction) => {
  if (direction === "next") {
    index++;
    if (index > slidesLength - 1) index = 0;
  } else {
    if (index === 0) index = slidesLength - 1;
    else index--;
  }

  slides.forEach((slide) => slide.classList.remove("active"));

  slides[index].classList.add("active");
};

next.addEventListener("click", () => showSlide("next"));

prev.addEventListener("click", () => showSlide("prev"));
