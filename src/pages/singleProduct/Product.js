import React, { useEffect, useState } from "react";
import { SHOP_DATA } from "../../shared/ShopData";

import { Grid, Image, Button, Icon } from "semantic-ui-react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({item}) => {
  const [data, setData] = useState(SHOP_DATA);
  const { description, id, price, name, imageUrl } = data[0].items[0];
  useEffect(() => {
    console.log(item);
    // data.map((item) => item.items.map((sub) => console.log(sub)));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Grid>
        <Grid.Column width={3}>three</Grid.Column>
        <Grid.Column width={7}>
          <Image size="huge" src={imageUrl} />
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
                <Icon name="arrow circle left" /> BACK TO SHOP{" "}
              </Button>
            </Link>{" "}
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Product;
