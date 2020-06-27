import React from "react";
import './Collection.scss'
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/ShopSelector";
const Collection = ({collection}) => {
  console.log('match.params.collectionId:',collection)
  return (
    <div className="collection-page">
      <h2> COLLECTion page </h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
