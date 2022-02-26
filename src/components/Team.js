import LogoEquipe from "./LogoEquipe";

function Team({team}){
   return <div className={'text-center'}>
       <LogoEquipe width={"w-24 md:w-48 lg:w-62"} url={team.logo} name={team.name} />
       <h1>{team.name}</h1>
   </div>
}
export default Team;