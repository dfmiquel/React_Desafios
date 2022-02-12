
import "./item.css";

const Item = ({ category, description, pictureUrl, price, rating, title }) => {
  return (

      <>
    <div className="product">
      <h2 className="title">{title}</h2>
      <img className="image" src={pictureUrl} alt="product image" />
      <span className="data">
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
