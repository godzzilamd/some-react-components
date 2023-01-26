import classnames from "classnames";
import { UilAngleLeftB } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";

import { usePagination } from "../../hooks/usePagination";

export interface PaginationProps {
  perPage: number;
  totalCount: number;
  currentPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  siblingCount: number;
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  perPage,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    perPage,
  });

  const onNext = () => {
    onPageChange((currentPage) => currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange((currentPage) => currentPage - 1);
  };

  let lastPage = paginationRange![paginationRange!.length - 1];

  return paginationRange!.length > 1 ? (
    <ul className={"pagination-container"}>
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <UilAngleLeftB className="arrow left" size="20" color="#006666" />
      </li>
      {paginationRange!.map((pageNumber, idx) => {
        if (pageNumber === "...") {
          return (
            <li key={pageNumber + idx} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber + idx}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <UilAngleRightB className="arrow right" size="20" color="#006666" />
      </li>
    </ul>
  ) : null;
};

export default Pagination;
