import './App.css';
import Header from './components/header/header'
import Navigation from './components/navigation/navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './views/item/itemDetailContainer'
import Cart from './views/cart/cart'
import CardContainer from './components/card/cardContainer/cardContainer'

import { CartProvider } from './views/cart/cartContext';
function App() {
  return (
  
  <Router>
    <CartProvider>
      <div className="App">
        <Header/>
        <Navigation/>
        <Switch>
          <Route path ="/" exact component={CardContainer}/>
          <Route path ="/item/:id" component={ItemDetailContainer}/>
          <Route path ="/category/:id" component={CardContainer}/>
          <Route path ="/cart" component={Cart}/>
        </Switch>
      </div>
    </CartProvider>
  </Router>
  
  
);
}

export default App;
