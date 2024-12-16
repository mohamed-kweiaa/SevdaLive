import React from 'react';
import "../styles/Header.css";


const Header = () => {
    return (
        <header className='main-header'>
            <div className='logo'>

                <img src="/imgs/logo.png" alt="logo"  />
                
            </div>
            <nav>
                <ul>
                    <li> Home</li>
                    <li> Login</li>
                    <li> About</li>
                    <li> Contact Us</li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Header;