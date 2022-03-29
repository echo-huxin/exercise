function $(select) {
  return document.querySelector(select);
}
function $$(select) {
  return document.querySelectorAll(seelct);
}
let correctNum;
let isFirst = true;
initMenuList();
function initMenuList() {
  $(".right-box").innerText = "";
  correctNum = parseInt(getRandom(0, 15));
  let template = document.createDocumentFragment();
  let colBox;
  for (let index = 0; index <= 99; index++) {
    if (index % 20 === 0) {
      colBox = document.createElement("div");
      colBox.className = "colBox";
      template.appendChild(colBox);
    }
    let oDiv = document.createElement("div");
    let oLabel = document.createElement("label");
    let oImg = document.createElement("img");
    let randomNum = parseInt(getRandom(0, 15));
    oDiv.className = "item";
    oLabel.innerText = index;
    if (index % 9 !== 0) {
      oImg.src = `./images/values/${randomNum}.png`;
    } else {
      oImg.src = `./images/values/${correctNum}.png `;
    }
    oDiv.appendChild(oLabel);
    oDiv.appendChild(oImg);
    colBox.appendChild(oDiv);
  }
  console.dir(template);
  $(".right-box").appendChild(template);
}
function rotateAnimation() {
  let step = 0;
  let timerId = 0;
  let circle = 3;
  let speed = 10;
  let move = 10;
  timerId = setInterval(function () {
    move = speed - (step * 10) / (360 * circle);
    if (step >= 360 * circle) {
      clearInterval(timerId);
      $(".turnTable").style.transform = `rotate(0deg)`;
      $(".turnTable img").src = `./images/values/${correctNum}.png`;
      return;
    }
    step += move < 1 ? 1 : move;
    $(".turnTable").style.transform = `rotate(${step}deg)`;
  });
}
function getRandom(max, min) {
  return Math.random() * (max - min) + min;
}
$(".turnTable").addEventListener("click", function () {
  if (isFirst) {
    isFirst = false;
    rotateAnimation();
  } else {
    if (confirm("是否在玩一次？")) {
      isFirst = true;
      initMenuList();
      $(".turnTable img").src = `./images/round.png`;
    }
  }
});
