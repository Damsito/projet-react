import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VerticalList from "../components/VerticalList";
import Input from "../components/Input";
import SelectCompetition from "../components/SelectCompetition";
import useSearch from "../components/Hooks/useSearch";

function Home() {
  const {
    value,
    selectValue,
    matchQueryTitle,
    matchQuerySelect,
    handleChange,
    submitButton,
    handleChangeSelect,
  } = useSearch("competition", "352");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_MATCHES", select: matchQuerySelect });
  }, [dispatch, matchQuerySelect]);
  const data = useSelector((state) => state.matches);

  let matches = data.filter((m) => {
    return (
      m.home_team.name.toUpperCase().includes(matchQueryTitle.toUpperCase()) ||
      m.away_team.name.toUpperCase().includes(matchQueryTitle.toUpperCase())
    );
  });
  return (
    <section className="overflow-hidden text-gray-700 ">
      <div className="w-full mx-auto p-3 sm:p-6 lg:p-12">
        <Input
          value={value}
          submitButton={submitButton}
          handleChange={handleChange}
        />
        <SelectCompetition
          selectValue={selectValue}
          handleChangeSelect={handleChangeSelect}
        />
        <VerticalList matches={matches} />
      </div>
    </section>
  );
}

export default Home;
