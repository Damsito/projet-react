import React from "react";

function Statistique({ stat }) {
  if (!stat) {
    return null;
  }
  function isDefined(text) {
    return typeof text === "number";
  }
  return (
    <>
      <h2 className={"md:text-md sm:text-sm lg:text-3xl"}>Statistiques</h2>
      {isDefined(stat.attacks) && <p className={"md:text-md sm:text-sm lg:text-3xl"}>Attaques : {stat.attacks}</p>}
      {isDefined(stat.corners) && <p className={"md:text-md sm:text-sm lg:text-3xl"}>Corners : {stat.corners}</p>}
      {isDefined(stat.fouls) && <p className={"md:text-md sm:text-sm lg:text-3xl"}>Fautes : {stat.fouls}</p>}
      {isDefined(stat.free_kick) && <p className={"md:text-md sm:text-sm lg:text-3xl"}>Coups francs : {stat.free_kick}</p>}
      {isDefined(stat.goal_attempts) && (
        <p className={"md:text-md sm:text-sm lg:text-3xl"}>Tentatives au but : {stat.goal_attempts}</p>
      )}
      {isDefined(stat.goal_kick) && <p className={"md:text-md sm:text-sm lg:text-3xl"}>Tirs cadrés : {stat.goal_kick}</p>}
      {isDefined(stat.goals) && <p className={"md:text-md sm:text-sm lg:text-3xl"}>Buts : {stat.goals}</p>}
      {isDefined(stat.offsides) && <p className={"md:text-md sm:text-sm lg:text-3xl"}>Hors-jeux : {stat.offsides}</p>}
      {isDefined(stat.yellowcards) && (
        <p className={"md:text-md sm:text-sm lg:text-3xl"}>Cartons jaunes : {stat.yellowcards}</p>
      )}
      {isDefined(stat.redcards) && <p className={"md:text-md sm:text-sm lg:text-3xl"}>Cartons rouges : {stat.redcards}</p>}
    </>
  );
}
export default Statistique;
