// 每隔一段时间，切换英雄的图片，让英雄动起来

let img = document.querySelector("img");
let count = 1;
let move = 10;
setInterval(() => {
  count = (count % 4) + 1;
  img.src = `./img/${count}.png`;
  move += 10;
  img.style.left = move + "px";
}, 100);
