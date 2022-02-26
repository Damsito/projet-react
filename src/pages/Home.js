import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import VerticalList from "../components/VerticalList";
import {useSearchParams} from "react-router-dom";
import Input from "../components/Input";
import SelectCompetition from "../components/SelectCompetition";

function Home(){
    const [searchParams, setSearchParams] = useSearchParams();
    let matchQueryTitle = searchParams.get("q") || "";
    let matchQueryCompetition = searchParams.get("competition") || "352";
    const [value, setValue] = useState(matchQueryTitle);
    const [selectedValue, setSelectedValue] = useState(matchQueryCompetition);

    const handleChange = (event) => {
        setValue(event.target.value);
        if (event.key === "Enter") {
            setSearchParams(event.target.value ? { q: event.target.value } : {});
        }
    };
    const handleChangeSelect = (event) => {
        setSelectedValue(event.target.value);
        setSearchParams(event.target.value ? { competition: event.target.value } : {});
    };
    const submitButton = (event) => {
        event.preventDefault();
        setSearchParams(value ? { q: value } : {});
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_MATCHES", select: matchQueryCompetition });
    }, [dispatch, matchQueryCompetition]);
    const data = useSelector((state) => state.matches);
    console.log(data)

    let matches = data.filter((m) =>{
         return m.home_team.name.toUpperCase().includes(matchQueryTitle.toUpperCase())
             || m.away_team.name.toUpperCase().includes(matchQueryTitle.toUpperCase())
    })
    console.log(matches)
    return (
        <section className="overflow-hidden text-gray-700 ">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <Input
                value={value}
                submitButton={submitButton}
                handleChange={handleChange}
            />
            <SelectCompetition value={selectedValue} handleChange={handleChangeSelect}/>
            <VerticalList matches={matches} />
        </div>
    </section>
    )
}

export default Home;