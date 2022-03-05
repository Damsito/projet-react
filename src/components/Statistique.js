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
      <h2 data-testid="statistique" className={"md:text-md sm:text-sm lg:text-3xl"}>Statistiques</h2>
      {isDefined(stat.attacks) && (
        <p data-testid="attacks" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Attaques : {stat.attacks}
        </p>
      )}
      {isDefined(stat.corners) && (
        <p data-testid="corners" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Corners : {stat.corners}
        </p>
      )}
      {isDefined(stat.fouls) && (
        <p data-testid="fouls" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Fautes : {stat.fouls}
        </p>
      )}
      {isDefined(stat.free_kick) && (
        <p data-testid="free_kick" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Coups francs : {stat.free_kick}
        </p>
      )}
      {isDefined(stat.goal_attempts) && (
        <p data-testid="goal_attempts" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Tentatives au but : {stat.goal_attempts}
        </p>
      )}
      {isDefined(stat.goal_kick) && (
        <p data-testid="goal_kick" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Tirs cadrés : {stat.goal_kick}
        </p>
      )}
      {isDefined(stat.goals) && (
        <p data-testid="goals" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Buts : {stat.goals}
        </p>
      )}
      {isDefined(stat.offsides) && (
        <p data-testid="offsides" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Hors-jeux : {stat.offsides}
        </p>
      )}
      {isDefined(stat.yellowcards) && (
        <p data-testid="yellowcards" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Cartons jaunes : {stat.yellowcards}
        </p>
      )}
      {isDefined(stat.redcards) && (
        <p data-testid="redcards" className={"md:text-md sm:text-sm lg:text-3xl"}>
          Cartons rouges : {stat.redcards}
        </p>
      )}
    </>
  );
}
export default Statistique;
