import React from "react";

import { Pagination } from "antd";

export default function PaginationMovies(props) {
  const { currentPage, totalItems, onChangePage } = props;

  return (
    <Pagination
      showQuickJumper
      className="pagination"
      current={currentPage}
      total={totalItems} //total de paginas en total
      pageSize={20} //total de items que hay por pagina
      onChange={onChangePage} //onChange envia la pagina automaticamente, del otro lado solo la recibo.
    />
  );
}
