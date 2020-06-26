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
          .map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
