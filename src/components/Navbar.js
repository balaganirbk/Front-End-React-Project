

import React from 'react';
import Nav from './Nav.css';
import {BrowserRouter as Router ,Link} from 'react-router-dom';

const Navbar=()=>{

    return(
       <nav className='container'>

    <ul className="navitems">
            <Router>
                <div>
                <li className='logo'><img src='/logo.jpeg'/></li>
                </div >
                <div className='rightside'>
                <li > <Link to="/">Home</Link></li>
                <li > <Link to="/about">About</Link></li>
                <li> <Link to="/services">Services</Link></li>
                <li> <Link to="/contact">Contact</Link></li>

                </div>
          
            
            </Router>
        </ul>
       </nav>
    )
}

export default Navbar;