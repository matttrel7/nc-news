import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://nc-news-usvg.onrender.com/api",
});

export const getArticles = () => {
  return newsAPI.get("/articles").then((response) => {
    console.log(response.data.articles);
    return response.data.articles;
  });
};
