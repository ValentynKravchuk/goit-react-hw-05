import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
