import React, { useEffect, useState } from "react";
// import { SHOP_DATA } from "../../shared/ShopData";

// import { Grid, Image, Button, Icon } from "semantic-ui-react";
import "./Product.css";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/CartActions";

const Product = (props, { item, addItem }) => {
  useEffect(() => {
    console.log('props:',props)
    // eslint-disable-next-line
  }, []);
  return (
    <div className="">
      hello ji
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(Product);
// onClick={() => addItem()}
{/* <div>
      <Grid>
        <Grid.Column width={3}>three</Grid.Column>
        <Grid.Column width={7}>
          <Image size='big' src={imageUrl} />
        </Grid.Column>
        <Grid.Column className="last-column" width={6}>
          <h1 style={{ color: "green" }}> {name} </h1>
          <h3> ${price} </h3>
          <hr />
          <br />
          <p> {description} </p>
          <br />
          <div className="buttons-product">
            <Button inverted color="green">
              <Icon name="shop" /> ADD TO CART{" "}
            </Button>
            <Link to="/shop">
              <Button inverted color="blue">
                <Icon name="arrow circle left" /> BACK TO SHOP
              </Button>
            </Link>
          </div>
        </Grid.Column>
      </Grid>
    </div> */}