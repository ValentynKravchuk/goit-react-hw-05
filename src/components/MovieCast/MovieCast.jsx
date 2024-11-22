import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../service/apiMovies";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieCast(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
