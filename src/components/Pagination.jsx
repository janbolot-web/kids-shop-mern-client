import React from "react";

const Pagination = ({ currentPage, pageCount, setPage }) => {
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <nav className="mt-10">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="block disabled:bg-gray-200 py-2 px-3 ml-0 leading-tight border-none text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:disabled:opacity-75 dark:disabled:hover:bg-gray-800 disabled:hover:text-gray-400"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {pages.length &&
          pages.map((page, index) => (
            <li
              key={index}
              className={page === currentPage ? "text-white bg-gray-900" : ""}
            >
              <button
                href="#"
                className={
                  "py-2  px-3 leading-tight block  border border-none hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }
                onClick={() => setPage(page)}
              >
                {page}
              </button>
            </li>
          ))}
        <li>
          <button
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === pages.length}
            className="block disabled:bg-gray-200 py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-none hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:disabled:opacity-75 dark:disabled:hover:bg-gray-800 disabled:hover:text-gray-400"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
