import React from "react";

import Button from "../../FormElements/Button/Button";
import "./Pagination.css";

const Pagination = ({ productsPerPage, totalPtoducts, paginate, currPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPtoducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Button className={`pagination__btns ${currPage === number && "pagination__active"}`} onClick={() => {paginate(number)}} href="!#">{number}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
