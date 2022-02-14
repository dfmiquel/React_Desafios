import { NavBar } from '../components/navBar/navBar';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";


export const Products = () => {
    return (
      <div className="Products">
        <header className="App-header">
          <NavBar/>
          <ItemListContainer greeting="Bienvenidos a MovieFan" />
        </header>
      </div>
    );
  }
  
  export default Products;