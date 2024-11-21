import axios from "axios";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRiZjU1ZTk2YThjOTlhNDNjYjY0NzNkNjQ4NzQ2NCIsIm5iZiI6MTczMjExODM3Mi43NDUyNjI0LCJzdWIiOiI2NzNkZWQ5NmQzZmYxNDkwNmY5NjJjYWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lEk-5hnSSDaXbsVEHuEkRlS_AyF30ynRzAEyGQvu4vI",
      },
    }
  );
  return response.data.results;
};
