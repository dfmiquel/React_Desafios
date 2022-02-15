import { NavBar } from '../components/navBar/navBar';
import ItemListContainer from "../components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";



export const Home = () => {
    return (
      <div className="Home">
        <header className="App-header">
          <NavBar/>
          <h1> Bienvenidos a MovieFan</h1>
        </header>
      </div>
    );
  }
  
  export default Home;