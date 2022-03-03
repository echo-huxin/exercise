// 当窗口尺寸变化后，调用layout函数
function debounce(fn, sleep) {
  let timerId = null;
  return function () {
    let arg = Array.prototype.slice.call(arguments);
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(null, arg);
    }, sleep);
  };
}
window.onresize = debounce(layout, 200);
