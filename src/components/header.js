import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo01.png'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#A60000',
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
)

export default Header
