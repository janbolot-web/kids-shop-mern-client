import React from "react";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";

const Alert = ({ setAlert,message }) => {
  return (
    <div
      id="alert-3"
      className="fixed top-20 right-10 z-20 flex items-center p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
      role="alert"
    >
      <AiFillInfoCircle color="green" size={20} />
      <div className="mx-3 text-md font-medium text-green-700 dark:text-green-800">
        {message}
      </div>
      <AiOutlineClose
        onClick={() => setAlert(false)}
        color="green"
        size={20}
        className={"cursor-pointer "}
      />
    </div>
  );
};

export default Alert;
