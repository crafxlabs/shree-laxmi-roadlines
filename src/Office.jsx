import React from 'react'
import { Link } from 'react-router-dom';
import { BiCaretRight } from "react-icons/bi";
import Indiamap from "./images/map.jpg"

const Office = () => {
  return (
    <section className="office">
      <div className="banner">
        <h2>Our Office</h2>

        <div className="path">
          <Link to='/' >Home</Link>
          <BiCaretRight />
          <Link to='/office' >Office</Link>
        </div>
      </div>

      <div className="ocon">

        <table>
          <h2>Booking <span>Office</span></h2>
          <tr>
            <th>Company Name</th>
            <th>Contact Person</th>
            <th>Address</th>
            <th>Mobile No</th>
          </tr>

          <tr>
            <td>Shree Laxmi Roadlines</td>
            <td>Rohit Yadav</td>
            <td>Jay Prakash Nagar Housing Society,
              7th Road, Rajawadi, Vidyavihar (E),
              Mumbai - 400077</td>
            <td>
              <a href="tel:9324045272">+91 9324045272</a> <br />
              <a href="tel:8419941998">+91 8419941998</a>
            </td>

          </tr>



        </table>
      </div>
    </section>
  )
}

export default Office