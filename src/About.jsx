import React from 'react';
import { man, son } from "./images/index";
import { Link } from 'react-router-dom';
import { BiCaretRight } from "react-icons/bi";

const About = () => {
  return (
    <section className="about">

      <div className="banner abanner">
        <h2>About Us</h2>

        <div className="path">
          <Link to='/' >Home</Link>
          <BiCaretRight />
          <Link to='/about' >About Us</Link>
        </div>
      </div>

      <h2>About Us</h2>

      <div className="abcon">
        <div className='img'>
          <img src={man} alt="profile" />
        </div>
        <div className='abinfo'>
          <p>At Shree Laxmi Roadlines, we take immense pride in our rich history and the journey that has led us to where we are today. Founded by Hari Bhajan Yadav, a visionary and dedicated individual, Shree Laxmi Roadlines has been serving the transportation industry for over 25 years.</p>
          <p>Hari Bhajan Yadav, the esteemed owner of Shree Laxmi Roadlines, started his career as a humble truck driver. With determination, hard work, and an unwavering commitment to excellence, he swiftly climbed the ladder of success. During his time on the road, he gained valuable experience and insights into the transportation sector, which became the foundation for his entrepreneurial ambitions.</p>

          <p>In 1998, Hari Bhajan Yadav seized the opportunity to establish Shree Laxmi Roadlines. With just a single truck and a strong vision, he set out to provide reliable and efficient transportation services to businesses and individuals across the nation. Through his relentless dedication and hands-on approach, he nurtured the company, fostering its growth into a renowned and trusted name in the industry.</p>
        </div>
      </div>

      <div className="abcon abcon1">

        <div className='abinfo'>
          <p>Carrying forward his father's legacy, Rohit Yadav serves as the Managing Director of Shree Laxmi Roadlines. With a deep understanding of the industry and a keen business acumen, Rohit has infused fresh ideas and innovation into the company's operations. Under his dynamic leadership, Shree Laxmi Roadlines has embraced cutting-edge technology and implemented efficient systems, enhancing our ability to meet the evolving demands of our esteemed clients.</p>

          <p>At Shree Laxmi Roadlines, we take great pride in our fleet of modern, well-maintained vehicles, our team of highly skilled professionals, and our unwavering commitment to delivering excellence. With a strong focus on safety, reliability, and timely service, we strive to exceed our customers' expectations, providing them with a seamless and hassle-free experience for all their transportation needs.</p>

          <p>Join us on this incredible journey as we transport your goods with utmost care, professionalism, and efficiency. Experience the difference that Shree Laxmi Roadlines brings to the transportation industry.</p>

          <p>Together, we build a stronger future.</p>
        </div>

        <div className='img'>
          <img src={son} alt="profile" />
        </div>
      </div>

    </section>
  )
}

export default About