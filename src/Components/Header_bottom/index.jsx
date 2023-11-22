import React from 'react'
import "./style.scss"


function index() {
  return (
    <div className='header_bottom_container'>
        <div className="text_side">
            <h1>A Bootstrap 5 template for modern businesses</h1>
            <p>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
            <button className='blue'>Get Started</button>
            <button className='empty'>Learn More</button>
        </div>
        <div className="image">
            <img src="https://dummyimage.com/600x400/343a40/6c757d" alt="" />
        </div>
        
    </div>
  )
}

export default index