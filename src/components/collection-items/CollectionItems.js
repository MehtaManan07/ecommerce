import React from "react";
import MyButton from "../myButton/MyButton";
import "./CollectionItems.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/CartActions";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <MyButton onClick={() => addItem(item)} inverted>
        Add to cart
      </MyButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

