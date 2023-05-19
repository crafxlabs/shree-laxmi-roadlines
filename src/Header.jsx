import React, { useState } from 'react';
import Logo from "./images/flogo.png"
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Header = () => {

    const [menu, setMenu] = useState(false);


    function handleMenuOpen() {
        setMenu(true);
    }

    function handleMenuClose() {
        setMenu(false);
        window.scroll(0,0)
    }



    return (
        <header>
            <div className="logo">
               <Link to='/'> <img src={Logo} alt="logo" /></Link> 
            </div>
            <nav>
                <ul className={menu ? 'open' : 'close'} >
                    <div onClick={handleMenuClose} className="cross"><HiOutlineX /></div>
                    <li><Link onClick={handleMenuClose} to='/'>Home</Link></li>
                    <li><Link onClick={handleMenuClose} to='/about'>About</Link></li>
                    <li><Link onClick={handleMenuClose} to='/services'>Services</Link></li>
                    <li><Link onClick={handleMenuClose} to='/gallery'>Gallery</Link></li>
                    {/* <li><Link onClick={handleMenuClose} to='/office'>Offices</Link></li> */}
                    <li><Link onClick={handleMenuClose} to='/contact'>Contact Us</Link></li>
                </ul>
            </nav>

            <div onClick={handleMenuOpen} className="menu">
                <HiOutlineMenuAlt2 />
            </div>
        </header>
    )
}

export default Header