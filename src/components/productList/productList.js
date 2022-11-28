/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Product from "../product/product";
import { Link, Outlet } from "react-router-dom";
import "./productList.css";

const ProductList = (props) => {
  const reload = props.reload;
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    
    console.log("hola");
    fetch("http://localhost:3005/todo")
      .then((response) => {
        
        return response.json();
      })
      .then((res) => {
        
        setProducts(res.data);
      });
  }, [reload]);

  return (
    <div>
      <h1>
        Products{" "}
        <span>
          <Link to="create">+</Link>
        </span>
      </h1>
      {products && products.map((p) => <Product key={p.id} item={p} />)}
      <div className="child-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductList;
