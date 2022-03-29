function $(selector) {
  return document.querySelector(selector);
}
function $$(selector) {
  return document.querySelectorAll(selector);
}
let move;
let matchBoardX;
let matchBoardY;
initCheckImg();

function initCheckImg() {
  let randomImg = `./img/t${getRandom(5, 1)}.png`;
  $(".tImg").src = randomImg;
  matchBoardX = getRandom(60, $(".tImg").width - $(".matchBox").offsetWidth);
  matchBoardY = getRandom(60, $(".tImg").height - $(".matchBox").offsetHeight);
  $(".matchBox").style.left = matchBoardX + "px";
  $(".matchBox").style.top = matchBoardY + "px";
  $(".matchImg").style.opacity = 0;
  $(".matchImg").style.background = `url(${randomImg}) -${
    matchBoardX + 25
  }px -${matchBoardY}px`;
  $(".dot").addEventListener("mousedown", handleClick);
  $(".dot").style.left = 0 + "px";
}
function getRandom(max, min) {
  return parseInt(Math.random() * (max + 1 - min) + min);
}
function handleClick(e) {
  let clientX = e.clientX;
  $(".matchImg").style.transition = "none";
  $(".dot").style.transition = "none";
  $(".matchImg").style.top = matchBoardY + "px";
  $(".matchImg").style.left = 0;
  $(".matchImg").style.opacity = 1;
  $(".checkBox h3").innerText = "拖动图片完成验证";
  move = function (e) {
    let away = e.clientX - clientX;
    if (away < -2) {
      away = -2;
    } else if (away > $(".slideBar").offsetWidth - $(".dot").offsetWidth + 2) {
      away = $(".slideBar").offsetWidth - $(".dot").offsetWidth + 2;
    }
    $(".matchImg").style.left = away + "px";
    $(".dot").style.left = away + "px";
  };
  $(".slideBar").addEventListener("mousemove", move);
}
$(".tips").addEventListener("click", function () {
  initCheckImg();
});
$(".dot").addEventListener("mousedown", handleClick);
$("html").addEventListener("mouseup", function (e) {
  $(".slideBar").removeEventListener("mousemove", move);
  if (Math.abs(parseInt($(".dot").style.left) - matchBoardX) < 2) {
    $(".checkBox h3").innerText = "验证成功";
    $(".checkBox h3").style.color = "green";
    $(".dot").removeEventListener("mousedown", handleClick);
  } else {
    $(".checkBox h3").innerText = "验证失败";
    $(".checkBox h3").style.color = "red";
    $(".matchImg").style.transition = "all 0.5s";
    $(".dot").style.transition = "all 0.5s";
    $(".matchImg").style.left = "0";
    $(".dot").style.left = 0 + "px";
  }
});
