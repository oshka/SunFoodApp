import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo02.png'

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        background: '#ea5455',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Logo" title={siteTitle} className="logo-img" />
          </Link>
        </h1>
      </div>
    </div>
    <div
      style={{
        background: '#2d4059',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
        }}
      >
        <ul className="top-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Search Food</Link></li>
          <li><Link to="/gallery">View Food Collections</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
