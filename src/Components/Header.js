import './Header.scss'
import React from 'react'

export default function Header() {
  return (
    <div className = 'header'>
     <nav className='nav-links'>
          <a  href="/">Home</a>
          <a  href="/OurApartment">Our Apartment</a>
          <a  href="/">Rio</a>
          <a  href="/">Contact</a> |
          <a  href="/OurApartment" className='book-btn'>Book</a>
      </nav>
    </div>
  )
}
