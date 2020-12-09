import React, { useState, useEffect } from "react";
import { Col, Row, Input } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constants";
import "./search.scss";

function Search(props) {
  const { location, history } = props;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=es&query=${s}&page=1&include_adult=true`
      );
      const movies = await response.json();

      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [location.search]);

  const onChangeSearch = e => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Row>
        <Col offset={6} span={12} className="search">
          <h1>Buscar pelicula</h1>
          <Input
            value={searchValue}
            placeholder="Escriba el nombre la pelicula"
            onChange={onChangeSearch}
            style={{ width: 600 }}
          />
        </Col>
      </Row>
      {movieList.results && (
        <Row>
          <MovieCatalog movies={movieList} />
        </Row>
      )}
      <Footer />
    </>
  );
}

export default withRouter(Search);
