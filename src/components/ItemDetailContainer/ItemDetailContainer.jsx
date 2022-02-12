import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ItemDetail } from "../itemDetail/itemDetail.jsx";
import styles from "./itemDetailContainer.css";

export const ItemDetailContainer = () => {
    const { productID } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getItem = async () => {
            const getDataItem = await axios.get(
                `https://fakestoreapi.com/products/1`
                // `https://fakestoreapi.com/products/${productID}`
            );
            const itemResponse = getDataItem.data;
            // console.log(itemResponse);
            setItem(itemResponse);
            // console.log("SetItem", setItem);
        };
        getItem();
    }, [productID]);

    console.log(item, "Soy el item Seleccionado(VERDADERO)");
    console.log(item.image, "Soy el item Seleccionado(VERDADERO-2)");

    return (
        <>
            <div className={styles.itemsContainer}>
                <h2>ItemDetailContainer</h2>
                <h2>{item.title}</h2>                
                <ItemDetail 
                pictureUrl={item.image}
                productItem={item.title}
                price={item.price}
                description={item.description}

                />
            </div>
        </>
    );
};

export default ItemDetailContainer;