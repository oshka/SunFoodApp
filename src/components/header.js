import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo02.png'

const Header = ({ siteTitle }) => (
  <div><div
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
          <img src={logo} alt="Logo" alt="{siteTitle}" title="{siteTitle}" className="logo-img"/>
        </Link>
      </h1>
    </div>
  </div>
  <div 
style={{
  background: '#2d4059',
  }}>
<div
  style={{
    margin: '0 auto',
    maxWidth: 960,
  }}
>
<ul className="top-menu">
  <li><a href="">Home</a></li>
  <li><a href="">Search Food</a></li>
  <li><a href="">View Food Collections</a></li>
  <li><a href="">Contact Us</a></li>

</ul>
 
</div>
</div>
  </div>

)

export default Header
