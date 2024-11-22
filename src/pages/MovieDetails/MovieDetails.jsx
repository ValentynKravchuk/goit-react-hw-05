import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../service/apiMovies";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieDetails(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading data ....</h2>;
  }

  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        width="200"
      />
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
