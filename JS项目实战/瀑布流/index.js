// (function (w) {
window.onload = function () {
  var pbl = {
    imgAll: [],
    boxWidth: parseInt(getComputedStyle($(".box")).width),
    gap: 0,
    imgWidth: 220,
    rowMaxShowImgNumber: 0,
  };
  init();
  function $(select) {
    return document.querySelector(select);
  }
  function $$(select) {
    return document.querySelectorAll(select);
  }
  function init() {
    initImgData(show);
    addEvent();
  }
  function addEvent() {
    window.onresize = debounce(show, 1000);
  }
  function show() {
    computerGapWidth();
    let arr = new Array(pbl.rowMaxShowImgNumber).fill(0);
    let top = 0;
    let minIndex = 0;
    for (let i = 0; i < pbl.imgAll.length; i++) {
      minIndex = getMinIndex(arr);
      top = arr[minIndex];
      pbl.imgAll[i].style.top = top + "px";
      arr[minIndex] = top + pbl.imgAll[i].height;
      pbl.imgAll[i].style.left =
        (minIndex + 1) * pbl.gap + minIndex * pbl.imgWidth + "px";
      // $(".box").appendChild(pbl.imgAll[i]);
    }
    $(".box").style.height = Math.max.apply(null, arr) + "px";
  }
  function initImgData(fn) {
    let count = 0;
    for (let i = 0; i < 40; i++) {
      let oImg = document.createElement("img");
      oImg.src = "./img/" + i + ".jpg";
      console.dir(oImg.offsetHeight);
      pbl.imgAll.push(oImg);
      oImg.onload = function (e) {
        count++;
        if (i === 0) console.log("第一张图片height", oImg.height);
        setTimeout(function () {
          console.log("offsetWidth", oImg.offsetWidth);
        });
        if (count === 40) {
          fn();
        }
      };
    }
  }
  function computerGapWidth() {
    pbl.boxWidth = parseInt(getComputedStyle($(".box")).width);
    pbl.rowMaxShowImgNumber = Math.floor(pbl.boxWidth / pbl.imgWidth);
    console.log(pbl.rowMaxShowImgNumber);
    pbl.gap =
      (pbl.boxWidth - pbl.rowMaxShowImgNumber * pbl.imgWidth) /
      (pbl.rowMaxShowImgNumber + 1);
  }

  function getMinIndex(arr) {
    arr = arr || [];
    let minIndex = 0;
    let minNum = arr[minIndex];
    for (let index = 1; index < arr.length; index++) {
      if (minNum > arr[index]) {
        minNum = arr[index];
        minIndex = index;
      }
    }
    return minIndex;
  }
  function debounce(fn, delay = 500) {
    let timeId = false;
    return function () {
      if (timeId) {
        return;
      }
      timeId = setTimeout(function () {
        fn();
        timeId = false;
      }, delay);
    };
  }
};
// })(this);
