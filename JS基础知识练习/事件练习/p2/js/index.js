// 当鼠标移动到元素上时停止切换，移出后开始切换
let img = document.querySelector("img");
let timerId = null;

start();

img.onmouseover = function () {
  //   console.log(123);
  stop();
};
img.onmouseout = function () {
  start();
};
function start() {
  let count = 1;
  let move = 10;
  if (timerId) {
    return;
  }
  timerId = setInterval(() => {
    count = (count % 4) + 1;
    img.src = `./img/${count}.jpeg`;
    move += 10;
    img.style.left = move + "px";
  }, 100);
}

function stop() {
  clearInterval(timerId);
  timerId = null;
}
