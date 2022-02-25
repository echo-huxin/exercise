// var a = 1; // 避免污染
// var b = 2; // 避免污染
// // 暴露为：sayHi
// function hello() {
//   console.log("hello world");
// }
// // 暴露为：count
// var count = 1;

var pu = (function () {
  var a = 1; // 避免污染
  var b = 2; // 避免污染

  return {
    sayHi: function hello() {
      console.log("hello world");
    },
    count: 1,
  };
})();
console.log(pu.count);
pu.sayHi();
