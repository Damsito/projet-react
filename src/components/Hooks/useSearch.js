import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const useSearch = (selectName, selectdefaultValue) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let matchQueryTitle = searchParams.get("q") || "";
  let matchQuerySelect = searchParams.get(selectName) || selectdefaultValue;
  const [value, setValue] = useState(matchQueryTitle);
  const [selectValue, setSelectValue] = useState(matchQuerySelect);
  const putAllQueryParameters = (
    valueProps = null,
    selectValueProps = null
  ) => {
    let query = {};
    if (valueProps) {
      query = { q: valueProps };
    }
    if (selectValueProps || selectValue) {
      query[selectName] = selectValueProps || selectValue;
    }
    setSearchParams(query);
  };
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
  return {
    value,
    selectValue,
    matchQueryTitle,
    matchQuerySelect,
    handleChange,
    submitButton,
    handleChangeSelect,
  };
};
export default useSearch;
