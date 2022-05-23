import React from "react";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={`h-screen w-screen  bg-black/60 z-30 fixed flex items-center justify-center top-0 left-0 `}
      onClick={() => setActive(false)}
    >
      <div
        className={" w-11/12 h-5/6   overflow-auto  rounded-md bg-white"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      <button
        onClick={() => setActive(false)}
        type="button"
        className="absolute right-20 top-20 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Modal;
