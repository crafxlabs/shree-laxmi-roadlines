import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCaretRight } from "react-icons/bi";
import { GoLocation, GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";


const Contact = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    contact: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }


  function handleSubmit(e) {
    e.preventDefault();

    // Replace with the URL of your Google Apps Script web app
    const scriptURL = "https://script.google.com/macros/s/AKfycbzIT7LGPK7AkMDgnKpCNeCbowhenO_ovey7J9uUQ4mWDJzBkVlBauQTdP11l_KZ5wAv/exec";

    // Send the form data to the server using an AJAX request
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(e.target)
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (text) {
        // Display the success message
        setFormData({
          name: "",
          email: "",
          subject: "",
          contact: "",
          message: ""
        });
        alert("Form submitted successfully!");
      });
  }


  return (
    <section className="contact" id='contact'>

      <div className="banner cbanner">
        <h2>Contact</h2>

        <div className="path">
          <Link to='/' >Home</Link>
          <BiCaretRight />
          <Link to='/contact' >Contact</Link>
        </div>
      </div>

      <div className="ccon">
        <div className="cinfo">
          <h5>Get a Quote</h5>
          <h2>Get in Touch And We’ll Help Your Business</h2>

          <div className="card">
            <div className="scon">
              <GoLocation />
            </div>

            <div>
              <h3>Registered Office</h3>
              <p>Jay Prakash Nagar Housing Society, 7th Road, Rajawadi, Vidyavihar (E), Mumbai - 400077</p>



            </div>
          </div>

          <div className="card">
            <div className="scon">
              <IoCallOutline />
            </div>

            <div>
              <h3>Phone Number</h3>
              <p>+91 9324045272</p>
              <p>+91 8419941998</p>
            </div>
          </div>

          <div className="card">
            <div className="scon">
              <GoMail />
            </div>

            <div>
              <h3>Email address</h3>
              <p>shreelaxmiroadlines@yahoo.in</p>
            </div>
          </div>



        </div>
        <div className="cform">
          <h2>Get a Quote</h2>
          <form onSubmit={handleSubmit}>

            <div>
              <input value={formData.name}
                onChange={handleChange}
                type="text" name='name' placeholder='Full Name' required />
              <input value={formData.email}
                onChange={handleChange}
                type="email" name='email' placeholder='Email' required />
            </div>

            <div>
              <input value={formData.contact}
                onChange={handleChange}
                type="tel" name='contact' placeholder='Contact No' required />
              <input value={formData.subject}
                onChange={handleChange}
                type="text" name='subject' placeholder='Subject' required />
            </div>

            <textarea value={formData.message}
              onChange={handleChange}
              name="message" placeholder='Message' required rows="5" />

            <input className='submitbtn' type="submit" value='SUBMIT' />
          </form>
        </div>
      </div>


    </section>
  )
}

export default Contact


// 4reliance 1indian oil 3bharat petrol 2hindustan petrol 6sragies 5audinance factory 7aarti drugs 