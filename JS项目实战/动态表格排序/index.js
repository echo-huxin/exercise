// 复选框全部选中功能
//1.点按全选按钮,全部选中,和全部取消
//2. 单选全部选中,开启全选按钮
//3. 单选出现一个为全中,取消选择按钮

//点击不同字段表头进行排序

let oTbody = document.querySelector("tbody");
init();
let master = document.querySelector(".master>input");
let checkAll = document.querySelectorAll("td>input");
let tableField = document.querySelectorAll("th");
oTbody.onclick = function (e) {
  console.log(e.target.localName);
  if (e.target.localName === "input") {
    let isAll = isOpenAllSelected(checkAll);
    master.checked = isAll;
  }
};
master.onclick = mainSwitch;
tableField.forEach((el, i) => {
  el.onclick = curFiledSort;
});
function init() {
  let template = "";
  for (let i = 0; i < dataTable.length; i++) {
    template += `
   <tr>
     <td>
       <input type="checkbox" />
       </td>
       <td>${dataTable[i].id}</td>
       <td>${dataTable[i].name}</td>
       <td>${dataTable[i].age}</td>
       <td>${dataTable[i].work}</td>
     </tr>`;
  }
  oTbody.innerHTML = template;
}
function mainSwitch() {
  checkAll.forEach((el, i) => {
    el.checked = master.checked;
  });
}
function isOpenAllSelected() {
  let isAll = true;
  checkAll.forEach((el, i) => {
    if (!el.checked) {
      isAll = false;
    }
  });
  return isAll;
}
function curFiledSort() {
  if (this.innerText === "编号") {
    dataTable.sort((a, b) => {
      return a.id - b.id;
    });
  } else if (this.innerText === "姓名") {
    dataTable.sort((a, b) => {
      return strBetter(a.name, b.name);
    });
  } else if (this.innerText === "年龄") {
    dataTable.sort((a, b) => {
      return a.age - b.age;
    });
  } else if (this.innerText === "职位") {
    dataTable.sort((a, b) => {
      return strBetter(b.name, a.name);
    });
  }

  init();
}
function strBetter(a, b) {
  let i = 0;
  while (true) {
    if (a[i] === undefined && b[i] === undefined) return 0;
    else if (a[i] === undefined) return -1;
    else if (b[i] === undefined) return 1;
    let res = a.charCodeAt(i) - b.charCodeAt(i);
    if (res !== 0) {
      return res;
    }
    i++;
  }
}
