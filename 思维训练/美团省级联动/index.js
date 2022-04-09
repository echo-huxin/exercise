(async function () {
  let cityData;
  /**
   * 远程获取省市区数据，当获取完成后，得到一个数组
   * @returns Promise
   */
  const doms = {
    provinces: document.querySelector("#sel-provinces"),
    city: document.querySelector("#sel-city"),
    area: document.querySelector("#sel-area"),
  };
  console.log(doms);
  async function getDatas() {
    return fetch("https://study.duyiedu.com/api/citylist")
      .then((resp) => resp.json())
      .then((resp) => resp.data);
  }
  init();
  async function init() {
    cityData = await getDatas();
    fillSelect(doms.provinces, cityData);
    fillSelect(doms.city, []);
    fillSelect(doms.area, []);
    regCommonEvent(doms.provinces);
    regCommonEvent(doms.city);
    regCommonEvent(doms.area);
    regProvincesEvent();
    regCityEvent();
  }
  function fillSelect(select, data) {
    const options = select.querySelector(".options");
    const text = select.querySelector(".text");
    const optionsData = data.map((obj) => `<span>${obj.label}</span>`).join("");
    text.innerText = `请选择${select.dataset.name}`;
    select.className = `select ${data.length ? "" : "disabled"}`;
    select.datas = data;
    options.innerHTML = optionsData;
  }

  function regCommonEvent(select) {
    const title = select.querySelector(".title");
    const text = title.querySelector(".text");
    const preExpend = document.querySelector(".expend");
    title.addEventListener("click", function () {
      if (preExpend != this) {
        preExpend && preExpend.classList.remove("expend");
      }
      select.classList.toggle("expend");
    });
    select.addEventListener("click", function (e) {
      if (select.classList.contains("disabled")) {
        return;
      }
      if (e.target.localName === "span") {
        if (preExpend != this) {
          preExpend && preExpend.classList.remove("expend");
        }
        const preActive = select.querySelector(".active");
        preActive && preActive.classList.remove("active");
        e.target.classList.add("active");
        text.innerHTML = e.target.innerText;
        this.classList.toggle("expend");
      }
    });
  }
  function regProvincesEvent() {
    doms.provinces.addEventListener("click", function (e) {
      if (e.target.localName === "span") {
        const choose = e.target.innerText;
        const provincesData = this.datas.find((obj) => {
          return obj.label === choose;
        });
        fillSelect(doms.city, provincesData.children);
      }
    });
  }
  function regCityEvent() {
    doms.city.addEventListener("click", function (e) {
      if (e.target.localName === "span") {
        const choose = e.target.innerText;
        const areaData = this.datas.find((obj) => {
          return obj.label === choose;
        });
        fillSelect(doms.area, areaData.children);
      }
    });
  }
})();
