/**
 * 将日期格式化为字符串
 * @param {Date} date 要格式化的日期对象
 * @param {string} format 格式化字符串 yyyy-年  MM-月  dd-日 HH-小时 mm-分钟 ss-秒 ms-毫秒
 * @return {string} 日期字符串
 */

function formatDate(d) {
  let date = new Date();
  let year = date.getFullYear();
  let monthIndex = date.getMonth() - 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let millisecond = date.getMilliseconds();
  let month = ["一月", "二月", "三月", "四月", "五月"];

  return d
    .replace("yyyy", year)
    .replace("MM", month[monthIndex])
    .replace("dd", day)
    .replace("HH", hours)
    .replace("mm", minute)
    .replace("ss", second)
    .replace("ms", millisecond);
}
console.log(formatDate("yyyy年MM月dd日 HH小时mm分钟ss秒ms毫秒"));
