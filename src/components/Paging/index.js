import React from 'react';
import styles from './Paging.scss';

const Paging = ({ itemsPerPage, page, nOfPages, onPageChange }) => {
  const pages = getPages(nOfPages);
  return (
    <div className='products-pagination'>
      <ul className='paginator'>
        <li onClick={() => onPageChange(page ? page - 1 : 0)}>‹</li>
          {pages.map(index => {
            return (
              <Page
                key={`page ${index}`}
                label={index+1}
                value={index}
                active={page === index}
                onClick={onPageChange}
              />
            );
          })}
        <li onClick={() => onPageChange(page === pages.length - 1 ? pages.length - 1 : page + 1)}>›</li>
      </ul>
    </div>
  );
}

const getPages = (nOfPages) => {
  let pages = [];
  for(let i = 0; i < nOfPages; i++) {
    pages.push(i);
  }
  return pages;
}

const Page = ({ label, value, active, onClick  }) => (
  <li data-state={active ? 'active' : ''} onClick={() => onClick(value)}>
    {label}
  </li>
);


export default Paging;
