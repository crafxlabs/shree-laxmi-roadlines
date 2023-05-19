import React from 'react'
import { Link } from 'react-router-dom';
import { BiCaretRight } from "react-icons/bi";

const Services = () => {
  return (
    <section className="service">

      <div className="banner sbanner">
        <h2>Services</h2>

        <div className="path">
          <Link to='/' >Home</Link>
          <BiCaretRight />
          <Link to='/services' >Services</Link>
        </div>
      </div>

      <div className="ficon">
        <h2>Petroleum Road Transportation</h2>
        <p>Shree Laxmi Roadlines provides reliable and secure Petroleum Road Transportation services, offering efficient and safe transportation of petroleum products. With a modern fleet of specialized tanker trucks, trained drivers, and strict adherence to safety protocols, they ensure the integrity and timely delivery of these hazardous materials. Our customer-centric approach and commitment to industry standards make us a trusted partner for petroleum logistics.</p>
      </div>


      <div className="afcon">
        <div>
          <h3>Benefits of our service</h3>

          <div className="lists">
            <li>More Than 25 Years’ experience in logistics</li>
            <li>Greater Efficiency and Cost Management Resulting in Reduced Costs for You</li>
            <li>Service that Sets the Standard for the Transportation Industry</li>
            <li>Leadership with a Track Record of Positive Results</li>
            <li>Ability to secure capacity to support your supply chain when capacity is limited</li>
            <li>Providing the highest level of customer service</li>
          </div>
        </div>
        <div>
          <h3>What We Transport</h3>
          <div className="lists">
            <li>Bulk Petroleum Products</li>
            <li>ATF Jet Fuel</li>
            <li>Marine Gas Oil, Marine Fuel Oil, and Marine Lubricants for the Maritime industry</li>
            <li>Chemicals</li>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services