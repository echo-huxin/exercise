function creatAnimation(options) {
  let duration = options.duration;
  let totalMS = options.totalMS;
  let to = options.to;
  let from = options.from;
  let step = ((to - from) * duration) / totalMS;
  let timerId = null;
  let times = Math.floor(totalMS / duration);
  let curTimes = 0;
  timerId = setInterval(function () {
    from += step;
    curTimes++;
    console.log(from, curTimes, times);
    options.onmove && options.onmove(from);
    if (curTimes === times) {
      clearInterval(timerId);
      from = to;
      options.onmove && options.onmove(from);
      options.onend && options.onend(from);
    }
  }, duration);
}

// creatAnimation({
//   from: 0,
//   to: 120,
//   duration: 15,
//   totalMS: 3000,
//   onmove: function () {},
//   onend: function () {},
// });
