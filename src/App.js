import React, { createContext, useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Productdetai from './components/ProductDetail/Productdetai';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext =createContext();
function App() {

  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <h3> log in email: {loggedInUser.email}</h3>
    
  
    <Router>
    <Header />
    <Switch>
      <Route  path='/shop'>
      <Shop />
      </Route>
      <Route path='/review'>
       <Review />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <PrivateRoute path='/shipment'>
        <Shipment />
      </PrivateRoute>
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

      
    </userContext.Provider>
  );
}

export default App;
