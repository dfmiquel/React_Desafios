

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home.jsx';
import { Cart } from './pages/cart';
import { Category } from './pages/category';
import { Error } from './pages/error';
import { Products } from './pages/products';
import { ProductsDetail } from './pages/productDetail';
import { NavBar } from "./components/navBar/navBar"

export const App = () => {
  return (
    <Router>
        {/* <NavBar /> */}
        <Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/cart'>
					<Cart />
				</Route>
				<Route path='/category'>
					<Category />
				</Route>
        <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/productsDetail">
            <ProductsDetail />
          </Route>
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
    </Router>
  );
};






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <NavBar/>
//         <ItemListContainer greeting="Bienvenidos a MovieFan" />
//         {/* <ItemDetailContainer id={5}/> */}
//       </header>
//     </div>
//   );
// }

// export default App;
