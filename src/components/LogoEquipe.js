function LogoEquipe({url, name}){
    if(!url){
        return null;
    }
    return <img
        className="block object-cover object-center w-12 md:w-32 lg:w-48 rounded-lg"
        src={url}
        alt={name}
    />
}
export default LogoEquipe;