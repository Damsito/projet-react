import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
function SelectCountry({ value, handleChange }) {  const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_COUNTRIES" });
    }, [dispatch]);
    const countries = useSelector((state) => state.countries);
    console.log(countries)
  return (
    <div className={"flex w-full justify-center"}>
      <form className="w-full max-w-sm mb-1 ">
        <div className="flex items-center border-b border-teal-500 py-2 ">
          <select
            value={value}
            onChange={handleChange}
            className="form-select form-control  form-select-sm appearance-none
            block
            w-full
            px-2
            py-1
            text-sm
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label=".form-select-sm example"
          >
              {countries.map(c => (
                  <option key={c.country_id} value={c.country_id}>{c.name}</option>
              ))}
          </select>
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 rounded">
            Rechercher un pays
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectCountry;
