import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Productdetai from './components/ProductDetail/Productdetai';

function App() {
  return (
    <div>
      <Header />
  
    <Router>
    <Switch>
      <Route  path='/shop'>
      <Shop />
      </Route>
      <Route path='/review'>
       <Review />
      </Route>
      <Route path='/inventory'>
        <Inventory />
      </Route>
      <Route exact path='/'>
      <Shop />
      </Route>
      <Route path='/product/:productKey'>
          <Productdetai />
      </Route>
      <Route path='*'>
        <Notfound />
      </Route>
      </Switch>
    </Router>

      
    </div>
  );
}

export default App;
