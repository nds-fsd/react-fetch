import React from 'react';
import styles from './product.module.css';

const Product = (props) => {
    debugger;
    const product = props.item;
    return (
        <div className={styles.card}>
            <p>{product.name} {product.price}€</p>
        </div>
    )
};

export default Product;