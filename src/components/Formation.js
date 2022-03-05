import React from "react";

function Formation({ formation }) {
  if (!formation) {
    return null;
  }
  return (
    <h2 data-testid="formation" className={"md:text-md sm:text-sm lg:text-3xl"}>
      Formation: {formation}
    </h2>
  );
}
export default Formation;
