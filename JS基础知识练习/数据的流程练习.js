/* 
1. 输出100个hello world
*/
// for (let i = 0; i < 100; i++) {
//   console.log("Hello world");
// }
/* 
2. 输出100~200
*/
// for (let i = 100; i <= 200; i++) {
//   console.log(i);
// }
/* 
3. 创建一个包含1~100的数组
*/
// let arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }
// console.log(arr);
/* 
4. 定义一个数组，遍历输出它的每一项
*/

// let arr = [1, 2, 3, 4, 5, 6, 7];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
/* 
1. 输出1-100的所有奇数
*/
// for (let i = 1; i <= 100; i++) {
//   i % 2 === 0 || console.log(i);
// }
/* 
2. 定义一个数组，输出数组中所有的奇数
*/

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i <= arr.length - 1; i++) {
//   arr[i] % 2 === 0 || console.log(arr[i]);
// }

/* 
3. 定义一个数组，找出所有的奇数，放入到一个新数组中
*/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//   arr[i] % 2 === 0 || newArr.push(arr[i]);
// }
// console.log(newArr);
/* 
1. 1~100求和
// */
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
/* 
2. 求某个数的阶乘
*/
// function factorial(figures) {
//   for (var i = figures - 1; 2 <= i; i--) {
//     figures *= i;
//   }
//   return figures;
// }
// console.log(factorial(4));
/* 
3. 数组求和
*/
// var arr = [1, 2, 3, 4, 5, 6, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

/* 
4. 求数组中的奇数的个数
*/
// var arr = [1, 2, 3, 4, 5, 6, 7];
// let content = 0;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] % 2 === 0 || content++;
// }
// console.log(content);
/* 
5. 求数组中的奇数和
*/
// var arr = [1, 2, 3, 4, 5, 6, 7];
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//   arr[i] % 2 === 0 || (sum += arr[i]);
// }
/* 
1. 数组中是否存在某个数，输出 是 或 否
*/
// let arr = [1, 23, 423, 532, 23234, 5];
// function find(value) {
//   var isFind = "否";
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       isFind = "是";
//       break;
//     }
//   }
//   return isFind;
// }
// console.log(find(5));
/* 
2. 数组中是否存在某个数，如果存在，则输出它所在的下标，如果不存在，则输出-1
*/
// let arr = [1, 23, 423, 532, 23234, 5];
// function findIndex(value) {
//   var index = -1;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// }
// console.log(findIndex(5));
/* 
3. 找到数组中第一个奇数和最后一个奇数，将它们求和
*/
// let arr = [1, 23, 423, 532, 23234, 5];
// let first = 0;
// let last = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2) {
//     first = arr[i];
//     break;
//   }
// }
// for (let i = arr.length - 1; 0 <= i; i--) {
//   if (arr[i] % 2) {
//     last = arr[i];
//     break;
//   }
// }
// console.log(first + last);
/* 
4. 有两个数组，看两个数组中是否都存在奇数，输出 是 或 否
*/
let arr = [1, 23, 423, 532, 23234, 5];
let arr1 = [22, 44, 66, 88, 77];
let flag1 = false;
let flag2 = false;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2) {
    flag1 = true;
    break;
  }
}
for (var i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2) {
    flag2 = true;
    break;
  }
}

console.log(flag1 && flag2);
