import React from "react";
import { Row, Col } from "antd";
import useFetch from "../hooks/useFetch";
import SliderMovies from "../components/SliderMovies";
import { URL_API, API } from "../utils/constants";
import MovieList from "../components/MovieList/MovieList";
import Footer from "../components/Footer/";

export default function Home() {
  const newMovie = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=es&page=1`
  );
  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=es&page=1`
  );
  const topRated = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=es&page=1`
  );

  return (
    <>
      <SliderMovies movies={newMovie} />
      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <MovieList movies={popularMovies} title="Peliculas populares" />
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <MovieList movies={topRated} title="Peliculas mejor valoradas" />
        </Col>
      </Row>
      <Footer />
    </>
  );
}
