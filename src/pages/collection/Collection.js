import React from "react";
import './Collection.scss'
const Collection = ({match}) => {
  console.log('match.params.collectionId:',match.params.collectionId)
  return (
    <div className="collection-page">
      <h2> COLLECTion page </h2>
    </div>
  );
};

export default Collection;
