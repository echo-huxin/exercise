// 完成表单验证
function validateLoginId() {
  let input = document.querySelector("[type=text]");
  let div = document.querySelector("#loginId");
  let ms = document.querySelector(".msg");
  let err = "";
  let text = input.value;
  if (!text) {
    err = "账号不能为空";
  } else if (text.length < 0 || text.length > 16) {
    err = "账号长度为6-16位";
  }
  ms.innerText = err;
  div.className = err ? "form-item err" : "form-item";
  return !err;
}

function validatePassword() {
  console.log(123);
  let input = document.querySelector("[type=password]");
  let div = document.querySelector("#loginPassword");
  let ms = document.querySelector("#loginPassword .msg");
  let err = "";
  let text = input.value;

  if (!text) {
    console.log("ss");
    err = "密码不能为空";
  } else if (text.length < 6 || text.length > 16) {
    err = "密码长度为6-16位";
  }
  ms.innerText = err;
  div.className = err ? "form-item err" : "form-item";
  return !err;
}
function validateForm() {
  let id = validateLoginId();
  let password = validatePassword();
  return id && password;
}

document
  .querySelector("[type=text]")
  .addEventListener("input", validateLoginId);
document
  .querySelector("[type=password]")
  .addEventListener("input", validatePassword);
document.querySelector("button").addEventListener("click", function (e) {
  let result = validateForm();
  if (!result) {
    e.preventDefault();
  }
});
