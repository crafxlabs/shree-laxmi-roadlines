import React, { useState } from 'react';
import Logo from "./images/hlogo.png"
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";

const Header = () => {

    const [menu, setMenu] = useState(false);


    function handleMenuOpen() {
        setMenu(true);
    }

    function handleMenuClose() {
        setMenu(false);
    }



    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <nav>
                <ul className={menu ? 'open' : 'close'} >
                    <div onClick={handleMenuClose} className="cross"><HiOutlineX /></div>
                    <li><a onClick={handleMenuClose} href="#">Home</a></li>
                    <li><a onClick={handleMenuClose} href="#">About</a></li>
                    <li><a onClick={handleMenuClose} href="#">Services</a></li>
                    <li><a onClick={handleMenuClose} href="#">Gallery</a></li>
                    <li><a onClick={handleMenuClose} href="#">Fleet Description</a></li>
                    <li><a onClick={handleMenuClose} href="#">Offices</a></li>
                    <li><a onClick={handleMenuClose} href="#">Contact Us</a></li>
                </ul>
            </nav>

            <div onClick={handleMenuOpen} className="menu">
                <HiOutlineMenuAlt2 />
            </div>
        </header>
    )
}

export default Header