import React from "react";
const SelectCompetition = React.memo(({ selectValue, handleChangeSelect }) => {
  return (
    <div className={"flex w-full justify-center"}>
      <form className="w-full sm:max-w-sm md:max-w-md lg:max-w-3xl mb-1">
        <div className="flex items-center border-b border-teal-500 py-2 ">
          <select
            value={selectValue}
            onChange={handleChangeSelect}
            className="form-select form-control  sm:form-select-sm lg:form-select-lg appearance-none
            block
            w-full
            px-2
            py-1
            sm:text-sm
            lg:text-2xl
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="352">Premier League</option>
            <option value="1243">ChampionsLeague</option>
          </select>
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 lg:text-2xl
           border-teal-500 hover:border-teal-700 sm:text-sm border-4 text-white py-1 rounded">
            Rechercher une compétition
          </button>
        </div>
      </form>
    </div>
  );
})

export default SelectCompetition;
