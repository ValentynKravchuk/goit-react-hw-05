import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/apiMovies";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
