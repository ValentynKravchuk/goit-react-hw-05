import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import NotFound from "../pages/NotFound/NotFound";
import Header from "./Header/Header";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
