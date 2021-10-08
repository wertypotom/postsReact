import React from "react";
import { getPagesArray } from "../../../utils/pages";

function Pagination({ totalPages, page, changedPage }) {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => {
        return (
          <span
            onClick={() => changedPage(p)}
            key={p}
            className={page === p ? "page page__current" : "page"}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
}

export default Pagination;
