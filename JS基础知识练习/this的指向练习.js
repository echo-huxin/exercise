// var person1 = {
//   name: "monica",
//   age: 17,
//   sayHi: function () {
//     console.log(this.name, this.age);
//     // 完成该方法，打印姓名和年龄
//   },
// };
// 为所有对象添加方法print，打印对象的键值对
// Object.prototype.print = function () {
//   for (var key in this) {
//     if (this.hasOwnProperty(key)) {
//       console.log(key, this[key]);
//     }
//   }
// };
// let obj = {
//   a: 123,
//   b: 32,
//   c: 43,
// };
// obj.print();
// person1.sayHi();
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + lastName;
}
// 能否不使用new,通过User函数创建对象（不能更改User函数）
let obj = {};
User.call(obj, "张", "三");
console.log(obj);
(function () {
  try {
    throw new Error();
  } catch (z) {
    var x = 1;
    var y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
  return 3;
})();
