import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../service/apiMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
