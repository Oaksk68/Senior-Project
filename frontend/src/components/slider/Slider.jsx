import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
    <div className='slider-row'>
      <div className="slider-col">
        <img className="slider-img" src="./assets/images/others/slider.png" alt=""></img>
      </div>
      <div className="slider-col">
        <h2>Explore what you want just in one website.</h2>
        <Link to="/shop"><FontAwesomeIcon icon={faEye} /> View More</Link>
      </div>
    </div>
  )
}

export default Slider
