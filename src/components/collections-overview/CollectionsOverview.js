import React from "react";
import PreviewCollection from "../preview-collection/PreviewCollection";
import "./CollectionsOverview.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/ShopSelector";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
