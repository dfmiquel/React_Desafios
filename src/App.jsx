// import './components/navBar/navBar.jsx'
// import './components/navBar/navBar.css';
import "./app.css";
import { NavBar } from './components/navBar/navBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <ItemListContainer greeting="Bienvenidos a MovieFan" /> */}
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
