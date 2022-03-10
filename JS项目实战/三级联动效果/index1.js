(function () {
  let provincesSelect = document.querySelector(".provinces");
  let citySelect = document.querySelector(".city");
  let schoolSelect = document.querySelector(".school");
  init();
  function init() {
    initprovincesList();
    initEvents();
  }
  function initEvents() {
    provincesSelect.addEventListener("change", handleChangeProvinces);
    citySelect.addEventListener("change", handleChangeCity);
  }
  function initprovincesList() {
    buildingList({ target: provincesSelect, data: province });
  }
  function initSchoolList() {
    let curSchoolNumber = citySelect.value;
    let schools = allschool[curSchoolNumber];
    buildingList({ target: schoolSelect, data: schools });
  }
  function handleChangeProvinces() {
    let curProNumber = this.value;
    let citys = city[curProNumber];
    buildingList({ target: citySelect, data: citys });
    initSchoolList();
  }
  function handleChangeCity() {
    initSchoolList();
  }
  function buildingList({ target, data }) {
    console.log(target, data);
    target.innerHTML = "";
    for (let number in data) {
      let option = document.createElement("option");
      option.value = number;
      option.innerText = data[number];
      target.appendChild(option);
    }
  }
})();
