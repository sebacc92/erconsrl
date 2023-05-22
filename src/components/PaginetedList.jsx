/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import Card from './Card';

function Pagination({ itemsPerPage, totalItems, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="flex justify-center mt-8">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`border-2 border-gray-800 py-2 px-4 mx-2 cursor-pointer hover:bg-red-500 hover:border-red-500 hover:text-white ${
              currentPage === number && 'bg-red-700 border-red-700 text-white'
            }`}
            onClick={() => {
              setCurrentPage(number);
              paginate(number);
            }}
          >
            <button type="button" className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function PaginatedList({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="grid justify-items-center align-items-center gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((item) => (
          <Card
            key={item.id}
            description={item.description}
            images={item.images}
            location={item.location}
            categoria={item.categoria}
            titulo={item.titulo}
          />
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
}

export default PaginatedList;
