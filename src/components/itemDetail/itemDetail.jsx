import styles from "./itemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";


export const ItemDetail = ({ price, pictureUrl, productItem, description }) => {

  const [showComponent, setShowComponent] = useState(true);
  const [chosenItem, setChosenItem] = useState();
  const addItem = (e) => {
    setChosenItem(e.target.value);
    setShowComponent(false);
  };
  console.log("cantidad del producto", chosenItem,{ItemCount});
  return (

    <div className={styles.container}>
      <h1>ItemDetail 2</h1>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={pictureUrl} />
        <h2>{productItem}</h2>
        <h2>${price}</h2>
        <h2>{description}</h2>
      </div>
      {showComponent ? (
      <ItemCount stock={15} initial={1} onAdd={addItem}/>
      ) : (
        <div>
        <p>
          Adquiriste exitosamente {chosenItem} unidades de {productItem}
        </p>
        <Link to="/cart">Ir al carrito</Link>
      </div>


      )}
    </div>

  );
};
