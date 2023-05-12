import React from 'react';
import { Link } from 'react-router-dom';
import { BiCaretRight } from "react-icons/bi";
import { GoLocation, GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";


const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <div className="banner">
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
              <p>301, Commercial Manor, 4th Cross Clive Road, Masjid Bunder (E), Mumbai - 400009</p>
            </div>
          </div>

          <div className="card">
            <div className="scon">
              <IoCallOutline />
            </div>

            <div>
              <h3>Phone Number</h3>
              <p>+91 9920224499</p>
              <p> +91 22 61775555</p>
            </div>
          </div>

          <div className="card">
            <div className="scon">
              <GoMail />
            </div>

            <div>
              <h3>Email address</h3>
              <p>info@darshanroadlines.com</p>
            </div>
          </div>



        </div>
        <div className="cform">
        <h2>Get a Quote</h2>
          <form action="">

            <div>
              <input type="text" name='fullname' placeholder='Full Name' required />
              <input type="email" name='email' placeholder='Email' required />
            </div>

            <div>
              <input type="tel" name='number' placeholder='Contact No' required />
              <input type="text" name='subject' placeholder='Subject' required />
            </div>

            <textarea name="message" placeholder='Message' required rows="5" />

            <input className='submitbtn' type="submit" value='SUBMIT' />
          </form>
        </div>
      </div>

      {/* <div className="livemap">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405.02353244418765!2d72.89817444430025!3d19.077467064396938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c629dcb60927%3A0x4393efe47e03d493!2sKumar%20Parasmani!5e0!3m2!1sen!2sin!4v1683892941967!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div> */}
    </section>
  )
}

export default Contact