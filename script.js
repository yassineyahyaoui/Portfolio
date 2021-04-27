let text = document.getElementById("text");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let explore = document.getElementById("explore");
let rocks = document.getElementById("rocks");
let forest = document.getElementById("forest");
let water = document.getElementById("water");
let header = document.getElementById("header");
let logo = document.getElementById("logo");
let navbarLinks = document.querySelectorAll(".navbar-link");
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
  console.log(value);
  if (value > 400) {
    explore.style.visibility = "hidden";
    liquid.style.visibility = "hidden";
  }
  if (value < 400){
    explore.style.visibility = "visible";
    liquid.style.visibility = "visible";
  }
  if (value > 1050) {
    header.style.top = value + "px";
    header.style.background = "#094b65";
    navbarLinks.forEach(navbarLink => {
      navbarLink.style.color = "#fff";
    });
    logo.style.color = "#fff";
  }
});

//burger navigation menu

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//wave

let wave1 = document.getElementById("wave1");
let wave2 = document.getElementById("wave2");
let wave3 = document.getElementById("wave3");
let wave4 = document.getElementById("wave4");

document.addEventListener("scroll", () => {
  let value = scrollY;

  wave1.style.backgroundPosition = 400 + value * 4 +"px";
  wave2.style.backgroundPosition = 300 + value * -4 +"px";
  wave3.style.backgroundPosition = 200 + value * 2 +"px";
  wave4.style.backgroundPosition = 100 + value * -2 +"px";
})