function animation(options) {
  let to = options.to;
  let from = options.from;
  let during = options.during;
  let totalTime = options.totalTime;
  let step = ((to - from) * during) / totalTime;
  let timerId = null;
  timerId = setInterval(function () {
    from += step;
    if (Math.abs(from - to) <= Math.abs(step)) {
      from = to;
      clearInterval(timerId);
      console.log(from);
      options.change && options.change(from);
      options.end && options.end(from);
      return;
    }
    options.change && options.change(from);
  }, during);
}
function creatAnimation(options) {
  let duration = options.duration;
  let totalMS = options.totalMS;
  let to = options.to;
  let from = options.from;
  let step = ((to - from) * duration) / totalMS;
  let timerId = null;
  let times = Math.floor(totalMS / duration);
  let curTimes = 0;
  console.log(to, from, duration, totalMS);
  timerId = setInterval(function () {
    from += step;
    curTimes++;
    // console.log(from, curTimes, times);
    options.onmove && options.onmove(from);
    if (curTimes === times) {
      clearInterval(timerId);
      from = to;
      options.onmove && options.onmove(from);
      options.onend && options.onend(from);
    }
  }, duration);
}
