/**
 * 交换两个变量的值
 * @param {*} a 变量1
 * @param {*} b 变量2
 */
// function swap(a, b) {
//   let temp = null;
//   temp = a;
//   a = b;
//   b = temp;
// }
/**
 * 交换对象两个属性的值
 * @param {Object} obj 对象
 * @param {string} key1 属性名1
 * @param {string} key2 属性名2
 */
// function swap(obj, a, b) {
//   let temp = null;
//   temp = obj[a];
//   obj[a] = obj[b];
//   obj[b] = temp;
// }
/**
 * 交换数组两个位置的值
 * @param {Array} arr 数组
 * @param {number} i1 下标1
 * @param {number} i2 下标2
 */
// function swap(arr, i1, i2) {
//   let temp = null;
//   temp = arr[i1];
//   obj[i1] = obj[i2];
//   obj[i2] = temp;
// }

function isArray(obj) {
  if (obj.length) {
    return true;
  } else {
    return false;
  }
}

function includes(obj, target) {
  if (isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] === target) {
        return true;
      }
    }
  } else {
    for (var key in obj) {
      if (obj[key] === target) {
        return true;
      }
    }
    return false;
  }
}

/**
 * 修改对象，仅保留需要的属性
 * @param {Object} obj 要修改的对象
 * @param {Array<string>} keys 需要保留的属性名数组
 */
// function pick(obj, keys) {
//   var newObj = {};
//   for (var key in obj) {
//     if (includes(keys, key)) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }
// let obj = {
//   a: 12,
//   b: 13,
//   c: 14,
//   d: 15,
// };
// let res = pick(obj, ["a", "b"]);
// console.log(res);
// 下面代码输出什么？
// var foo = {
//   n: 0,
//   k: {
//     n: 0,
//   },
// };
// var bar = foo.k;
// bar.n++;
// bar = {
//   n: 10,
// };
// bar = foo;
// bar.n++;
// bar = foo.n;
// bar++;
// console.log(foo.n, foo.k.n);

// 下面的代码输出什么（京东）？
// var foo = {
//   n: 1,
// };

// var arr = [foo];

// function method1(arr) {
//   var bar = arr[0];
//   arr.push(bar);
//   bar.n++;
//   arr = [bar];
//   arr.push(bar);
//   arr[1].n++;
// }
// function method2(foo) {
//   foo.n++;
// }
// function method3(n) {
//   n++;
// }
// method1(arr);
// method2(foo);
// method3(foo.n);

// console.log(foo.n, arr.length);
// 下面的代码输出什么（字节）？
var foo = { bar: 1 };
var arr1 = [1, 2, foo];
var arr2 = arr1.slice(1);
arr2[0]++;
arr2[1].bar++;
foo.bar++;
arr1[2].bar++;
console.log(arr1[1] === arr2[0]);
console.log(arr1[2] === arr2[1]);
console.log(foo.bar);
