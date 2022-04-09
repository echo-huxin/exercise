(async () => {
  let lyrData = [];
  let lis = [];
  const size = {
    liHeight: 30,
    containerHeight: 420,
  };
  /**
   * 从网络获取歌词数据
   * @returns Promise
   */
  async function getLrc() {
    return await fetch("https://study.duyiedu.com/api/lyrics")
      .then((resp) => resp.json())
      .then((resp) => resp.data);
  }
  init();
  async function init() {
    lyrData = await getLrc();
    lyrData = lyrData
      .split("\n")
      .filter((s) => s)
      .map((str) => {
        const arr = str.split("]");
        const time = arr[0].split(":");
        return {
          word: arr[1],
          time: +time[1] + time[0].replace("[", "") * 60,
        };
      });
    document.querySelector("ul").innerHTML = lyrData
      .map((str) => `<li>${str.word}</li>`)
      .join(" ");
    lis = document.querySelectorAll("li");
    console.log(lyrData);
  }
  const oAudio = document.querySelector("audio");
  oAudio.addEventListener("timeupdate", function () {
    // console.log(this.currentTime);
    setStatus(this.currentTime);
  });
  function setStatus(cutTime) {
    // 微调歌词
    cutTime += 0.5;
    // 时间同步歌词
    let index =
      lyrData.findIndex((lyr) => {
        return lyr.time > cutTime;
      }) - 1;
    if (index < 0) {
      index = 0;
    }
    let preActive = document.querySelector(".active");
    preActive && preActive.classList.remove("active");
    lis[index].classList.add("active");
    // 歌词滚动
    let top =
      index * size.liHeight + size.liHeight / 2 - size.containerHeight / 2;
    top = -top;
    if (top > 0) {
      top = 0;
    }
    document.querySelector("ul").style.transform = `translateY(${top}px)`;
  }
})();
