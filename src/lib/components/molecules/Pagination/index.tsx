import React from 'react';

import './Pagination.styles.scss';

import { PaginationProps } from './Pagination.types';
import { DOTS, getPaginationRange } from './Pagination.utils';
import Button from '../../atoms/Button';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  siblingCount = 1,
  disabled = false,
  onPageChange,
}) => {
  const pages = getPaginationRange(
    currentPage,
    totalPages,
    siblingCount
  );

  return (
    <div className="pagination">

      <Button
        disabled={disabled || currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </Button>

      {pages.map((page, index) => {
        if (page === DOTS) {
          return (
            <span
              key={`dots-${index}`}
              className="pagination__dots"
            >
              ...
            </span>
          );
        }

        return (
          <Button
            key={page}
            className={
              currentPage === page
                ? 'pagination__button pagination__button--active'
                : 'pagination__button'
            }
            onClick={() => onPageChange(Number(page))}
          >
            {page}
          </Button>
        );
      })}

      <Button
        disabled={disabled || currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </Button>

    </div>
  );
};

export default Pagination;