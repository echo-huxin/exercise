// 让小球向右下运动，遇到边缘后反弹

let div = document.querySelector(".ball");

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

function bgChange() {
  let r = getRandom(200, 0);
  let g = getRandom(200, 0);
  let b = getRandom(200, 0);
  return `rgba(${r},${g},${b})`;
}

let timerId = null;
function sport() {
  let cw = document.documentElement.clientWidth;
  let ch = document.documentElement.clientHeight;
  let ew = div.clientWidth;
  let eh = div.clientHeight;
  let MaxMoveX = cw - ew;
  let MaxMoveY = ch - eh;
  let moveX = 20;
  let moveY = 20;
  timerId = setInterval(function () {
    let rect = div.getBoundingClientRect();
    let left = rect.left + moveX;
    let top = rect.top + moveY;
    if (left < 0) {
      left = 0;
      moveX = -moveX;
      div.style.background = bgChange();
    } else if (top < 0) {
      top = 0;
      moveY = -moveY;
      div.style.background = bgChange();
    } else if (left > MaxMoveX) {
      left = MaxMoveX;
      moveX = -moveX;
      div.style.background = bgChange();
    } else if (top > MaxMoveY) {
      top = MaxMoveY;
      moveY = -moveY;
      div.style.background = bgChange();
    }
    div.style.left = left + "px";
    div.style.top = top + "px";
  }, 100);
}

div.onclick = sport;
