import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return ( 
    <div >
        导航栏
        <li>
            <Link to="/"> Home </Link>
        </li>
        <li>
            <Link to="/shoppingTrolley"> ShoppingTrolley </Link>
        </li>
        <li>
            <Link to="/routerTest2"> Home </Link>
        </li>
    </div> );
}

export default NavBar;