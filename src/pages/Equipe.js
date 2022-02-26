import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectCountry from "../components/SelectCountry";
import Team from "../components/Team";
import Input from "../components/Input";

function Equipe() {
  const [searchParams, setSearchParams] = useSearchParams();
  let matchQueryTitle = searchParams.get("q") || "";

  function putAllQueryParameters({ pays }) {
    let query;
    if (value) {
      query = { q: value };
    }
    if (pays) {
      query = { ...query, pays };
    }
    setSearchParams(query);
  }
  let matchQueryCountry = searchParams.get("pays") || "42";
  const [value, setValue] = useState(matchQueryTitle);
  const [selectedValue, setSelectedValue] = useState(matchQueryCountry);

  const handleChangeSelect = (event) => {
    setSelectedValue(event.target.value);
    putAllQueryParameters({ pays: event.target.value || selectedValue });
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.key === "Enter") {
      putAllQueryParameters({ pays: selectedValue || null });
    }
  };
  const submitButton = (event) => {
    event.preventDefault();
    putAllQueryParameters({ pays: selectedValue || null });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_TEAMS", select: matchQueryCountry });
  }, [dispatch, matchQueryCountry]);
  const data = useSelector((state) => state.teams);
  let teams = data.filter((m) => {
    return m.name.toUpperCase().includes(matchQueryTitle.toUpperCase());
  });
  console.log(teams);
  return (
    <div className="flex flex-wrap -m-1 md:-m-2 mt-2 p-3">
      <Input
        value={value}
        submitButton={submitButton}
        handleChange={handleChange}
        placeholder={"Equipe"}
      />
      <SelectCountry value={selectedValue} handleChange={handleChangeSelect} />
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
