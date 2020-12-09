import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { URL_API, API } from "../utils/constants";
import Footer from "../components/Footer";
import Loading from "../components/Loading/Loading";
import MovieCatalog from "../components/MovieCatalog";
import PaginationMovies from "../components/PaginationMovies";

export default function Popular() {
  const [movieList, setMovieList] = useState([1]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${URL_API}/movie/popular?api_key=${API}&language=es&page=${page}`
      );
      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page]);

  const onChangePage = page => {
    setPage(page);
  };

  return (
    <>
      <Row>
        <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
          <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
            Peliculas populares
          </h1>
        </Col>
      </Row>
      {/* Si me da resultados, arrojo las peliculas, de lo contrario muestro el loading. */}
      {movieList.results ? (
        <Row>
          <MovieCatalog movies={movieList} />
          <PaginationMovies
            currentPage={movieList.page}
            totalItems={movieList.total_results}
            onChangePage={onChangePage}
          />
        </Row>
      ) : (
        <Loading />
      )}
      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </>
  );
}
