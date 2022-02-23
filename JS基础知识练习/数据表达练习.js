// 下面的变量命名哪些是合法的

/* 
$  true
_  true
1$ false
list-style false
list_style true
list style  false
$$  true
$emit  true
var false
*/

/* 
一条语句输出下面的内容：
邓哥全名"邓旭明"
他为IT教育事业做出了'不可磨灭'的贡献
*/
// console.log("邓哥全名\"邓旭明\"\n他为IT教育事业做出了'不可磨灭'的贡献");
var name = "邓哥";
var age = 60;
var sex = "男";
// 把上面三个数据组装成一个对象，对象的属性名和变量名相同

var person = {
  name: "邓哥",
  age: 60,
  sex: "男",
};
/* 
于谦，男，职业捧哏，手机号13812341234，江湖人称谦哥，家住北京八大胡同。
其父亲王老爷子是一位古汉语专家，爱好洗澡

用字面量描述上面的数据
*/

var yuqian = {
  name: "于谦",
  sex: "男",
  jop: "职业捧哏",
  mobile: "13812341234",
  nickname: "江湖人称谦哥",
  address: {
    city: "北京",
    street: "八大胡同",
  },
  parent: {
    name: "王老爷子",
    jop: "古汉语专家",
    enjoy: "洗澡",
  },
};
/* 
  有一个非常特别的对象，它的键值对是：
  0: 'a'
  1: 'b'
  how are you: 'fine thank you'
*/
// 用字面量表示该对象，然后分别读取它的每个属性输出

// var obj = {
//   0: "a",
//   1: "b",
//   "how are you": "I am fine",
// };

// console.log(obj[0], obj[1], obj["how are you"]);
