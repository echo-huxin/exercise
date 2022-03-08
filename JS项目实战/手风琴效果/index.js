let menu1All = document.querySelectorAll("li>h5");
for (var i = 0; i < menu1All.length; i++) {
  (function () {
    menu1All[i].onclick = open();
  })(i);
}
function open() {
  let menu1 = document.querySelector(".menu1");
  let isOpen = false; //判定动画是否在执行中标识符
  let from = 0;
  let to = 200;
  return function () {
    // 点击一级菜单将二级菜单展开
    // console.log(e.targer);
    let checkedMenu1 = this.nextElementSibling;
    // 解决点击多次导致动画多次执行
    if (!isOpen) {
      creatAnimation({
        from: from,
        to: to,
        duration: 17,
        totalMS: 300,
        onmove: function (v) {
          isOpen = true;
          checkedMenu1.style.height = v + "px";
        },
        onend: function (v) {
          isOpen = false;
          let temp = from;
          from = to;
          to = temp;
          console.log(from, to);
        },
      });
    }

    // console.log(checkedMenu1.style);
  };
}
