import { Link } from "react-router-dom";

function Card({ match }) {
  return (
    <div className={"relative"}>
      <Link className={"p-0 m-0"} to={`/match/${match.match_id}`}>
        {match.home_team.logo && match.away_team.logo && (
          <div className={'flex justify-center'}>
            <img
              className="block object-cover object-center w-100 h-100 rounded-lg"
              src={match.home_team.logo}
              alt={match.home_team.name}
            />
              <img
                  className="block object-cover object-center w-100 h-100 rounded-lg"
                  src={match.away_team.logo}
                  alt={match.away_team.name}
              />
          </div>
        )}
      </Link>
        <h3 className={'text-center'}>{match.home_team.name} VS {match.away_team.name}</h3>
    </div>
  );
}

export default Card;
