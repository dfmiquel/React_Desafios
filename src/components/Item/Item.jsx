
import "./item.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";




const Item = ({ id,category, description, pictureUrl, price, rating, title }) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    // const getProduct = async () => {
    //   const getDataItem = await fetch(`https://fakestoreapi.com/products/${id}`);
    //   const data = await getDataItem.json();
    //   setProduct(data);
    // };
    const getProduct = async () => {
      const getDataItem = axios.get(
        "https://fakestoreapi.com/products/5");
      const data = await getDataItem.json();
      setProduct(data);
    };
    getProduct();
  }, []);
  console.log("Esta es la Data: ",product);
  return (

      <>
    <div className="product">
      <h2 className="title">{title}</h2>
      <img className="image" src={pictureUrl} alt="product image" />
      <span className="data">
      <p className="ID">{id}</p>
        <p className="price">${price}</p>
        <p className="rating">{rating.rate}</p>
      </span>
      <p className="description">{description}</p>
      <p className="category">{category}</p>
    </div>
      </>

  );
};
export default Item;
