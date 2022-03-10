(function () {
  let citylist = [];
  let provincesArr = [];
  let cityArr = [];
  let districtArr = [];
  let selectAll = document.querySelectorAll("select");
  myAjax(init);
  function init() {
    initEvents();
    initProvinces();
    initSelectList();
  }
  function initEvents() {
    selectAll[0].addEventListener("change", handleChangePro);
    selectAll[1].addEventListener("change", handleChangeCi);
  }
  function handleChangePro() {
    selectAll[1].innerHTML = "";
    selectAll[2].innerHTML = "";
    cityArr[pro.value].forEach((el, i) => {
      selectAll[1].innerHTML += `<option>${el}</option>`;
    });
    districtArr[ci.value].forEach((el, i) => {
      selectAll[2].innerHTML += `<option>${el.s}</option>`;
    });
  }
  function handleChangeCi() {
    selectAll[2].innerHTML = "";
    districtArr[ci.value].forEach((el, i) => {
      selectAll[2].innerHTML += `<option>${el.s}</option>`;
    });
  }
  function initSelectList() {
    selectAll.forEach((ele) => (ele.innerHTML = ""));
    provincesArr.forEach((el, i) => {
      selectAll[0].innerHTML += `<option>${el}</option>`;
    });
    cityArr[pro.value].forEach((el, i) => {
      selectAll[1].innerHTML += `<option>${el}</option>`;
    });
    districtArr[ci.value].forEach((el, i) => {
      selectAll[2].innerHTML += `<option>${el.s}</option>`;
    });
  }
  function initProvinces() {
    citylist.forEach((el, i) => {
      provincesArr.push(el.p);
      initCity(el.p, el.c);
    });
    console.log(cityArr, provincesArr, districtArr);
  }
  function initCity(key, city) {
    let curCityArr = [];
    city.forEach((el, i) => {
      curCityArr.push(el.n);
      initDistrictArr(el.n, el.a);
    });
    cityArr[key] = curCityArr;
  }
  function initDistrictArr(key, district) {
    districtArr[key] = district;
  }
  function myAjax(fn) {
    var oAjax = new XMLHttpRequest();
    oAjax.open("GET", "./city.json", true);
    oAjax.send();
    //接收返回
    oAjax.onreadystatechange = function () {
      //oAjax.readyState浏览器和服务器的交互情况
      if (oAjax.readyState == 4) {
        //读取完成
        if (oAjax.status == 200) {
          //http状态码,用来判断是否成功接受并返回文件
          citylist = JSON.parse(oAjax.responseText).citylist;
          fn();
        } else {
          alert(oAjax.status + " NotFound");
        }
      }
    };
  }
})();
