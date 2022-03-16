(function () {
  let presents = $$(".present");
  let startBtn = $(".btn");
  let mask = $(".mask");
  let alertBtn = $(".alert-btn");
  let oCount = $("#count");
  let lotteryCount = 2;

  init();
  function init() {
    initdata();
    initEvent();
  }
  function $(select) {
    return document.querySelector(select);
  }
  function $$(select) {
    return document.querySelectorAll(select);
  }
  function initEvent() {
    startBtn.addEventListener("click", RunningAnimation());
    mask.addEventListener("click", switchAlert);
  }

  function initdata() {
    oCount.innerText = lotteryCount;
    let data = [
      {
        imgSrc: "./img/prize_1.png",
        presentName: "iPhoneX",
        id: 1,
      },

      {
        imgSrc: "./img/prize_2.png",
        presentName: "现金50元",
        id: 2,
      },
      {
        imgSrc: "./img/prize_3.png",
        presentName: "HUWEI",
        id: 3,
      },
      {
        imgSrc: "./img/prize_4.png",
        presentName: "现金10元",
        id: 4,
      },
      {
        imgSrc: "./img/prize_5.png",
        presentName: "谢谢参与",
        id: 5,
      },
      {
        imgSrc: "./img/prize_6.png",
        presentName: "手机优惠卷",
        id: 6,
      },
      {
        imgSrc: "./img/prize_7.png",
        presentName: "电脑优惠卷",
        id: 7,
      },
      {
        imgSrc: "./img/prize_8.png",
        presentName: "U盘",
        id: 8,
      },
    ];
    data.forEach((el, i) => {
      presents[i].children[0].src = el.imgSrc;
      presents[i].children[1].innerText = el.presentName;
    });
  }
  function getWinNumber() {
    return parseInt(Math.random() * 7 + 1);
  }
  function RunningAnimation() {
    let timerId = null;
    return function () {
      if (!timerId) {
        let count = 0;
        let winNumber = getWinNumber();

        timerId = setInterval(function () {
          let curActive = $(".active");
          let index = [].indexOf.call(presents, curActive);
          if (index === presents.length - 1) {
            presents[0].classList.add("active");
          } else {
            index++;
            presents[index].classList.add("active");
          }
          curActive.classList.remove("active");
          curActive = $(".active");
          if (presents[winNumber] === curActive) {
            count++;
            if (count === 3) {
              clearInterval(timerId);
              oCount.innerText = --lotteryCount;
              timerId = null;
              mask.style.display = "block";
              if (lotteryCount <= 0) {
                alertBtn.innerText = "确认";
                timerId = "1";
              }
            }
          }
        }, 100);
      }
    };
  }
  function switchAlert(e) {
    let isExitClose = [].includes.call(e.target.classList, "close");
    if (isExitClose) {
      mask.style.display = "none";
    } else if (e.target.localName === "button") {
      mask.style.display = "none";
      startBtn.click();
    }
  }
})();
