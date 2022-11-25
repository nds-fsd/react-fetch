import React, { useEffect, useState } from 'react';
import Product from '../product/product';

const ProductList = (props) => {
    const reload = props.reload;
    const [products, setProducts] = useState([]);
    debugger;

    useEffect(() => {
        debugger;
        console.log('hola');
        fetch('http://localhost:3005/todo')
        .then((response) => {
            debugger;
            return response.json();
        })
        .then((res) => {
            debugger;
            setProducts(res.data);
        })
    }, [reload]);



    return (
        <div>
            <h1>Products</h1>
            {products && products.map(p => (<Product item={p} />))}
            
        </div>
    )
};

export default ProductList;