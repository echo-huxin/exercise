// 根据hero.js提供的数据heros，创建合适的元素，将英雄数据显示到页面上

let container = document.querySelector(".container");

for (let index = 0; index < heros.length; index++) {
  let a = document.createElement("a");
  let img = document.createElement("img");
  let span = document.createElement("span");

  a.href = `https://pvp.qq.com/web201605/herodetail/${heros[index].ename}.shtml`;
  a.target = "_blank";
  a.className = "item";

  img.src = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${heros[index].ename}/${heros[index].ename}.jpg`;

  span.innerText = heros[index].cname;

  container.appendChild(a);
  a.appendChild(img);
  a.appendChild(span);
}
