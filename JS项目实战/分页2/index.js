// page pageNumber  mostNumber  container createAnchor className newPage
createPager(1, 10, 50, container);
function createPager(page, mostNumber, pageNumber, container) {
  function createAnchor(className, text, newPage) {
    let oA = document.createElement("a");
    oA.className = className;
    oA.text = text;
    container.appendChild(oA);
    oA.addEventListener("click", function () {
      if (newPage < 1 || newPage > pageNumber || newPage === page) {
        return;
      }
      container.innerHTML = "";
      createPager(newPage, mostNumber, pageNumber, container);
    });
  }
  //1.创建返回首页按钮
  if (page === 1) {
    createAnchor("display", "首页", 1);
    createAnchor("display", "上一页", page - 1);
  } else {
    createAnchor("", "首页", 1);
    createAnchor("", "上一页", page - 1);
  }
  //2.创建上一页按钮
  //3.创建数字列表
  let min = page - mostNumber / 2;
  min = min <= 0 ? 1 : min;
  let max = min + (mostNumber - 1);
  max = max > pageNumber ? pageNumber : max;
  for (let index = min; index <= max; index++) {
    if (page === index) {
      createAnchor("active", index, index);
    } else {
      createAnchor("", index, index);
    }
  }
  if (page === pageNumber) {
    //4.下一页按钮
    createAnchor("display", "下一页", page + 1);
    //   5.尾页按钮
    createAnchor("display", "尾页", pageNumber);
  } else {
    //4.下一页按钮
    createAnchor("", "下一页", page + 1);
    //   5.尾页按钮
    createAnchor("", "尾页", pageNumber);
  }
}
