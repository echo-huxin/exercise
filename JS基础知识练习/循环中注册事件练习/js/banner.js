//  (function () {
// 完成横幅区的图片切换
// 横幅区数据

var datas = [
  {
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/15c05b32cf948b594477dfc3eb69fb69.jpg?w=2452&h=920",
    link: "https://www.mi.com/mi11le-5g-ne",
  },
  {
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a532e33470d046b3f044d5ea49fc5e9e.png?thumb=1&w=2452&h=920&f=webp&q=90",
    link: "https://www.mi.com/xiaomipad5",
  },
  {
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
    link: "https://www.mi.com/a/h/22033.html?sign=b60a6ca9167bce2d1ed8ee319cf83c75",
  },
  {
    img: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/af7be8f65065f405f57f46a02731f78d.jpg?thumb=1&w=2452&h=920&f=webp&q=90",
    link: "https://www.mi.com/a/h/22812.html?sign=aab397a7ecf2ae4c1765e9d11fdccca6",
  },
];
let timerId = null;
init();
let index = 0;
let dots = document.querySelectorAll(".banner-dots span");

$(".banner-pointer-left").onclick = slideLeft;
$(".banner-pointer-right").onclick = slideRight;
dots.forEach((el, i) => {
  el.onclick = function () {
    let selected = $(".banner-dots-selected");
    selected && (selected.className = "fl");
    this.className = "banner-dots-selected fl";
    change(i);
  };
});
function init() {
  let dots = $(".banner-dots");
  datas.forEach((el, i) => {
    if (i === 0) {
      dots.innerHTML += "<span class='banner-dots-selected fl'></span>";
      return;
    }
    dots.innerHTML += "<span class='fl'></span>";
  });
  autoPlay();
}
function $(select) {
  return document.querySelector(select);
}
function slideLeft() {
  index--;
  if (index < 0) {
    index = datas.length - 1;
  }
  change(index);
  dots[index].onclick();
}
function slideRight() {
  index++;
  if (index > datas.length - 1) {
    index = 0;
  }
  change(index);
  dots[index].onclick();
}

function change(i) {
  let img = $(".banner-cover img");
  let a = $(".banner-cover");
  a.href = datas[i].link;
  img.src = datas[i].img;
}
function autoPlay() {
  // if (!timerId) {
  //   timerId = null;
  // }
  timerId = setInterval(() => {
    slideRight();
  }, 1500);
}

let banner = $(".banner");

banner.onmouseenter = function () {
  console.log(123);
  clearInterval(timerId);
};
banner.onmouseleave = function () {
  autoPlay();
};
