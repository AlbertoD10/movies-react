import React from "react";
import "./slidermovies.scss";
import { Carousel, Button } from "antd";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function SliderMovies(props) {
  const { movies } = props;

  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;

  return (
    <Carousel autoplay className="slider-movies">
      {results.map(movies => (
        <Movie movies={movies} key={movies.id} />
      ))}
    </Carousel>
  );
}

function Movie(props) {
  const {
    movies: { id, backdrop_path, title, overview }
  } = props;
  const backdropPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <Button className="buttonn" type="primary">
              Ver más
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
