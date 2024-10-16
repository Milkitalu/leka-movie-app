import React from 'react'

function Pagination({totalPages, currentPage, onPageChange}) {

    const pages = [...Array(totalPages).keys].map(num => num + 1);

  return (
    <div>
        {pages.map((page) => (
            <button 
              key={page}
              onClick={() => onPageChange(page)}
              className=''
              >
                {page}
            </button>
        ))}
    </div>
  );
};

export default Pagination