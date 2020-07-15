import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-mjqservices-white-500px.png"

const Header = ({ siteTitle }) => (
  <header
  // style={{
  //   background: `white`,
  //   marginBottom: `1.45rem`,
  // }}
  >
    <div
      style={{
        backgroundColor: `hsl(0, 100%, 3%)`,
        opacity: `0.7`,
        // height: `3rem`,
        display: `flex`,
        justifyContent: `space-around`,
        alignItems: `center`,
        padding: `0.5rem`,
        color: `white`,
        fontWeight: `900`,
        fontSize: `1.5rem`,
        position: `fixed`,
        width: `100%`,
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <Link to="/" style={{ textDecoration: `none`, color: `white` }}>
        Home
      </Link>
      <Link to="/" style={{ textDecoration: `none`, color: `white` }}>
        About Us
      </Link>
      <img src={logo} width="150px" />
      <Link to="/" style={{ textDecoration: `none`, color: `white` }}>
        Services
      </Link>
      <Link to="/" style={{ textDecoration: `none`, color: `white` }}>
        Contact Us
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
