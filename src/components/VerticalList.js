import Card from "./Card";

function VerticalList({ matches }) {
  if (!matches.length) {
    return <h2>Aucun match ne correspond à votre recherche.</h2>;
  }
  return (
    <div className="flex flex-wrap -m-1 md:-m-2 mt-5">
      {matches.map((match) => {
        return (
          <div key={match.match_id} className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <Card match={match} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
VerticalList.defaultProps = {
  matches: [],
};
export default VerticalList;
