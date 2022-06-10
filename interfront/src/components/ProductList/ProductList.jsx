import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Grid from "@mui/material/Grid";
import axios from "axios";

const ProductList = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let res = await axios.get("http://localhost:5000/api/product/");
      setProducts(res.data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <Grid container spacing={1}>
        {products.map((product) => (
          <Grid key={product._id} item md={3}>
            <Product data={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
