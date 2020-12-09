import React from "react";
import "./error404.scss";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Error404() {
  return (
    <div className="error404">
      <h1>Error 404</h1>
      <h2>Pagina no encontrada</h2>
      <Link to="/">
        <Button type="link" ghost>
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
}
