// 让便签可被拖动，但不能超出视口
let note = document.querySelector(".note");
let move = function (e, x, y) {
  let moveX = e.clientX - x;
  let moveY = e.clientY - y;
  note.style.left = PreX + moveX + "px";
  note.style.top = PreY + moveY + "px";
};
note.onmousedown = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  let reac = note.getBoundingClientRect();
  let PreX = reac.left;
  let PreY = reac.top;
  let cw = document.documentElement.clientWidth;
  let ch = document.documentElement.clientHeight;
  let ew = note.clientWidth;
  let eh = note.clientHeight;
  let MaxMoveX = cw - ew;
  let MaxMoveY = ch - eh;
  console.log(MaxMoveX, MaxMoveY);
  let move = function (e) {
    let mouseX = e.clientX - x;
    let mouseY = e.clientY - y;
    let moveX = PreX + mouseX;
    let moveY = PreY + mouseY;
    if (moveX < 0) {
      moveX = 0;
    } else if (moveY < 0) {
      moveY = 0;
    } else if (moveX > MaxMoveX) {
      moveX = MaxMoveX;
    } else if (moveY > MaxMoveY) {
      moveY = MaxMoveY;
    }
    note.style.left = moveX + "px";
    note.style.top = moveY + "px";
  };
  note.onmouseup = function () {
    window.onmousemove = null;
  };
  window.onmousemove = move;
};
