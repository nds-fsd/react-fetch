/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import PermissionControll from "../permissionControll/permissionControll";
import styles from "./product.module.css";

const Product = (props) => {
  const product = props.item;
  return (
    <PermissionControll permission={'ADMIN'}>
      <Link to={`product/${product.id}`}>
        <div className={styles.card}>
          <p>
            {product.name} {hasPermission('ADMIN') && product.price}€
          </p>
        </div>
      </Link>
    </PermissionControll>
  );
};

export default Product;
