import React from 'react';
import logo from '../../images/logo.png';
import  './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
           <header>
               <div className="header">
                  <img  src={logo} alt="Logo"/>
                  <nav>
                      <Link to="/shop">Shop</Link>
                      <Link to="/review">Oder Review</Link>
                      <Link to="/inventory">Manage Inventory</Link>
                  </nav>
               </div>
           </header> 
        </div>
    );
};

export default Header;