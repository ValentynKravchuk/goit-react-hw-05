import MovieList from "../../components/MovieList/MovieList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
