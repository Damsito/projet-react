function LogoEquipe({ url, name, width }) {
  if (!url) {
    return null;
  }
  let className = "block object-cover object-center rounded-lg mx-auto";
  className += width ? " " + width : " w-24 md:w-48 lg:w-64";
  return <img data-testid="logo" className={className} src={url} alt={name} />;
}
export default LogoEquipe;
