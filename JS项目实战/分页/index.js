function $(select) {
  return document.querySelector(select);
}
function $$(select) {
  return document.querySelectorAll(select);
}
let firstPage = $(".firstPage");
let prePage = $(".prePage");
let nextPage = $(".nextPage");
let endPage = $(".endPage");
let listBox = $(".listBox");
let countPage = $(".countPage");
let currentPage = $(".currentPage");
let pageTotal = $(".pageTotal");
let lists = [];
let mostNumber = 10;
let curClickValue = 1;
createPager();
function createPager() {
  createPages(1, 10);
  addEvent();
  judgeLimit();
}
function createPages() {
  for (let index = 1; index <= mostNumber; index++) {
    let oLi = document.createElement("li");
    if (index === 1) {
      oLi.className = "active";
    }
    oLi.innerHTML = index;
    listBox.appendChild(oLi);
  }
  lists = $$(".listBox>li");
}
function addEvent() {
  prePage.addEventListener("click", pre);
  nextPage.addEventListener("click", next);
  listBox.addEventListener("click", function (e) {
    if (e.target.localName == "li") {
      let val = e.target.innerText * 1;
      jumpPage(val);
    }
  });
  firstPage.addEventListener("click", rebackHomePage);
  endPage.addEventListener("click", jumpLastPage);
}
function jumpPage(value) {
  curClickValue = value;
  let page = value;
  let min = page - mostNumber / 2;
  min = min <= 0 ? 1 : min;
  let max = mostNumber + min - 1;
  max = max >= 50 ? 50 : max;
  refreshList(min, max);
  judgeLimit();
}
function refreshList(start, end) {
  let newLists = lists;
  let count = 0;
  if (end + 1 - start < mostNumber) {
    start -= mostNumber - (end + 1 - start);
  }
  for (let index = start; index <= end; index++) {
    newLists[count].innerText = index;
    if (index === curClickValue) {
      setActiveStyle(lists[count]);
    }
    count++;
  }
}
function setActiveStyle(ele) {
  let oActive = $(".active");
  oActive.className = "";
  ele.className = "active";
}
function pre() {
  let val = $(".active").previousSibling.innerText * 1;
  jumpPage(val);
}
function next() {
  let val = $(".active").nextElementSibling.innerText * 1;
  jumpPage(val);
}
function rebackHomePage() {
  jumpPage(1);
}
function jumpLastPage() {
  jumpPage(50);
}
function judgeLimit() {
  if (curClickValue === 1) {
    firstPage.className = "disable";
    prePage.className = "disable";
  } else {
    firstPage.className = "";
    prePage.className = "";
  }
  if (curClickValue === 50) {
    nextPage.className = "disable";
    endPage.className = "disable";
  } else {
    nextPage.className = "";
    endPage.className = "";
  }
}
