import { paginationButtonStyles } from "../../../InlineStyles/InlineStyles";
import "./pagination.css";

function Pagination({ totalTours, toursPerPage, setCurrentPage }) {
  const Pages = [];

  for (let i = 1; i <= Math.ceil(totalTours / toursPerPage); i++) {
    Pages.push(i);
  }

  return (
    <div>
      {Pages?.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            style={paginationButtonStyles.pageButton}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
