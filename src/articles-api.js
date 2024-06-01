import axios from "axios";
const ACCESS_KEY = "0TKdEKT3lf1Ck9aJcmJ6dU0S2qabx6998xKqlVTJASg";

axios.defaults.baseURL = "https://api.unsplash.com";
export const fetchArticles = async (searchImg, currentPage) => {
  const response = await axios.get(
    `/search/photos?query=${searchImg}&page=${currentPage}&per_page=12&client_id=${ACCESS_KEY}`
  );
  return response.data;
};
