
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

    return (
      <div>
        <h1>{greeting}</h1>

      <ItemCount stock={15} initial={1} />
      </div>
    );
  };
  export default ItemListContainer