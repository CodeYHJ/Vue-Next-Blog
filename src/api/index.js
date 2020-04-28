import axios from "axios";

const isDev = process.env.NODE_ENV === "development" ? true : false;

const config = {
  baseURL: isDev ? "/api" : "https://api.codeyhj.cn",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 8000,
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (cfg) => {
    // if (cfg.method === 'post') {
    //     cfg.data = qs.stringify(cfg.data)
    // }
    return cfg;
  },
  (err) => {
    console.log(err, "请求报错");
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    const { code, message: msg, data } = res.data;
    if (code === "200") {
      return data;
    }
  },
  (err) => {
    let msg = null;
    if (err.message === "Request failed with status code 404") {
      msg = "连接失败，请检查网络是否正常";
    }
    message.error(msg || err.message);

    return Promise.reject(err);
  }
);

export default instance;
