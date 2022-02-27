// 生成一个a-z的字符串
// for (var i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
//   console.log(String.fromCharCode(i));
// }
// 将下面的字符串分割成一个单词数组，同时去掉数组中每一项的,和.

var str =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit voluptatem cupiditate, est corporis, quis sunt quod tempore officiis hic voluptates eaque commodi. Repudiandae provident animi quia qui harum quasi.";

// str = str.split(" ");
// var newStr = str.map((ele) => {
//   return ele.replace(",", "").replace(".", "");
// });

// console.log(newStr);
// 得到下面字符串中第一个i和最后一个i之间的子串
// var firstIndex = str.indexOf("i");
// var lastIndex = str.lastIndexOf("i");
// str = str.substring(firstIndex + 1, lastIndex);
// console.log(str);

// 将下面的rgb格式转换成为HEX格式
// var rgb = "rgb(253, 183, 25)";
// rgb = rgb.replace("rgb(", "").replace(")", "");
// rgb = rgb.split(",");
// let Hex = "#";
// rgb.forEach((element) => {
//   Hex += parseInt(element).toString(16);
// });
// console.log(Hex);
// name转换成驼峰命名
// var name = "has own property"; // --> hasOwnProperty
// let s = name[0];
// name = name.split(" ");
// name.forEach((element, i) => {
//   if (i > 0) {
//     s += element[0].toUpperCase() + element.substring(1);
//   }
// });
// console.log(s);
// /**
//  * 得到一个指定范围内的随机整数
//  * @param {number} min 范围的最小值
//  * @param {number} max 范围的最大值（无法取到最大值）
//  * @return {number} 范围内的随机整数
//  */
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// }

// console.log(getRandom(2, 10));
// /**
//  * 得到一个指定长度的随机字符串
//  * 字符串包含：数字、字母
//  * @param {number} length 字符串的长度
//  * @return {number} 随机字符串
//  */
// function getRandomString(length) {
//   let str = "123456789abcdefghge";
//   let res = "";
//   for (var i = 0; i < length; i++) {
//     let index = getRandom(0, str.length);
//     res += str[index];
//   }
//   return res;
// }
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// }

// console.log(getRandomString(3));
/**
 * 从一个数组中随机取出一项
 * @param {any[]} arr 数组
 * @return {any} 数组的随机一项
 */
function getRandomItem(arr) {
  var index = parseInt(Math.random() * arr.length);
  return arr[index];
}
// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// }
console.log(getRandomItem([1, 2, 3]));
