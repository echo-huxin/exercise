(() => {
  let herosData;
  const doms = {
    radio: document.querySelectorAll(".type-radio"),
    txtKeyword: document.querySelector("input"),
  };
  /**
   * 从网络获取当前的英雄数据
   * @returns Promise
   */
  async function getHeroes() {
    return fetch("https://study.duyiedu.com/api/herolist")
      .then((resp) => resp.json())
      .then((resp) => resp.data.reverse());
  }
  init();
  async function init() {
    herosData = await getHeroes();
    showHeros(herosData);
  }

  for (const el of doms.radio) {
    el.addEventListener("click", function () {
      setChoose(this);
      setShowHeros(this);
    });
  }
  doms.txtKeyword.addEventListener("input", function () {
    console.log(this.value);
    showSearchHero(this.value);
  });
  function showHeros(heros) {
    document.querySelector("ul").innerHTML = heros
      .map(
        (hero) => `  <li>
     <a href="#">
       <img
         src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg"
         alt=""
       />
       <span>${hero.cname}</span>
     </a>
   </li>`
      )
      .join("");
  }
  function setChoose(select) {
    document.querySelector(".cutSelect").classList.remove("cutSelect");
    select.classList.add("cutSelect");
  }
  function setShowHeros(select) {
    const type = select.dataset.type;
    const value = select.dataset.value;
    let newHerosData;
    if (type === "all") {
      newHerosData = herosData;
    } else if (type === "pay_type") {
      newHerosData = herosData.filter((hero) => {
        return hero["pay_type"] === +value;
      });
    } else {
      newHerosData = herosData.filter((hero) => {
        return hero["hero_type"] === +value || hero["hero_type2"] === +value;
      });
    }
    showHeros(newHerosData);
  }
  function showSearchHero(keyword) {
    let newHerosData = herosData.filter((hero) => {
      return hero.cname.includes(keyword);
    });
    showHeros(newHerosData);
  }
})();
