import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import  './Header.css';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
   const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <div>
           <header>
               <div className="header">
                  <img  src={logo} alt="Logo"/>
                  <nav>
                      <Link to="/shop">Shop</Link>
                      <Link to="/review">Oder Review</Link>
                      <Link to="/inventory">Manage Inventory</Link>
                    <button onClick={()=> setLoggedInUser({})}>Sign out</button>
                  </nav>
               </div>
           </header> 
        </div>
    );
};

export default Header;