let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let explore = document.getElementById("explore");
let rocks = document.getElementById("rocks");
let forest = document.getElementById("forest");
let water = document.getElementById("water");
let liquid = document.getElementById("liquid");

document.addEventListener("scroll", () => {
  let value = scrollY;
  console.log(value);

  text.style.top = 50 + value * -0.5 + "%";
  bird1.style.top = value * -1.5 + "px";
  bird1.style.left = value * 2 + "px";
  bird2.style.top = value * -1.5 + "px";
  bird2.style.left = value * -5 + "px";
  explore.style.marginTop = value * 1.5 + "px";
  rocks.style.top = value * -0.12 + "px";
  forest.style.top = value * 0.25 + "px";
  header.style.top = value * 0.5 + "px";

  if (value > 400) {
    explore.style.visibility = "hidden";
    liquid.style.visibility = "hidden";
  } else {
    explore.style.visibility = "visible";
    liquid.style.visibility = "visible";
  }
});

window.onscroll = function() {myFunction()};

let header = document.getElementById("header");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
  if (window.pageYOffset < sticky) {
    header.classList.add("sticky");
  }
}

//toggle

const burger = document.getElementById("burger");
const navUl = document.getElementById("nav-ul");

burger.addEventListener("click", () => {
  navUl.classList.toggle("show");
})

//wave

let wave1 = document.getElementById("wave1");
let wave2 = document.getElementById("wave2");
let wave3 = document.getElementById("wave3");
let wave4 = document.getElementById("wave4");

document.addEventListener("scroll", () => {
  let value = scrollY;

  wave1.style.backgroundPosition = 400 + value * 4 + "px";
  wave2.style.backgroundPosition = 300 + value * -4 + "px";
  wave3.style.backgroundPosition = 200 + value * 2 + "px";
  wave4.style.backgroundPosition = 100 + value * -2 + "px";
});

//services

VanillaTilt.init(document.querySelectorAll(".services-card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1
});

//complements

VanillaTilt.init(document.querySelectorAll(".complements-card-container"), {
  max: 25,
  speed: 400
});

//testimonial

let swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
  },
  loop: true,
});