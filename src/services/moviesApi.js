import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "f09fb537b7ff9fc6acf20b99acef8c75";

const api = {
  getTrendingMovies(page) {
    return axios
      .get(`trending/movie/week?api_key=${API_KEY}&page=${page}`)
      .then((response) => response.data.results);
  },
  getByQueryMovies(query, page) {
    return axios
      .get(`search/movie?api_key=${API_KEY}&page=${page}&query=${query}`)
      .then((response) => response.data.results);
  },
  getMovieById(id, option = "", page = "") {
    return axios.get(`movie/${id}${option}?api_key=${API_KEY}${page}`);
  },
};

export default api;
