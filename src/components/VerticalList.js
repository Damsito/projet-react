import Card from "./Card";
import React from 'react'

function VerticalList({ matches }) {
  if (!matches.length) {
    return <h2>Aucun match ne correspond à votre recherche.</h2>;
  }
  return (
    <div data-testid="verticalList" className="flex flex-wrap mt-2">
      <div className="w-full sm:w-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-12 mt-4">
        {matches.map((match) => {
          return <Card key={match.match_id} match={match} />;
        })}
      </div>
    </div>
  );
}
VerticalList.defaultProps = {
  matches: [],
};
export default VerticalList;
