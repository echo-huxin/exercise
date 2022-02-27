// toString方法属于Object.prototype，它会把对象转换为字符串的形式 [object Object]
// 这种格式并非每个对象想要的
// 1. 解释数组的toString为什么能得到不同的格式
// 2. 如果自己的构造函数希望改变toString，如何改变

// 1.因为数组的原型对象中的toString方法对Objec原型链中toString进行了覆盖
//2.使用call改变this的指向
// var arr1 = [1, 2, 3, 4]; // 真数组
// 类数组(伪数组)
// var arr2 = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };

// 判断arr1和arr2是否是真数组
// console.log(arr1 instanceof Array);
// console.log(arr2 instanceof Array);
// 创建一个没有隐式原型的用户对象，随意添加一些属性

// var arr2 = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };
// arr2.__proto__ = null;
// Object.setPrototypeOf(arr2, null);
// 下面的代码输出什么？
function User() {}
User.prototype.sayHello = function () {};

var u1 = new User();
var u2 = new User();

// console.log(u1.sayHello === u2.sayHello); //true
// console.log(User.prototype === Function.prototype); //false
// console.log(User.__proto__ === Function.prototype); //ture
// console.log(User.__proto__ === Function.__proto__); //ture
// console.log(u1.__proto__ === u2.__proto__); //true
// console.log(u1.__proto__ === User.__proto__); //false
// console.log(Function.__proto__ === Object.__proto__); // true
// console.log(Function.prototype.__proto__ === Object.prototype.__proto__); //false
// console.log(Function.prototype.__proto__ === Object.prototype); // ture
// 下面的代码输出什么？（字节）
console.log({} instanceof Object); //true
console.log({}.toString instanceof Function); //ture
console.log(Object instanceof Function); //ture
console.log(Function instanceof Object); //true
