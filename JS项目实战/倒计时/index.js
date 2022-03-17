let secondGw = $(".second-gw>ul");
let secondSw = $(".second-sw>ul");
let minuteGw = $(".minute-gw>ul");
let minuteSw = $(".minute-sw>ul");
let hourGw = $(".hour-gw>ul");
let hourSw = $(".hour-sw>ul");
let secondGwIndex = 0;
let timeBoardHeihgt = -124;
init();
function init() {
  playCountDown();
  initEvent();
}
function initEvent() {
  secondGw.addEventListener("transitionend", restMove(secondGw));
  secondSw.addEventListener("transitionend", restMove(secondSw));
  minuteGw.addEventListener("transitionend", restMove(minuteGw));
  minuteSw.addEventListener("transitionend", restMove(minuteSw));
  hourGw.addEventListener("transitionend", restMove(hourGw));
  hourSw.addEventListener("transitionend", restMove(hourSw));
}
function $(select) {
  return document.querySelector(select);
}
function $$(select) {
  return document.querySelectorAll(select);
}
function playCountDown() {
  let timerId = null;
  let secondGwMove = move(secondGw);
  let secondSwMove = move(secondSw);
  let minuteGwMove = move(minuteGw);
  let minuteSwMove = move(minuteSw);
  move(hourGw);
  let hourSwMove = move(hourSw);
  setInterval(function () {
    if (secondGwMove()) {
      if (secondSwMove()) {
        if (minuteGwMove()) {
          if (minuteSwMove()) {
            if (hourGwMove()) {
              if (hourSwMove()) {
              }
            }
          }
        }
      }
    }
  });
}
function move(obj, index = 0) {
  return function () {
    index++;
    obj.style.top = timeBoardHeihgt * index + "px";
    if (index === obj.children.length - 1) {
      index = 0;
      return true;
    }
  };
}
function restMove(obj, index = 0) {
  return function () {
    index++;
    if (index === obj.children.length - 1) {
      obj.style.transition = "none";
      index = 0;
      obj.style.top = timeBoardHeihgt * index + "px";
    }
  };
}
