import { NavBar } from '../components/navBar/navBar';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";



export const Home = () => {
    return (
      <div className="Home">
        <header className="App-header">
          <NavBar/>
          <ItemListContainer greeting="Bienvenidos a MovieFan" />
          {/* <ItemDetailContainer id={5}/> */}
        </header>
      </div>
    );
  }
  
  export default Home;