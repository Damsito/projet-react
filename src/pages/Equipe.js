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
    <div className="flex flex-wrap mt-2 p-3">
      <Input
        value={value}
        submitButton={submitButton}
        handleChange={handleChange}
        placeholder={"Equipe"}
      />
      <SelectCountry value={selectValue} handleChange={handleChangeSelect} />
      <div style={{width: "100%"}} className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
        {teams.map((team) => {
          return (
                <Team key={team.team_id} team={team} />
          );
        })}
      </div>
    </div>
  );
}
export default Equipe;
