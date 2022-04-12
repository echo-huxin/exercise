(async () => {
  init();
  function init() {
    initAddEvent();
  }
  function initAddEvent() {
    const signin = document.querySelector(".signin");
    signin.addEventListener("click", function (e) {
      e.preventDefault();
      submitForm();
    });
  }
  async function submitForm() {
    if (!checkFrom(userName.value, userPassword.value)) {
      return;
    }
    let res = await fetchFn({
      url: "/user/login",
      method: "POST",
      params: {
        loginId: userName.value,
        loginPwd: userPassword.value,
      },
    });
    if (res._id === sessionStorage.token) {
      window.location.replace("/");
    }
  }
  function checkFrom(userName, password) {
    console.log(userName);
    switch (true) {
      case !userName:
        window.alert("用户名不能为空");
        return false;
      case !password:
        window.alert("用户密码不能为空");
        return false;
      default:
        return true;
    }
  }
})();
