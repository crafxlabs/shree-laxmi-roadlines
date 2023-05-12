import React from 'react'
import { Link } from 'react-router-dom';
import { BiCaretRight } from "react-icons/bi";
import image from "./images/trucks.jpg"
const Gallery = () => {
  return (
    <section className="contact">
      <div className="banner gbanner">
        <h2>Gallery</h2>

        <div className="path">
          <Link to='/' >Home</Link>
          <BiCaretRight />
          <Link to='/gallery' >Gallery</Link>
        </div>
      </div>
      <div className="gcon">
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
        <img width="350px" style={{margin:'10px'}} src={image} alt="" />
      </div>
    </section>
  )
}

export default Gallery