function $(select) {
  return document.querySelector(select);
}
/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
let checkBox = $("input[type=checkbox]");
function setSubmitButtonStatus() {
  let submit = $("button[type=submit]");
  submit.disabled = !checkBox.checked;
}
checkBox.onclick = setSubmitButtonStatus;
/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
  let send = $(".right");
  console.log(pho, send);
  send.disabled = !pho.value.length === 11;
}
let pho = $(".txt");
pho.onblur = setSendCodeButtonStatus;
/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
  let select = $("select");
  let op = select.children;
  let choose = $("#selChoose");

  for (let index = 0; index < op.length; index++) {
    op[index].onclick = function () {
      console.log(choose);
      choose.innerText += op[index].innerText;
    };
  }

  //   choose.innerText = choose.innerText + likes.toString();
}
setSelectedLoves();
