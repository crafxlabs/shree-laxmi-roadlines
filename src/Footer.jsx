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
          <Link to='/contact'>Contact Us</Link>
        </ul>
      </div>
      <div className="flink">
        <h2>Our Services</h2>
        <ul>
          <Link to='/services'>Oil Transportation</Link>
          <Link to='/services'>Petrol Transportation</Link>
          <Link to='/services'>Drugs Transportation</Link>
          <Link to='/services'>Chemicals Transportation</Link>
          <Link to='/services'>Fuel Transportation</Link>
        </ul>
      </div>
      <div className="fcontact">
        <h2>Contact Us</h2>

        <div>
          <GoLocation />
          <p>
            Jay Prakash Nagar Housing Society,<br />
            7th Road, Rajawadi, Vidyavihar (E), <br />
            Mumbai - 400077
          </p>
        </div>
        <div><IoCallOutline />
          <div className='plink'>
            <a href="tel:9324045272">+91 9324045272</a>
            <a href="tel:8419941998">+91 8419941998</a>
          </div></div>
        <div><GoMail />
          <a href="mailto:shreelaxmiroadlines@yahoo.in">shreelaxmiroadlines@yahoo.in</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer