import React from 'react'
import Features from '../Featured_titles/index'
import './style.scss'

function index() {
  return (
    <div className='sec1_container'>
        <div className="sec1_text">
        <h5>A better way to start building.</h5>

        </div>
        <div className="features">
            <Features/>

        </div>
    </div>
  )
}

export default index