import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectCountry from "../components/SelectCountry";
import Team from "../components/Team";
import Input from "../components/Input";
import useSearch from "../components/Hooks/useSearch";

function Equipe() {
  const  {
    value,
    selectValue,
    matchQueryTitle,
    matchQuerySelect,
    handleChange,
    submitButton,
    handleChangeSelect
  } = useSearch("pays", "42")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_TEAMS", select: matchQuerySelect });
  }, [dispatch, matchQuerySelect]);
  const data = useSelector((state) => state.teams);
  let teams = data.filter((m) => {
    return m.name.toUpperCase().includes(matchQueryTitle.toUpperCase());
  });
  return (
    <div className="flex flex-wrap -m-1 md:-m-2 mt-2 p-3">
      <Input
        value={value}
        submitButton={submitButton}
        handleChange={handleChange}
        placeholder={"Equipe"}
      />
      <SelectCountry value={selectValue} handleChange={handleChangeSelect} />
      {teams.map((team) => {
        return (
          <div key={team.team_id} className="flex flex-wrap w-1/2 mt-3">
            <div className="w-full p-1 md:p-2">
              <Team team={team} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Equipe;
