import { Link } from "react-router-dom";
import React from 'react'
import LogoEquipe from "./LogoEquipe";
import useStyles from "./Card.style";

function Card({ match }) {
  const classes = useStyles();
    if(!match){
        return null
    }
  return (
    <div data-testid="card" className={classes.root}>
      <Link className={classes.link} to={`/match/${match.match_id}`}>
        <div className={classes.flex_center}>
          <LogoEquipe name={match.home_team.name} url={match.home_team.logo} />
          <LogoEquipe name={match.away_team.name} url={match.away_team.logo} />
        </div>
      </Link>
      <h3 className={`${classes.h3} sm:text-sm md:text-md lg:text-2xl`}>
        <b>
          {match.home_team.name} VS {match.away_team.name}
        </b>
      </h3>
    </div>
  );
}

export default Card;
