(function () {
  let imgAll = document.querySelectorAll(".store-select-list a img");
  let selectImg = document.querySelector(".store-selected-img ");
  let mask = document.querySelector(".mask");
  let maskHeihgt = parseInt(getComputedStyle(mask).height);
  let maskWidth = parseInt(getComputedStyle(mask).width);
  let selectImgHeight = parseInt(getComputedStyle(selectImg).height);
  let selectImgWidth = parseInt(getComputedStyle(selectImg).width);
  let bgImg = document.querySelector(".bg-img>img");
  init();
  function init() {
    initEvent();
  }
  function initEvent() {
    imgAll.forEach((ele) => {
      ele.addEventListener("click", changeSelecedImg);
      selectImg.addEventListener("mousemove", teacherMeans);
      // mask.addEventListener("mouseleave", handleMouseLeave);
      // mask.addEventListener("mousemove", moveMask);
    });
  }
  function changeSelecedImg() {
    let activeEle = document.querySelector(".active");
    activeEle.className = " ";
    this.className = "active";
    let bigImgsrc = this.src.replace(/_1/, "_2");
    selectImg.src = bigImgsrc;
  }

  function teacherMeans(e) {
    let left = e.clientX - store.offsetLeft - maskWidth / 2;
    let top = e.clientY - store.offsetTop - maskHeihgt / 2;
    console.log(left, top, selectImgHeight - maskHeihgt);
    if (left <= 0) {
      left = 0;
    }
    if (top <= 0) {
      top = 0;
    }
    if (top >= selectImgHeight - maskHeihgt) {
      top = selectImgHeight - maskHeihgt;
    }
    if (left >= selectImgWidth - maskWidth) {
      left = selectImgWidth - maskWidth;
    }
    mask.style.left = left + "px";
    mask.style.top = top + "px";
  }
  function handleMouseLeave() {
    mask.style.display = "none";
  }
  function handleMousEntrie(e) {
    mask.style.display = "block";
    if (e.offsetX < maskWidth / 2) {
      mask.style.left = 0 + "px";
    } else if (e.offsetX > selectImgWidth - maskWidth) {
      mask.style.left = selectImgWidth - maskWidth + "px";
    } else {
      mask.style.left = e.offsetX - maskWidth / 2 + "px";
      console.log(123);
    }
    if (e.offsetY < maskHeihgt / 2) {
      mask.style.top = 0 + "px";
    } else if (e.offsetY > selectImgHeight - maskHeihgt) {
      mask.style.top = selectImgHeight - maskHeihgt + "px";
    } else {
      mask.style.top = e.offsetY - maskHeihgt / 2 + "px";
    }
  }
  function moveMask(e) {
    let moveX = parseInt(mask.style.left) + e.offsetX - maskWidth / 2;
    let moveY = parseInt(mask.style.top) + e.offsetY - maskHeihgt / 2;
    if (moveX > 0 && moveX < selectImgWidth - maskWidth) {
      mask.style.left = moveX + "px";
    } else if (moveX < 0) {
      mask.style.left = 0 + "px";
    } else if (moveX > selectImgWidth - maskWidth) {
      mask.style.left = selectImgWidth - maskWidth + "px";
    }
    if (moveY > 0 && moveY < selectImgHeight - maskHeihgt) {
      mask.style.top = moveY + "px";
    } else if (moveY < 0) {
      mask.style.top = 0 + "px";
    } else if (moveY > maskWidth) {
      mask.style.top = selectImgHeight - maskHeihgt + "px";
    }
    bgImg.style.left = -(parseInt(mask.style.left) * 300) / 270 + "px";
    bgImg.style.top = -(parseInt(mask.style.top) * 300) / 270 + "px";
  }

  function formatArr(subArr = []) {
    Array.prototype.slice(subArr);
  }
})();
