import React from 'react'
import Pagination from "react-bootstrap/Pagination";
import "../assets/style/sass/components/Paginate.scss"
const Paginate = ({  proposalsPerPage,
  totalProposals,
  paginate,
  current,
  currentPage,
  setCurrentPage,}) => {const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProposals / proposalsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className='paginate' >
        <Pagination className="button.icons">
          <p>
            1- {current.length} de {totalProposals} registros{" "}
          </p>
        <Pagination.Prev className='numbers' onClick={() => setCurrentPage(currentPage - 1)} />
          {pageNumbers.map((number, i) => {
            const active = currentPage;
            return (
              <Pagination.Item
                key={i}
                active={number === active}
                onClick={() => paginate(number)}
              >
                {number}
              </Pagination.Item>
            );
          })}
          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
         
        
        </Pagination>
      </div>
    );
}

export default Paginate