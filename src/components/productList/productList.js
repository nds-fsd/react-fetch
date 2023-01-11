/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserToken } from "../../utils/localStorage.utils";
import Product from "../product/product";
import "./productList.css";

const ProductList = (props) => {
  const reload = props.reload;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    
    console.log("hola");
    fetch("http://localhost:3005/todo",{
        headers:{
            authorization:`Bearer ${getUserToken()}`
        }
    })
      .then((response) => {
     
        return response.json();
      })
      .then((res) => {
        if(res.error){
            setError(res)
        }
        setProducts(res.data);
      }).catch((x)=>{
        console.log(x)
        setError(x)
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
      {error && <h1>{error.error}</h1>}
      {!error && products && products.map((p) => <Product key={p.id} item={p} />)}
    </div>
  );
};

export default ProductList;
