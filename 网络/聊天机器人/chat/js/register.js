(async () => {
  let userNameIsExsit = true;
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
    userName.addEventListener("blur", async function () {
      let res = await fetchFn({
        url: `user/exists/`,
        method: "GET",
        params: {
          loginId: userName.value,
        },
      });
      console.log(res.data);
      userNameIsExsit = res.data;
    });
  }
  async function submitForm() {
    if (
      !checkFrom(
        userName.value,
        userPassword.value,
        userPassword.value,
        userConfirmPassword.value
      )
    ) {
      return;
    } else if (userNameIsExsit) {
      //   window.alert("用户名以存在");
      //   return;
    }
    let res = await fetchFn({
      url: "/user/reg",
      method: "POST",
      params: {
        loginId: formContainer.value,
        nickname: userPassword.value,
        loginPwd: userPassword.value,
      },
    });
    if (res.code === 0) {
      window.location.replace("/");
    }
  }
  function checkFrom(iD, nickName, pwd, affirmPwd) {
    switch (true) {
      case !iD:
        window.alert("名不能为空");
        return false;
      case !nickName:
        window.alert("昵称不能为空");
        return false;
      case !pwd:
        window.alert("密码不能为空");
        return false;
      case pwd !== affirmPwd:
        window.alert("两次密码不相同");
        return false;
      default:
        return true;
    }
  }
})();
