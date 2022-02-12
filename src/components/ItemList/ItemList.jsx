import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div>

      {products.map((product) => {
        return (
          <Item
            category={product.category}
            description={product.description}
            pictureUrl={product.image}
            price={product.price}
            rating={product.rating}
            title={product.title}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
