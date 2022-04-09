/**
 * 根据页码获取学生数据，返回Promise
 * @param {Number} page 页码
 */
function fetchStudents(page) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error(`网络错误！获取第${page}页数据失败！`));
        return;
      }
      // 模拟学生数据
      const stus = new Array(10).fill(null).map((d, i) => ({
        id: `NO.${(page - 1) * 10 + i + 1}`,
        name: `姓名${(page - 1) * 10 + i + 1}`,
      }));
      resolve(stus);
    }, Math.floor(Math.random() * 5000));
  });
}

// 利用 fetchStudents 函数，完成下面的练习

// 获取1-10页的学生，最终按照页码的顺序合并成一个数组，任何一页的数据获取出现错误，则任务不再继续，打印错误消息
// const pro = new Array(10)
//   .fill(10)
//   .map((e, i) => i + 1)
//   .map((e) => {
//     return fetchStudents(e);
//   });
// Promise.all(pro)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((erro) => console.log(erro));
// 获取1-10页的学生，最终按照页码的顺序合并成一个数组，如果某些页码的数据获取失败，就不加入该数据即可
const pro = new Array(10)
  .fill(10)
  .map((e, i) => i + 1)
  .map((e) => {
    return fetchStudents(e);
  });

// Promise.allSettled(pro)
//   .then((res) => {
//     return res
//       .filter((el) => {
//         return el.status === "fulfilled";
//       })
//       .map((el) => {
//         return el.value;
//       });
//   })
//   .then((res) => {
//     console.log(res.flat());
//   });

// 获取1-10页的学生，打印最先获取到的数据，如果全部都获取失败，则打印所有的错误消息
Promise.any(pro)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
// 获取1-10页的学生，输出最先得到的结果（有结果输出结果，有错误输出错误）
