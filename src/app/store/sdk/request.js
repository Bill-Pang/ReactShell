import axios from "axios"; //引入axios

let instance = axios.create({
  baseURL: "http://biaoblog.run:3000",
  timeout: 5000,
  headers: {
    // "content-type": "application/x-www-form-urlencoded",
  },
});

// http request 拦截器
instance.interceptors.request.use(
  (config) => {
    console.log(config);
    const token = "1";
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token; //请求头加上token
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  (response) => {
    console.log(response);
    //拦截响应，做统一处理
    // if (response.data.code) {
    //   switch (response.data.code) {
    //     case 1002:
    //       store.state.isLogin = false;
    //       router.replace({
    //         path: "login",
    //         query: {
    //           redirect: router.currentRoute.fullPath,
    //         },
    //       });
    //   }
    // }
    return response;
  },
  //接口错误状态处理，也就是说无响应时的处理
  (error) => {
    return Promise.reject(error.response.status); // 返回接口返回的错误信息
  }
);

export default instance;
