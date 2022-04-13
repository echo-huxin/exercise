$(".checkAll").change(function () {
  $("[type='checkbox']").not(this).prop("checked", $(this).prop("checked"));
});
$(".num a").click(function () {
  if ($(this).text() === "-") {
    changeNumber($(this).next(), -1);
  } else {
    changeNumber($(this).prev(), +1);
  }
  return false;
});
$("[type='checkbox']").change(function () {
  setTotal();
});
$(".del").click(function (e) {
  e.preventDefault();
  $(this).parents(".item").remove();
  setTotal();
});
$(".delChecked").click(function () {
  $(":checked").not($(".checkAll")).parents(".item").remove();
  setTotal();
  return false;
});
$(".clearAll").click(function () {
  $(".checkItem").parents(".item").remove();
  setTotal();
  return false;
});
function changeNumber(node, figure) {
  let count = +node.val() + figure;
  if (count <= 0) {
    count = 1;
  }
  node.val(count);
  setTotal();
}

function setTotal() {
  const selGoods = $(":checked").not($(".checkAll"));
  let sum = 0;
  selGoods.each((i, node) => {
    const price = +$(node)
      .parents(".item")
      .find(".price em")
      .text()
      .replace("￥", "");
    const count = +$(node).parents(".item").find(".txt").val();
    sum += price * count;
  });
  $(".nums em").text(selGoods.length);
  $(".sums em").text(sum.toFixed(2));
}
