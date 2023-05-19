import React from 'react'
import { Link } from 'react-router-dom';
import { BiCaretRight } from "react-icons/bi";
import {
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image12, image13, image14,
  image15, image16, image17, image22, image23, image24, image27, image28, image29, image30, image31, re1, re2, re3, re4, re5, r01, r02, r03, r04, r05, r06, r07, tu1, tu2, tu3, tu4, tu5, tu6, tu7
} from "./images/index"
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


const Gallery = () => {

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <section className="gallery">
      <div className="banner gbanner">
        <h2>Gallery</h2>

        <div className="path">
          <Link to='/' >Home</Link>
          <BiCaretRight />
          <Link to='/gallery' >Gallery</Link>
        </div>
      </div>
      <div className="gcon">
        <h2>Images</h2>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href={image1}><img style={{ margin: '10px' }} src={image1} alt="Trucks Image" /></a>
          <a href={image2}><img style={{ margin: '10px' }} src={image2} alt="Trucks Image" /></a>
          <a href={image3}><img style={{ margin: '10px' }} src={image3} alt="Trucks Image" /></a>
          <a href={image4}><img style={{ margin: '10px' }} src={image4} alt="Trucks Image" /></a>
          <a href={image5}><img style={{ margin: '10px' }} src={image5} alt="Trucks Image" /></a>
          <a href={image6}><img style={{ margin: '10px' }} src={image6} alt="Trucks Image" /></a>
          <a href={image31}><img style={{ margin: '10px' }} src={image31} alt="Trucks Image" /></a>
          <a href={image7}><img style={{ margin: '10px' }} src={image7} alt="Trucks Image" /></a>
          <a href={image8}><img style={{ margin: '10px' }} src={image8} alt="Trucks Image" /></a>
          <a href={image9}><img style={{ margin: '10px' }} src={image9} alt="Trucks Image" /></a>
          <a href={re5}><img style={{ margin: '10px' }} src={re5} alt="refinery" /></a>
          <a href={image10}><img style={{ margin: '10px' }} src={image10} alt="Trucks Image" /></a>
          <a href={image12}><img style={{ margin: '10px' }} src={image12} alt="Trucks Image" /></a>
          <a href={image13}><img style={{ margin: '10px' }} src={image13} alt="Trucks Image" /></a>
          <a href={image29}><img style={{ margin: '10px' }} src={image29} alt="Trucks Image" /></a>
          <a href={image14}><img style={{ margin: '10px' }} src={image14} alt="Trucks Image" /></a>
          <a href={re3}><img style={{ margin: '10px' }} src={re3} alt="refinery" /></a>
          <a href={image15}><img style={{ margin: '10px' }} src={image15} alt="Trucks Image" /></a>
          <a href={re1}><img style={{ margin: '10px' }} src={re1} alt="refinery" /></a>
          <a href={image16}><img style={{ margin: '10px' }} src={image16} alt="Trucks Image" /></a>
          <a href={image17}><img style={{ margin: '10px' }} src={image17} alt="Trucks Image" /></a>
          <a href={image28}><img style={{ margin: '10px' }} src={image28} alt="Trucks Image" /></a>
          <a href={re4}><img style={{ margin: '10px' }} src={re4} alt="refinery" /></a>
          <a href={image22}><img style={{ margin: '10px' }} src={image22} alt="Trucks Image" /></a>
          <a href={image23}><img style={{ margin: '10px' }} src={image23} alt="Trucks Image" /></a>
          <a href={image24}><img style={{ margin: '10px' }} src={image24} alt="Trucks Image" /></a>
          <a href={image27}><img style={{ margin: '10px' }} src={image27} alt="Trucks Image" /></a>
          <a href={image30}><img style={{ margin: '10px' }} src={image30} alt="Trucks Image" /></a>
          <a href={tu1}><img style={{ margin: '10px' }} src={tu1} alt="Trucks Image" /></a>
          <a href={tu2}><img style={{ margin: '10px' }} src={tu2} alt="Trucks Image" /></a>
          <a href={tu3}><img style={{ margin: '10px' }} src={tu3} alt="Trucks Image" /></a>
          <a href={tu4}><img style={{ margin: '10px' }} src={tu4} alt="Trucks Image" /></a>
          <a href={tu5}><img style={{ margin: '10px' }} src={tu5} alt="Trucks Image" /></a>
          <a href={tu6}><img style={{ margin: '10px' }} src={tu6} alt="Trucks Image" /></a>
          <a href={tu7}><img style={{ margin: '10px' }} src={tu7} alt="Trucks Image" /></a>
          <a href={re2}><img style={{ margin: '10px' }} src={re2} alt="refinery" /></a>
          <a href={r01}><img style={{ margin: '10px' }} src={r01} alt="Rohit Yadav" /></a>
          <a href={r02}><img style={{ margin: '10px' }} src={r02} alt="Rohit Yadav" /></a>
          <a href={r03}><img style={{ margin: '10px' }} src={r03} alt="Rohit Yadav" /></a>
          <a href={r04}><img style={{ margin: '10px' }} src={r04} alt="Rohit Yadav" /></a>
          <a href={r05}><img style={{ margin: '10px' }} src={r05} alt="Rohit Yadav" /></a>
          <a href={r06}><img style={{ margin: '10px' }} src={r06} alt="Rohit Yadav" /></a>
          <a href={r07}><img style={{ margin: '10px' }} src={r07} alt="Rohit Yadav" /></a>


        </LightGallery>
      </div>


    </section>
  )
}

export default Gallery