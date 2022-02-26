import React from "react";
function SelectCompetition({ value, handleChange }) {
  return (
    <div className={"flex w-full justify-center"}>
      <form className="w-full max-w-sm mb-1 ">
        <div className="flex items-center border-b border-teal-500 py-2 ">
          <select
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            value={value}
            onChange={handleChange}
          >
            <option value="352">Premier League</option>
            <option value="1243">ChampionsLeague</option>
          </select>
          <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          >
            Rechercher une compétition
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectCompetition;
