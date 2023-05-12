import React from 'react';
import Flogo from './images/flogo.png';
import { Link } from 'react-router-dom';
import { GoLocation, GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="flogo">
        <img src={Flogo} alt="Footer Logo" />
      </div>
      <div className="flink">
        <h2>Quick Links</h2>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/services'>Services</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/fleet'>Fleet Description</Link>
          <Link to='/office'>Offices</Link>
          <Link to='/contact'>Contact Us</Link>
        </ul>
      </div>
      <div className="flink">
        <h2>Our Services</h2>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/services'>Services</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/fleet'>Fleet Description</Link>
          <Link to='/office'>Offices</Link>
          <Link to='/contact'>Contact Us</Link>
        </ul>
      </div>
      <div className="fcontact">
        <h2>Contact Us</h2>

        <div>
          <GoLocation />
          <p>
            301, Commercial Manor, 4th Cross <br />
            Clive Road, Masjid Bunder (E), <br />
            Mumbai - 400009
          </p>
        </div>
        <div><IoCallOutline />
          <div>
            <a href="#">+022 61775555</a>
            <a href="#">+022 61775555</a>
          </div></div>
        <div><GoMail />
        <a href="#">info@darshanroadlines.com</a></div>
      </div>
    </footer>
  )
}

export default Footer