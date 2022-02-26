import React from "react";

function Statistique({stat}){
    if(!stat){
        return null;
    }
    function isDefined(text){
        return typeof text === 'number'
    }
    return  (<>
        <h2>Statistiques</h2>
        {isDefined(stat.attacks) && <p>Attaques : {stat.attacks}</p>}
        {isDefined(stat.corners) && <p>Corners : {stat.corners}</p>}
        {isDefined(stat.fouls) && <p>Fautes : {stat.fouls}</p>}
        {isDefined(stat.free_kick) && <p>Coups francs : {stat.free_kick}</p>}
        {isDefined(stat.goal_attempts) && <p>Tentatives au but : {stat.goal_attempts}</p>}
        {isDefined(stat.goal_kick) && <p>Tirs cadrés : {stat.goal_kick}</p>}
        {isDefined(stat.goals) && <p>Buts : {stat.goals}</p>}
        {isDefined(stat.offsides) && <p>Hors-jeux : {stat.offsides}</p>}
        {isDefined(stat.yellowcards) && <p>Cartons jaunes : {stat.yellowcards}</p>}
        {isDefined(stat.redcards) && <p>Cartons rouges : {stat.redcards}</p>}
    </>)
}
export default Statistique;