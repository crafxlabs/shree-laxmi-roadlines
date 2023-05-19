import React from 'react'
import { Link } from 'react-router-dom';
import { c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11 } from "./images/index"

const Home = () => {
    return (
        <section className="home">

            <div className="main">

                <div className="minfo">
                    <h1>Shree Laxmi Roadlines</h1>
                    <h4>Delivering Happiness</h4>
                    <Link to='/contact' >Request a Quote</Link>
                </div>

            </div>

            <div className="habout">
                <h2>About Us</h2>
                <p>Shree Laxmi Roadlines is a trusted name in the transportation industry, specializing in providing reliable and efficient logistics solutions. With a strong focus on customer satisfaction, safety, and professionalism, we have established ourselves as a leading player in the field. Founded by Hari Bhajan Yadav, a visionary and dedicated individual, Shree Laxmi Roadlines has been serving the transportation industry for over 25 years. </p>
                <p> At Shree Laxmi Roadlines, we are committed to delivering excellence in every aspect of our services. We understand the importance of timely and secure transportation, especially when it comes to sensitive and valuable cargo such as petroleum products. Our team of dedicated professionals works tirelessly to ensure that your goods reach their destination safely and on schedule. When it comes to petroleum transportation, Shree Laxmi Roadlines is the name you can trust. With our reliable services, customer-centric approach, unwavering commitment to safety, and environmental consciousness, we are the ideal partner for all your transportation needs. Experience the difference of working with a professional and dedicated team that puts your satisfaction first.</p>

                <Link to='/about'>Read More</Link>
            </div>

            <div className="afcon">
                <div>
                    <h3>Benefits of our service</h3>

                    <div className="lists">
                        <li>More Than 25 Years of experience in logistics</li>
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

            <div className="clients">
                <h2>Our Clients</h2>

                <div className="logos">
                    <img src={c1} alt="clients" />
                    <img src={c2} alt="clients" />
                    <img src={c3} alt="clients" />
                    <img src={c10} alt="clients" />
                    <img src={c5} alt="clients" />
                    <img src={c9} alt="clients" />
                    <img src={c4} alt="clients" />
                    <img src={c6} alt="clients" />
                    <img src={c7} alt="clients" />
                    <img src={c11} alt="clients" />
                    <img src={c8} alt="clients" />
                </div>
            </div>


            <div className="livemap">
                <h2>Our Location</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3770.6813333121995!2d72.89571471490117!3d19.077743487086963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA0JzM5LjkiTiA3MsKwNTMnNTIuNSJF!5e0!3m2!1sen!2sin!4v1684315226859!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </section>


    )
}

export default Home