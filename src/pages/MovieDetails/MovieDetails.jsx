import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>Movies details #{movieId}</div>;
};

export default MovieDetails;
