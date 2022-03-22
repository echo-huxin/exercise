function $(select) {
  return document.querySelector(select);
}
function $$(select) {
  return document.querySelectorAll(select);
}
let curIndex = 0;
let carouselList = $(".carousel-list");
let indicator = $(".indicator");
let imgWidth = 500;
let arrowRight = $(".arrow-right ");
let arrowLeft = $(".arrow-left");
let single = false;
init();
function init() {
  for (let i = 1; i < 6; i++) {
    carouselList.innerHTML += `<img class="carousel-item" src="./img/Wallpaper${i}.jpg" />`;
    if (i == 1) {
      indicator.innerHTML += ` <li class="indicator-item active "  data-value =${
        i - 1
      }></li>`;
      continue;
    }
    indicator.innerHTML += ` <li class="indicator-item" data-value=${
      i - 1
    }></li>`;
  }
  let cloneImg = carouselList.children[0].cloneNode(true);
  carouselList.appendChild(cloneImg);
  initEvent();
  // aoutoPlay();
}
function initEvent() {
  arrowRight.addEventListener("click", next);
  arrowLeft.addEventListener("click", prev);
  indicator.addEventListener("click", clickJump);
}
function moveTo(newIndex) {
  if (single) {
    return;
  }
  $(".active").classList.remove("active");
  console.log(parseFloat(carouselList.style.marginLeft));
  animation({
    from: parseFloat(carouselList.style.marginLeft) || 0,
    to: -newIndex * imgWidth,
    during: 10,
    totalTime: 300,
    change: function (fr) {
      console.log(fr);
      carouselList.style.marginLeft = fr + "px";
    },
    end: function (fr) {
      single = false;
    },
  });
  indicator.children[curIndex % 5].classList.add("active");
}
function next() {
  maxLimit();
  curIndex++;
  moveTo(curIndex, -1);
}
function prev() {
  minLimit();
  curIndex--;
  moveTo(curIndex, 1);
}
function clickJump(e) {
  if (e.target.localName === "li") {
    let dir = e.target.dataset.value > curIndex ? -1 : 1;
    curIndex = e.target.dataset.value;
    moveTo(curIndex, dir);
  }
}
function minLimit() {
  if (curIndex === 0) {
    curIndex = 5;
    carouselList.style.marginLeft = -curIndex * imgWidth + "px";
    indicator.children[0].classList.add("active");
  }
}
function maxLimit() {
  if (curIndex === 5) {
    curIndex = 0;
    carouselList.style.marginLeft = 0 + "px";
  }
}
// function aoutoPlay() {
//   let timerId = null;
//   timerId = setInterval(function () {
//     next();
//   }, 4000);
// }
