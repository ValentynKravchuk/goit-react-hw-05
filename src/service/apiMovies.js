import axios from "axios";
const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRiZjU1ZTk2YThjOTlhNDNjYjY0NzNkNjQ4NzQ2NCIsIm5iZiI6MTczMjExODM3Mi43NDUyNjI0LCJzdWIiOiI2NzNkZWQ5NmQzZmYxNDkwNmY5NjJjYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lEk-5hnSSDaXbsVEHuEkRlS_AyF30ynRzAEyGQvu4vI";

const BASE_URL = "https://api.themoviedb.org/3";
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data.results;
};
export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    headers: { accept: "application/json", Authorization: `Bearer ${API_KEY}` },
  });
  return data;
};
