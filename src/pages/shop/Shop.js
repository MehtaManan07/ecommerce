import React from "react";

import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/ShopSelector";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
