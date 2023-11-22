import React from 'react'
import Nav from '../Nav/index'
import Header_Bottom from '../Header_bottom/index'
import "./style.scss"

function index() {
  return (
    <div className='header_container'>
        <Nav/>
        <Header_Bottom/>
    </div>
  )
}

export default index