(function () {
  let master = document.querySelector(".master>input");
  let checkAll = document.querySelectorAll("td>input");
  let tableField = document.querySelectorAll("th");
  let oTbody = document.querySelector("tbody");
  let rows = oTbody.querySelectorAll("tr");
  let init = function () {
    initEvent();
  };
  function initEvent() {
    master.addEventListener("click", mainSwitch);
    oTbody.addEventListener("click", isOpenAllSelected);
    tableField.forEach((th, i) => {
      curFiledSort(th, i);
    });
  }
  function mainSwitch() {
    checkAll.forEach((el, i) => {
      el.checked = master.checked;
    });
  }
  function isOpenAllSelected(e) {
    let checkNumber = 0;
    if (e.target.localName === "input") {
      checkAll.forEach((el, i) => {
        if (el.checked) {
          checkNumber++;
        }
      });
    }
    console.log(checkNumber, checkAll.length - 1);
    if (checkNumber === checkAll.length) {
      master.checked = true;
    } else {
      master.checked = false;
    }
  }
  function curFiledSort(th, i) {
    if (i === 0) return;
    th.addEventListener("click", function () {
      let arr = Array.prototype.slice.call(rows);
      if (i === 1 || i === 3) {
        arr.sort(function (a, b) {
          return a.children[i].innerText - b.children[i].innerText;
        });
      } else {
        arr.sort(function (a, b) {
          return a.children[i].innerText.localeCompare(
            b.children[i].innerText,
            "zh"
          );
        });
      }

      arr.forEach((el, i) => {
        oTbody.appendChild(el);
      });
    });
  }
  init();
})();
