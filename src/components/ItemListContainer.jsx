
import { useState, useEffect } from "react";
// import getData from "../Services/getData.js";
// import ItemCount from "./ItemCount.jsx";
import ItemList from "./ItemList";
import axios from "axios";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const getDataProducts = await axios.get(
      "https://franncode.vercel.app/api/products"
    );
    const productsResponse = getDataProducts.data;
    setProducts(productsResponse);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
      {/* <ItemCount stock={10} initial={1} /> */}
    </div>
  );


};
export default ItemListContainer