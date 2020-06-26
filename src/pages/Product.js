import React, { useEffect, useState } from "react";
import { SHOP_DATA } from "../shared/ShopData";

const Product = () => {
  const [data, setData] = useState(SHOP_DATA);
  useEffect(() => {
    // data.map((item) => item.items.map((sub) => console.log(sub)));
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {data.map((item) =>
        item.items.map((sub) => <img alt="" key={sub.id} src={sub.imageUrl} />)
      )}
    </div>
  );
};

export default Product;
