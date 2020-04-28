import axios from "./index";

export const getAllArticles = () => {
  return axios.get("/yuque/allArticles");
};

export const getArticleDsc = (slug) => {
  return axios.get("/yuque/articleDsc", { params: { slug } });
};
