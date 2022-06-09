import './Header.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className = 'header'>
     <nav className='nav-links'>
          <Link to="/">Home</Link>
          <Link to="/ourApartment">Our Apartment</Link>
          <Link to="/Rio">Rio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/ourApartment" className='book-btn'>Book</Link>
  
      </nav>
    </div>
  )
}
