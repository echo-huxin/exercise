let user = function (userName, userpassword) {
  this.userName = userName;
  this.userpassword = userpassword;
};

let VipUser = function (userName, userpassword) {
  user.call(this, userName, userpassword);
  this.freeVideo = true;
};

let vipUser = new VipUser("张三", "12323");

console.log(vipUser.userName);

user.prototype.deleteAd = function () {
  console.log("跳过广告");
};

Object.setPrototypeOf(VipUser.prototype, user.prototype);

VipUser.deleteAd();
