const baseUrl = "http://mock.duyiedu.com/mock/72/api/";
async function fetchFn({ url, method, params }) {
  if (method === "GET" && Object.keys(params).length) {
    url +=
      "?" +
      Object.keys(params)
        .map((key) => "".concat(key, "=", params[key]))
        .join("");
  }
  const extendsObj = {};
  sessionStorage.token &&
    (extendsObj.Authorization = "Bearer " + sessionStorage.token);
  try {
    let response = await fetch(baseUrl + url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...extendsObj,
      },
      body: method === "GET" ? null : JSON.stringify(params),
    });
    let result = await response.json();
    if (result.code === 0) {
      const token = result.data._id;
      token && (sessionStorage.token = token);
    } else {
      if (result.stauts === 401) {
        window.alert("权限token不正确");
        sessionStorage.removeItem("token");
        window.location.replace("/login.html");
        return;
      }
      window.alert(result.msg);
    }

    return result.data;
  } catch (error) {
    console.log(error);
  }
}
