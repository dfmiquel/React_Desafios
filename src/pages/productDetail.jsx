import { NavBar } from '../components/navBar/navBar';
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

  export const ProductsDetail = () => {
    return (
      <div className="ProductsDetail">
        <header className="App-header">
          <NavBar/>
          <ItemDetailContainer />
        </header>
      </div>
    );
  }
  
  export default ProductsDetail;
