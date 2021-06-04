import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';
function App() {
  return (
    <Router>
      <div className = "grid-container">
        <header className="row">
            <div>
                <a className= "brand" href="index.html">amazon</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <main>
          <Switch>
          <Route path="/product/:id">
              <ProductScreen />
            </Route>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
          </Switch>
        </main>
        <footer className = "row center">
            All right reserved.
        </footer>
      </div>
      </Router>
  );
}

export default App;
