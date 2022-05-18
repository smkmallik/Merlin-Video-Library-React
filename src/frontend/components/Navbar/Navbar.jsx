import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>MerlinTube</h2>

            <ul className='navbar__navoptions'>
                <li>Explore</li>
                <li>Login</li>
            </ul>
            
        </nav>
    )
}

export default Navbar;