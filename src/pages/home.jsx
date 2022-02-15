import { NavBar } from '../components/navBar/navBar';


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