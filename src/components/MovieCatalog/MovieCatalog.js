import React from "react";
import { Col, Card } from "antd";
import { Link } from "react-router-dom";
import "./moviecatalog.scss";
import { EyeOutlined } from "@ant-design/icons";

export default function MovieCatalog(props) {
  const {
    movies: { results }
  } = props;

  return results.map(movie => (
    <Col key={movie.id} span={4} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
}

function MovieCard(props) {
  const {
    movie: { title, poster_path, id }
  } = props;
  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 230 }}
        cover={<img src={posterPath} alt={title} />}
        actions={[<EyeOutlined />]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}
