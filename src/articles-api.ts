import axios from "axios";
const ACCESS_KEY = "0TKdEKT3lf1Ck9aJcmJ6dU0S2qabx6998xKqlVTJASg";

axios.defaults.baseURL = "https://api.unsplash.com";
export const fetchArticles = async <T>(
  searchImg: string,
  currentPage: number
): Promise<T> => {
  try {
    const response = await axios.get<T>(
      `/search/photos?query=${searchImg}&page=${currentPage}&per_page=12&client_id=${ACCESS_KEY}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
