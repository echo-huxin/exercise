let a = {
  b: {
    d: function () {
      console.log("12323", this.ss);
    },
    ss: "颠三倒四",
  },
};
a.b.d();

a.prototype.kk = function () {
  console.log(this);
};
