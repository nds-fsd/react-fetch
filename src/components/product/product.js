/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.css";

const Product = (props) => {
  const product = props.item;
  return (
    <Link to={`product/${product.id}`}>
      <div className={styles.card}>
        <p>
          {product.name} {product.price}€
        </p>
      </div>
    </Link>
  );
};

export default Product;
