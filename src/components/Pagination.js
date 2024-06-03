import { React, useState } from 'react'

const Pagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexofLastItem = currentPage * itemsPerPage;
    const indexofFirstItem = indexofLastItem - itemsPerPage;
    const currentItems = data.slice(indexofFirstItem, indexofLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleNextPage = () => {
      if(currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
    const handlePreviousPage = () => {
      if(currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }; 
    const PaginationButtons = () => (
      <div className='pagination'>
      <button onClick={handlePreviousPage} disabled={currentPage === 1} className='button'>Prev</button>
      <span className='page-num'>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages} className='button'>Next</button>
      </div>
    );
    return {
      currentItems,PaginationButtons,currentPage,totalPages,handleNextPage,handlePreviousPage
    };
};

export default Pagination;
