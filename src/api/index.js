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
    const { code, data } = res.data;
    if (code === "200") {
      return data;
    }
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
