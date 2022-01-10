import './App.css';
import './components/navBar.css';
import { NavBar } from './components/navBar';
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
