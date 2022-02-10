import './components/navBar/navBar.jsx';
import './components/navBar/navBar.css';
import { NavBar } from './components/navBar/navBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a MovieFan" />
      </header>
    </div>
  );
}

export default App;
