import React from 'react'
import Gif from "./images/truck-delivery.gif"
const Preloader = () => {
    return (
        <div className="preloader">
            <img src={Gif} alt="gif img" />
        </div>
    )
}

export default Preloader