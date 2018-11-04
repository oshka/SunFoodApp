import React from 'react'
import { Link } from 'gatsby'
//import logo from '../images/logo01.png'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: '#2d4059',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '20px',
      }}
    >
      <p style={{ margin: 0,  color: '#bab7b7', }}>
      © 2018 Copyright <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        > {siteTitle}
        </Link>
      </p>
    </div>
  </div>
)

export default Footer
