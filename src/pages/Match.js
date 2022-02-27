import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Statistique from "../components/Statistique";
import Formation from "../components/Formation";

function Match() {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_MATCH", id });
  }, [dispatch, id]);
  const match = useSelector((state) => state.match);
  let start_date = new Date(match.match_start).toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  if (!match) {
    return null;
  }
  console.log(match);
  return (
    <div className={"text-center mt-3"}>
      <h1 className={"md:text-md sm:text-sm lg:text-3xl"}><b>{match.group.group_name}</b></h1>
      <Card match={match} />
      <h1 className={"md:text-md sm:text-sm lg:text-3xl"}>Début du match : {start_date}</h1>
      {match.venue && match.venue.name && (
        <h1 className={"md:text-md sm:text-sm lg:text-3xl"}>
          Lieu du match : {match.venue.name} - {match.venue.city}
        </h1>
      )}
      <h1 className={"md:text-md sm:text-sm lg:text-3xl"}>
        Score du match à la mi-temps : {match.stats.ht_score}
      </h1>
      <h1 className={"md:text-md sm:text-sm lg:text-3xl"}>
        Score du match final : {match.stats.ft_score}
      </h1>
      <div className={"grid grid-cols-2 gap-4 p-5 text-center"}>
        <div className={"home"}>
          <Formation
            formation={match.lineups.length > 0 && match.lineups[0].formation}
          />
          <Statistique
            stat={match.match_statistics && match.match_statistics[0]}
          />
        </div>
        <div className={"away"}>
          <Formation
            formation={match.lineups.length > 0 && match.lineups[1].formation}
          />
          <Statistique
            stat={match.match_statistics && match.match_statistics[1]}
          />
        </div>
      </div>
    </div>
  );
}
export default Match;
