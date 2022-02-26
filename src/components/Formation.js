import React from "react";

function Formation({ formation }) {
  if (!formation) {
    return null;
  }
  return <h2>Formation: {formation}</h2>;
}
export default Formation;
