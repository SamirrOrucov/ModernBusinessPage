import React from 'react'
import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown'




function index() {
  return (
    <div className='nav_container'>
        <p>Start Bootstap</p>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Blog <FontAwesomeIcon icon={faSortDown} /></li>
            <li>Portfolio <FontAwesomeIcon icon={faSortDown} /></li>
        </ul>

    </div>
  )
}

export default index