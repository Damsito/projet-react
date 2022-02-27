import React, {useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import VerticalList from "../components/VerticalList";
import { useSearchParams } from "react-router-dom";
import Input from "../components/Input";
import SelectCompetition from "../components/SelectCompetition";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  let matchQueryTitle = searchParams.get("q") || "";
  let matchQueryCompetition = searchParams.get("competition") || "352";

  const [value, setValue] = useState(matchQueryTitle);
  const [selectValue, setSelectValue] = useState(matchQueryCompetition);

  const putAllQueryParameters = (valueProps = null, selectValueProps = null) => {
    let query;
    if(valueProps){
      query = {q: valueProps}
    }
    if(selectValueProps || selectValue){
      query = {...query, competition: selectValueProps || selectValue}
    }
    setSearchParams(query);
  }
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.key === "Enter") {
      putAllQueryParameters(event.target.value);
    }
  };

  const handleChangeSelect = (event) => {
    setSelectValue(event.target.value);
    putAllQueryParameters(value, event.target.value);
  };

  const submitButton = (event) => {
    event.preventDefault();
    putAllQueryParameters(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_MATCHES", select: matchQueryCompetition });
  }, [dispatch, matchQueryCompetition]);
  const data = useSelector((state) => state.matches);

  let matches = data.filter((m) => {
    return (
      m.home_team.name.toUpperCase().includes(matchQueryTitle.toUpperCase()) ||
      m.away_team.name.toUpperCase().includes(matchQueryTitle.toUpperCase())
    );
  });
  return (
    <section className="overflow-hidden text-gray-700 ">
      <div className="container px-3 py-2 mx-auto lg:pt-12 lg:px-32">
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
