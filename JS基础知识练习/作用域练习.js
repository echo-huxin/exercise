// 下面的代码输出什么
// 下面的代码输出什么

// console.log(a, b, c);
// var a = 1;
// var b = function () {};
// function c() {}
// undefined,undefined,c()

// 下面的代码输出什么

var a = 1,
  b = 2;

function m1() {
  console.log(a);
  var a = 3;
  function m2() {
    console.log(a, b);
  }
  m2();
}
m1();
// undefined 3,2
