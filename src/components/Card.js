import { Link } from "react-router-dom";
import LogoEquipe from "./LogoEquipe";

function Card({ match }) {
  return (
    <div className={"relative"}>
      <Link className={"p-0 m-0"} to={`/match/${match.match_id}`}>
        <div className={"flex justify-center"}>
          <LogoEquipe name={match.home_team.name} url={match.home_team.logo} />
          <LogoEquipe name={match.away_team.name} url={match.away_team.logo} />
        </div>
      </Link>
      <h3 className={"text-center sm:text-sm md:text-md lg:text-2xl"}>
        <b>{match.home_team.name} VS {match.away_team.name}</b>
      </h3>
    </div>
  );
}

export default Card;
