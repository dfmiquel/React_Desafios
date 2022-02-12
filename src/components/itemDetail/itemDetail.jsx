import styles from "./itemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";


export const ItemDetail = ({ price, pictureUrl, productItem, description }) => {
  return (

    <div className={styles.container}>
      <h1>ItemDetail 2</h1>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={pictureUrl} />
        <h2>{productItem}</h2>
        <h2>${price}</h2>
        <h2>{description}</h2>
      </div>
      <ItemCount stock={15} initial={1} />
    </div>

  );
};
