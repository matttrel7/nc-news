import axios from "axios";

const newsAPI = axios.create({
  baseURL: "https://nc-news-usvg.onrender.com/api",
});

export const getArticles = () => {
  return newsAPI.get("/articles").then((response) => {
    return response.data.articles;
  });
};

export const getArticlesById = (id) => {
  return newsAPI.get(`/articles/${id}`).then((response) => {
    return response.data.article;
  });
};

export const getCommentsById = (id) => {
  return newsAPI.get(`/articles/${id}/comments`).then((response) => {
    return response.data.comments;
  });
};
