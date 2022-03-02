// 输入待办事项，按下回车后，添加事项到列表
function $(select) {
  return document.querySelector(select);
}
function $c(el) {
  return document.createElement(el);
}
function add(text) {
  let li = $c("li");
  let span = $c("span");
  let ul = $(".todo-list");
  li.appendChild(span);
  span.innerText = text;
  li.innerHTML += "<button>删除</button>";
  ul.appendChild(li);
}
function del() {
  let deleteBtn = document.querySelectorAll("button");
  deleteBtn.forEach((el, i) => {
    el.onclick = function () {
      this.parentNode.remove();
    };
  });
}

// function addEvent() {
//   schedule.push(module());
// }
// let schedule = [];

window.onkeyup = function (e) {
  let oInput = $(".txt");
  if (e.keyCode === 13) {
    if (!oInput.value.trim()) {
      alert("输入内容不能为空!");
      return;
    }
    add(oInput.value);
    oInput.value = "";
  }
};
// 点击删除后，删除对应的待办事项

del();
