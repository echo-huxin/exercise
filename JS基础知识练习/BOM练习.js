let timerId;
function start() {
  if (timerId) {
    return;
  }
  timerId = setInterval(() => {
    if (timerId) {
      console.log(123);
      return;
    }
    console.log("计时开始");
  }, 1000);
}

function stop() {
  clearInterval(timerId);
  timerId = null;
}

let a = /sed+/i;
Math.ceil;
