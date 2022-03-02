function $(select) {
  return document.querySelector(select);
}
/**
 * 根据协议的多选框是否选中设置注册按钮状态
 */
function setSubmitButtonStatus() {
  let checkBox = $("input[type=checkbox]");
  let submit = $("button[type=submit]");
  submit.disabled = !checkBox.checked;
}
/**
 * 根据手机号文本框中的文本，设置发送验证码按钮的状态
 */
function setSendCodeButtonStatus() {
  let pho = $(".txt");
  let send = $(".right");
  console.log(pho, send);
  send.disabled = !pho.value.length === 11;
}

/**
 * 根据当前选中的爱好，设置已选择爱好文本
 */
function setSelectedLoves() {
  let select = $("select");
  let op = select.children;
  let choose = $("#choose");
  let likes = [];
  for (let index = 0; index < op.length; index++) {
    console.log(op[index].selected);
    if (op[index].selected) {
      likes.push(op[index].innerText);
    }
  }

  choose.innerText = choose.innerText + likes.toString();
}
