var doms = {
  video: document.querySelector("video"),
  progress: document.querySelector("#progress"),
  rate: document.querySelector("#rate"),
  volume: document.querySelector("#volume"),
};
let btnPlay = document.querySelector("#btnPlay");
let current = doms.progress.querySelector("span");
let total = doms.progress.querySelector("span:last-child");
let range = doms.progress.querySelector("#range");
main();
function main() {
  addEvent();
}

function addEvent() {
  doms.video.addEventListener("loadeddata", init);
  btnPlay.addEventListener("click", togglePlay);
  doms.video.addEventListener("timeupdate", handleProgress);
  range.addEventListener("input", setStartPlayTime);
  doms.rate.addEventListener("click", function (e) {
    doms.video.playbackRate = e.target.dataset.rate;
    setRate();
  });
  doms.volume.querySelector("input").addEventListener("input", setvolume);
  save.addEventListener("click", saveSetting);
  load.addEventListener("click", loadingSetting);
}
function init() {
  let controls = document.querySelectorAll(".controls");
  controls.forEach((element) => {
    element.style.display = "block";
  });
  setPlayTime();
  setRate();
  setvolume();
}

function togglePlay() {
  let isplay = this.dataset.isplay === "false" ? false : true;
  if (!isplay) {
    doms.video.play();
  } else {
    doms.video.pause();
  }
  this.dataset.isplay = !isplay;
}
function setPlayTime() {
  let duration = formatDate(doms.video.duration);
  let cutTime = formatDate(doms.video.currentTime);
  current.innerText = `${_format(cutTime.hour)}:${_format(
    cutTime.miute
  )}:${_format(cutTime.second)}`;
  total.innerText = `${_format(duration.hour)}:${_format(
    duration.miute
  )}:${_format(duration.second)}`;
}
function formatDate(sec) {
  let date = {
    hour: "",
    miute: "",
    second: "",
  };
  date.hour = Math.floor(sec / 3600);
  sec -= date.hour * 3600;
  date.miute = Math.floor(sec / 60);
  sec -= date.miute * 60;
  date.second = Math.floor(sec);
  return date;
}
function _format(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
function handleProgress() {
  let duration = doms.video.duration;
  let cutTime = doms.video.currentTime;
  let temp = Math.floor((cutTime / duration) * 100);
  range.value = temp;
  setPlayTime();
}
function setStartPlayTime() {
  doms.video.currentTime = (range.value / range.max) * doms.video.duration;
}
function setRate() {
  let btns = doms.rate.querySelectorAll("button");
  btns.forEach((el) => {
    if (+el.dataset.rate === doms.video.playbackRate) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}
// function  set
function setvolume() {
  let range = doms.volume.querySelector("input");
  let span = doms.volume.querySelector("span");
  doms.video.volume = range.value / range.max;
  span.innerText = Math.floor((range.value / range.max) * 100) + "%";
}

function saveSetting() {
  let obj = {
    progress: doms.video.currentTime,
    rate: doms.video.playbackRate,
    volume: doms.video.volume,
  };
  obj = JSON.stringify(obj);
  sessionStorage.setItem("oVideo", obj);
}

function loadingSetting() {
  let obj = sessionStorage.getItem("oVideo");
  obj = JSON.parse(obj);
  doms.video.currentTime = obj.progress;
  doms.video.playbackRate = obj.rate;
  doms.video.volume = obj.volume;
  let range = doms.volume.querySelector("input");
  range.value = Math.floor(doms.video.volume * 100);
  init();
}
// 获取视频
