import React from 'react'

function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({length: totalPages}, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i+1)}
          className={`mx-1 px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          {i+1}
        </button>
      ))}
    </div>
  )
}


export default Pagination;
