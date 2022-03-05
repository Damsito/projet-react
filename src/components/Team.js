import LogoEquipe from "./LogoEquipe";

function Team({ team }) {
    if(!team){
        return null
    }
  return (
    <div data-testid="team" className={"text-center"}>
      <LogoEquipe
        width={"w-24 md:w-48 lg:w-62"}
        url={team.logo}
        name={team.name}
      />
      <h1>{team.name}</h1>
    </div>
  );
}
export default Team;
