// 将下面多个数组拼接成一个数组

// var nums1 = [1, 2, 3];
// var nums2 = [4, 5, 6];
// var nums3 = [7, 8, 9];

// let nums = [];
// console.log(nums.concat(nums1, nums2, nums3));
// 删除数组中的所有字符串
// var nums = [1, 1, "1", "a", "b", "a", 3, 5, 3, 7];

// for (var i = 0; i < nums.length; i++) {
//   if (typeof nums[i] === "string") {
//     nums.splice(i, 1);
//     i--;
//   }
// }

// console.log(nums);
// 数组去重
// var nums = [1, 1, "1", "a", "b", "a", 3, 5, 3, 7];

// for (var i = 0; i < nums.length; i++) {
//   let item = nums[i];
//   for (var j = i + 1; j < nums.length; j++) {
//     if (item === nums[j]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
// }

// console.log(nums);

// 判断下面的文件是否符合后缀名要求
// 合法的后缀名：.jpg  .gif  .bmp .webp  .png

// var filename = "d://files/mymap/3.jpg";

// let endIndex = filename.indexOf(".");
// let endName = filename.substring(endIndex);
// console.log(endName);
// let arr = [".jpg", ".gif", ".bmp", ".webp", ".png"];

// for (var i = 0; i < arr.length; i++) {
//   if (endName === arr[i]) {
//     console.log("合法");
//     break;
//   }
// }

// var fakeArr = {
//   0: "a",
//   1: "b",
//   2: "c",
//   length: 3,
// };

// console.log([].slice.call(fakeArr));
// 进一步完善下面的扑克牌程序
// 给牌堆添加一个shuffle方法，该方法可以打乱牌堆中扑克牌的顺序

// /**
//  * 创建一张扑克牌
//  * @param {number} number 1-1, ..., 11-J，12-Q，13-K，14-小王，15-大王
//  * @param {number} color 1-黑桃  2-红桃  3-梅花  4-方片
//  */
// function Poker(number, color) {
//   this.number = number;
//   this.color = color;
// }

// Poker.prototype.print = function () {
//   if (this.number === 14) {
//     console.log("joker");
//     return;
//   }
//   if (this.number === 15) {
//     console.log("JOKER");
//     return;
//   }
//   // 其他情况
//   // 得到花色
//   var colors = ["♠", "♥", "♣", "♦"];
//   var color = colors[this.color - 1];
//   // 点数
//   var numbers = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//   ];
//   var number = numbers[this.number - 1];

//   console.log(color + number);
// };

// /*
//     一碟扑克牌
//   */
// function Deck() {
//   this.pokers = [];
//   for (var i = 1; i <= 13; i++) {
//     for (var j = 1; j <= 4; j++) {
//       this.pokers.push(new Poker(i, j));
//     }
//   }
//   this.pokers.push(new Poker(14, 0));
//   this.pokers.push(new Poker(15, 0));
// }

// Deck.prototype.print = function () {
//   for (var i = 0; i < this.pokers.length; i++) {
//     this.pokers[i].print();
//   }
// };

// /**
//  * 洗牌，打乱牌堆中的扑克牌顺序
//  */
// Deck.prototype.shuffle = function () {
//   this.pokers.sort(() => Math.random() - 0.5);
// };

// let deck = new Deck();
// deck.shuffle();
// deck.print();
var students = [
  {
    id: 988985,
    name: "梁平",
    sex: "女",
    age: 15,
    address: "安徽省 淮南市",
    tel: "12957961008",
  },
  {
    id: 299422,
    name: "邱杰",
    sex: "男",
    age: 25,
    address: "辽宁省 本溪市",
    tel: "12685726676",
  },
  {
    id: 723972,
    name: "王超",
    sex: "女",
    age: 14,
    address: "新疆维吾尔自治区 阿克苏地区",
    tel: "15277794541",
  },
  {
    id: 723768,
    name: "冯秀兰",
    sex: "女",
    age: 29,
    address: "辽宁省 丹东市",
    tel: "13014888148",
  },
  {
    id: 536273,
    name: "赖军",
    sex: "男",
    age: 19,
    address: "重庆 重庆市",
    tel: "15152658611",
  },
  {
    id: 940136,
    name: "顾强",
    sex: "男",
    age: 20,
    address: "吉林省 松原市",
    tel: "18562759588",
  },
  {
    id: 489462,
    name: "戴敏",
    sex: "男",
    age: 25,
    address: "湖南省 长沙市",
    tel: "11513562318",
  },
  {
    id: 863594,
    name: "吕涛",
    sex: "女",
    age: 16,
    address: "湖北省 襄阳市",
    tel: "16246419558",
  },
  {
    id: 718313,
    name: "冯静",
    sex: "女",
    age: 28,
    address: "黑龙江省 牡丹江市",
    tel: "18243767800",
  },
  {
    id: 262068,
    name: "蔡明",
    sex: "男",
    age: 20,
    address: "黑龙江省 七台河市",
    tel: "14185862227",
  },
  {
    id: 900366,
    name: "廖磊",
    sex: "女",
    age: 23,
    address: "青海省 海南藏族自治州",
    tel: "19469661693",
  },
  {
    id: 316019,
    name: "冯洋",
    sex: "男",
    age: 16,
    address: "江西省 新余市",
    tel: "18842832768",
  },
  {
    id: 773536,
    name: "韩杰",
    sex: "男",
    age: 23,
    address: "云南省 丽江市",
    tel: "18560747335",
  },
  {
    id: 494398,
    name: "江涛",
    sex: "男",
    age: 24,
    address: "山西省 大同市",
    tel: "12774658592",
  },
  {
    id: 177459,
    name: "文艳",
    sex: "男",
    age: 27,
    address: "山东省 青岛市",
    tel: "16233511417",
  },
  {
    id: 979439,
    name: "杜秀英",
    sex: "男",
    age: 22,
    address: "甘肃省 张掖市",
    tel: "14723781356",
  },
  {
    id: 142762,
    name: "丁艳",
    sex: "男",
    age: 28,
    address: "澳门特别行政区 澳门半岛",
    tel: "13157638539",
  },
  {
    id: 157141,
    name: "邓静",
    sex: "女",
    age: 19,
    address: "海南省 三亚市",
    tel: "17658672240",
  },
  {
    id: 243063,
    name: "江刚",
    sex: "女",
    age: 15,
    address: "安徽省 六安市",
    tel: "18205383748",
  },
  {
    id: 351709,
    name: "乔刚",
    sex: "女",
    age: 12,
    address: "安徽省 蚌埠市",
    tel: "14143838021",
  },
  {
    id: 236140,
    name: "史平",
    sex: "男",
    age: 24,
    address: "广西壮族自治区 百色市",
    tel: "11895866733",
  },
  {
    id: 254260,
    name: "康娜",
    sex: "男",
    age: 29,
    address: "辽宁省 铁岭市",
    tel: "18783219853",
  },
  {
    id: 387769,
    name: "袁磊",
    sex: "男",
    age: 28,
    address: "重庆 重庆市",
    tel: "15243676922",
  },
  {
    id: 692436,
    name: "龙秀英",
    sex: "男",
    age: 18,
    address: "吉林省 延边朝鲜族自治州",
    tel: "18667285569",
  },
  {
    id: 304202,
    name: "姚静",
    sex: "男",
    age: 21,
    address: "吉林省 松原市",
    tel: "17962179634",
  },
  {
    id: 533032,
    name: "潘娜",
    sex: "男",
    age: 13,
    address: "湖北省 孝感市",
    tel: "14132684173",
  },
  {
    id: 773792,
    name: "萧磊",
    sex: "男",
    age: 29,
    address: "河南省 焦作市",
    tel: "13865617456",
  },
  {
    id: 171440,
    name: "邵勇",
    sex: "男",
    age: 16,
    address: "宁夏回族自治区 固原市",
    tel: "19454444332",
  },
  {
    id: 428587,
    name: "李芳",
    sex: "男",
    age: 29,
    address: "四川省 宜宾市",
    tel: "14751601674",
  },
  {
    id: 926156,
    name: "谭芳",
    sex: "女",
    age: 27,
    address: "湖南省 长沙市",
    tel: "18683429563",
  },
  {
    id: 171494,
    name: "夏秀英",
    sex: "男",
    age: 14,
    address: "陕西省 安康市",
    tel: "17732967642",
  },
  {
    id: 549517,
    name: "程娜",
    sex: "女",
    age: 24,
    address: "内蒙古自治区 锡林郭勒盟",
    tel: "18927839708",
  },
  {
    id: 999121,
    name: "武杰",
    sex: "女",
    age: 21,
    address: "新疆维吾尔自治区 博尔塔拉蒙古自治州",
    tel: "15349698338",
  },
  {
    id: 440785,
    name: "崔军",
    sex: "男",
    age: 26,
    address: "山西省 临汾市",
    tel: "14863312346",
  },
  {
    id: 113636,
    name: "廖勇",
    sex: "女",
    age: 19,
    address: "重庆 重庆市",
    tel: "18152536541",
  },
  {
    id: 109280,
    name: "崔强",
    sex: "女",
    age: 25,
    address: "河南省 安阳市",
    tel: "12838860122",
  },
  {
    id: 988885,
    name: "康秀英",
    sex: "女",
    age: 29,
    address: "广东省 佛山市",
    tel: "12637161150",
  },
  {
    id: 751542,
    name: "余磊",
    sex: "女",
    age: 15,
    address: "香港特别行政区 九龙",
    tel: "16716667565",
  },
  {
    id: 821693,
    name: "邵勇",
    sex: "女",
    age: 27,
    address: "内蒙古自治区 鄂尔多斯市",
    tel: "11869733772",
  },
  {
    id: 595152,
    name: "贺涛",
    sex: "女",
    age: 12,
    address: "吉林省 通化市",
    tel: "18172684836",
  },
  {
    id: 209059,
    name: "万勇",
    sex: "男",
    age: 27,
    address: "江苏省 淮安市",
    tel: "13523350881",
  },
  {
    id: 331199,
    name: "江艳",
    sex: "男",
    age: 29,
    address: "内蒙古自治区 包头市",
    tel: "14357786637",
  },
  {
    id: 597029,
    name: "廖磊",
    sex: "女",
    age: 22,
    address: "新疆维吾尔自治区 伊犁哈萨克自治州",
    tel: "14343812715",
  },
  {
    id: 243965,
    name: "马芳",
    sex: "女",
    age: 29,
    address: "湖南省 长沙市",
    tel: "12226278003",
  },
  {
    id: 796997,
    name: "郝霞",
    sex: "女",
    age: 29,
    address: "辽宁省 锦州市",
    tel: "15734778439",
  },
  {
    id: 735045,
    name: "吴娜",
    sex: "男",
    age: 18,
    address: "江西省 鹰潭市",
    tel: "12550200851",
  },
  {
    id: 858934,
    name: "石秀英",
    sex: "男",
    age: 21,
    address: "福建省 南平市",
    tel: "14296454005",
  },
  {
    id: 646003,
    name: "苏静",
    sex: "女",
    age: 17,
    address: "澳门特别行政区 澳门半岛",
    tel: "11456865751",
  },
  {
    id: 607537,
    name: "于磊",
    sex: "女",
    age: 25,
    address: "海南省 海口市",
    tel: "14742847575",
  },
  {
    id: 817410,
    name: "胡超",
    sex: "女",
    age: 19,
    address: "海外 海外",
    tel: "16875962137",
  },
  {
    id: 985064,
    name: "任杰",
    sex: "男",
    age: 17,
    address: "云南省 迪庆藏族自治州",
    tel: "17548787335",
  },
  {
    id: 644060,
    name: "汪秀英",
    sex: "男",
    age: 19,
    address: "香港特别行政区 九龙",
    tel: "10278533538",
  },
  {
    id: 755803,
    name: "徐磊",
    sex: "女",
    age: 26,
    address: "江苏省 徐州市",
    tel: "18721465794",
  },
  {
    id: 538130,
    name: "熊洋",
    sex: "男",
    age: 13,
    address: "吉林省 白城市",
    tel: "13491345641",
  },
  {
    id: 977696,
    name: "孟磊",
    sex: "男",
    age: 24,
    address: "香港特别行政区 香港岛",
    tel: "10541964547",
  },
  {
    id: 683438,
    name: "赵霞",
    sex: "男",
    age: 28,
    address: "重庆 重庆市",
    tel: "13085741830",
  },
  {
    id: 342123,
    name: "曾芳",
    sex: "女",
    age: 15,
    address: "湖南省 邵阳市",
    tel: "11645124878",
  },
  {
    id: 261733,
    name: "马芳",
    sex: "女",
    age: 22,
    address: "台湾 新北市",
    tel: "10255722846",
  },
  {
    id: 303578,
    name: "姜杰",
    sex: "女",
    age: 17,
    address: "黑龙江省 齐齐哈尔市",
    tel: "12581543256",
  },
  {
    id: 907392,
    name: "熊杰",
    sex: "男",
    age: 16,
    address: "广西壮族自治区 北海市",
    tel: "18941398494",
  },
];

// 得到所有学生的姓名形成的字符串：张三,李四,王五,老邓...
let nameAll = [];
students.forEach((element) => {
  nameAll.push(element.name);
});
console.log(nameAll.toString());
// 将学生数组按照年龄的升序排序

students.sort((a, b) => b.age - a.age);

console.log(students);
