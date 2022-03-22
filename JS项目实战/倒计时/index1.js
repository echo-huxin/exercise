init();
function init() {
  initEvent();
}
function initEvent() {}
function $(select) {
  return document.querySelector(select);
}
function $$(select) {
  return document.querySelectorAll(select);
}
function changeInteger(node, delay) {
  console.log(node);
  setInterval(function () {
    node.style.transition = "all 0.5s";
    node.style.top = "-124px";
  }, delay);
  node.addEventListener("transitionend", function () {
    node.style.transition = "node";
    node.style.top = "0px";
    node.appendChild(node.children[0]);
  });
}
changeInteger($$(".time-item")[5].children[0], 1000 * 1);
changeInteger($$(".time-item")[4].children[0], 1000 * 10);
changeInteger($$(".time-item")[3].children[0], 1000 * 60);
