import React from "react";
import "./PreviewCollection.scss";
import CollectionItems from "../collection-items/CollectionItems";
const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, i) => i < 4)
          .map(({id, ...otherProps}) => (
            <CollectionItems key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
