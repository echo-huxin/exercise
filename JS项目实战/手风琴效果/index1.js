let menu1All = document.querySelectorAll("li>h5");
let subMenu = document.querySelector("menu2");
let eleHight = getComputedStyle(document.menu1All[0]).height;
for (var i = 0; i < menu1All.length; i++) {
  (function () {
    menu1All[i].onclick = function () {};
  })(i);
}
function open(subMenu) {
  let to = eleHight * subMenu.children.length;

  creatAnimation({
    from: 0,
    to,
    onmove() {},
    onend() {},
  });
}
function close() {}
function toggle() {}
