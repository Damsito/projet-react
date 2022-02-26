function LogoEquipe({ url, name, width }) {
  if (!url) {
    return null;
  }
  let className = "block object-cover object-center rounded-lg mx-auto";
  className += width ? " " + width : " w-12 md:w-32 lg:w-48";
  return <img className={className} src={url} alt={name} />;
}
export default LogoEquipe;
