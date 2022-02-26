import React from "react";
import VerticalList from "./VerticalList";
function Input({ value, handleChange, submitButton, placeholder }) {
  return (
    <div className={"flex w-full justify-center"}>
      <form className="w-full max-w-sm mb-1 ">
        <div className="flex items-center border-b  border-teal-500 py-2 ">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder={placeholder}
            aria-label={placeholder}
            value={value}
            onChange={handleChange}
            onKeyDown={handleChange}
          />
          <button
            onClick={submitButton}
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 rounded"
          >
            Rechercher
          </button>
        </div>
      </form>
    </div>
  );
}
VerticalList.defaultProps = {
  placeholder: "Match",
};

export default Input;
