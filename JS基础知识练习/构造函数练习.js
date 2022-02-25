/* 
利用构造函数创建一幅扑克牌
*/
function Poker(color, num) {
  num === 1 && (num = "A");
  if (num >= 11) {
    switch (num) {
      case 11:
        num = "J";
        break;
      case 12:
        num = "Q";
        break;
      case 13:
        num = "K";
        break;
      case 14:
        num = "Joker";
        break;
      default:
        num = "King";
        break;
    }
  }

  this.colors = ["♠", "♥", "♣", "♦"];
  this.print = function () {
    var temp =
      this.colors[color - 1] === undefined ? " " : this.colors[color - 1];
    console.log(temp + num);
  };
}

function Pokers() {
  let pokers = [];
  for (var i = 1; i <= 13; i++) {
    for (var j = 1; j <= 4; j++) {
      pokers.push(new Poker(j, i));
    }
  }
  pokers.push(new Poker(0, 14));
  pokers.push(new Poker(0, 15));
  this.print = function () {
    for (var i = 0; i < pokers.length; i++) {
      pokers[i].print();
    }
  };
}

let pokers = new Pokers();
pokers.print();
