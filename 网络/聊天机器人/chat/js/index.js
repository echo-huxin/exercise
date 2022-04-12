(() => {
  init();
  async function init() {
    console.log(123);
    getUserInfo();
  }
  async function getUserInfo() {
    let res = await fetchFn({
      url: "chat/history",
      method: "GET",
      params: {
        page: 0,
        size: 10,
      },
    });
    console.log(res);
  }
})();
