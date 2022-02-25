// 完成下面的函数

/**
 * 得到某个数的阶乘
 * 如果数小于了1，则得到0
 * @param {number} n 要求阶乘的数
 * @return {number} 阶乘结果
 */
function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

// 利用上面的函数，完成下面的练习题

/* 
 1. 输出5的阶乘
 */
// console.log(factorial(6));
/* 
 2. 求5和6的阶乘之和，然后输出
 */
// console.log(factorial(5) * factorial(6));
/* 
 3. 输出阶乘结果不超过1000的所有数字
 */
// for (let i = 0; i < 1000; i++) {
//   if (factorial(i) < 1000) {
//     console.log(i);
//   } else {
//     break;
//   }
// }
// 完成下面的函数

/**
 * 得到某个数的阶乘
 * 如果数小于了1，则得到0
 * @param {number} n 要求阶乘的数
 * @return {number} 阶乘结果
 */
function factorial(n) {}

// 利用上面的函数，完成下面的练习题

/* 
 1. 输出5的阶乘
 */

/* 
 2. 求5和6的阶乘之和，然后输出
 */

/* 
 3. 输出阶乘结果不超过1000的所有数字
 */
// 完成下面的函数

/**
 * 在arr中寻找是否存在target
 * @param {Array} arr 要遍历寻找的数组
 * @param {any} target 要寻找的目标
 * @return {boolean} 是否找到
 */
function includes(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

// 利用上面的函数，完成下面的练习题
var nums = [1, 3, 8, 2, 5, 1, 9];

/* 
  1. 判断nums中是否存在8，输出是或否
  */
var nums2 = [6, 3, 2, 7, 11, 33];

// includes(nums2, 6) ? console.log("是") : console.log("否");
/* 
  2. 判断数字2是否同时存在于nums和nums2中，输出是或否
  */
// includes(nums, 55) && includes(nums2, 55)
//   ? console.log("是")
//   : console.log("否");
var nums3 = [2, 5, 1];

/* 
  3. 思考题：判断nums3中是否所有数字都在nums中存在，输出是或否
  */

for (var i = 0; i < nums3.length; i++) {
  if (!includes(nums, nums3[i])) {
    console.log("否");
    break;
  }
  if (i === nums3.length - 1) console.log("是");
}
