let menu1All = document.querySelectorAll("li>h5");
let subMenu = document.querySelector("menu2");
let eleHight = parseInt(getComputedStyle(menu1All[0]).height);
for (var i = 0; i < menu1All.length; i++) {
  (function () {
    menu1All[i].onclick = function () {
      let preOpen = document.querySelector("[status=open]");
      if (preOpen) {
        close(preOpen);
      }
      toggle(this.nextElementSibling);

      //   toggle(preOpen);
    };
  })(i);
}
function open(subMenu) {
  subMenu.setAttribute("status", "playing");
  let to = eleHight * subMenu.children.length;
  creatAnimation({
    from: 0,
    to,
    duration: 20,
    totalMS: 200,
    onmove(away) {
      subMenu.style.height = away + "px";
    },
    onend() {
      subMenu.setAttribute("status", "open");
    },
  });
}
function close(subMenu) {
  subMenu.setAttribute("status", "playing");

  creatAnimation({
    from: eleHight * subMenu.children.length,
    to: 0,
    duration: 20,
    totalMS: 2000,
    onmove(away) {
      subMenu.style.height = away + "px";
    },
    onend() {
      subMenu.setAttribute("status", "close");
    },
  });
}
function toggle(subMenu) {
  let status = subMenu.getAttribute("status");
  if (status !== "playing") {
    if (status === "open") {
      close(subMenu);
    } else {
      open(subMenu);
    }
  }
}
