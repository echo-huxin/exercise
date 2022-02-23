/* 
编写一个完美的求和函数：
1. 若两个数据都是普通数字，求和即可
2. NaN的数据需要变为0
3. 其他类型的数据需要转换为数字
*/

// function sum(a, b) {

//   a = +a || 0;
//   b = +b || 0;
//   return a + b;
// }
// console.log(sum(3, 4));

// 不使用if，判断一个年份是否是闰年，输出是或否
// 闰年规则：
// 1. 4年一闰，百年不闰
// 2. 400年必闰
// 上述两点满足其一即可
// */
// var year = 2000;
// 判断变量year是否是闰年

// var year = 2020;
// var isLeapYaer =
//   (year % 4 === 0 && year % 100 === 0) || year % 400 === 0 ? "是" : "否";
// console.log(isLeapYaer);

/* 
  不使用if
  根据身高、体重，计算健康状况

  健康状况取决于BMI   BMI=体重÷身高的平方。（体重单位：千克；身高单位：米。）
  BMI的正常值在20~25之间，少于20偏瘦，高于25偏胖

  输出 正常、偏瘦、偏胖
*/
// var weight = 10;
// var height = 180;
// var BMI = weight / (height / 100) ** 2;
// let result = BMI > 25 ? "偏胖" : BMI < 20 ? "偏瘦" : 正常;
// console.log(BMI, result);

for (var i = 0; i <= 200; i++) {
  console.log(i);
}
console.log(i);
