import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo-mjqservices-white-500px.png"

let menuStyle = {
  textDecoration: `none`,
  color: `white`,
  padding: `1rem`,
  // fontSize: `1.75rem`,
}

const Header = ({ siteTitle }) => (
  <header
  // style={{
  //   background: `white`,
  //   marginBottom: `1.45rem`,
  // }}
  >
    <div
      style={{
        // backgroundColor: `hsl(0, 100%, 3%)`,
        opacity: `0.7`,
        // height: `3rem`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `flex-start`,
        padding: `1rem`,
        color: `white`,
        fontWeight: `900`,
        fontSize: `1.5rem`,
        textTransform: `uppercase`,
        position: `fixed`,
        width: `100%`,
        top: 0,
        left: 0,
        zIndex: 10,
      }}
    >
      <img src={logo} width="150px" />
      <Link to="/" style={menuStyle}>
        Home
      </Link>
      <Link to="/" style={menuStyle}>
        About Us
      </Link>
      {/* <img src={logo} width="150px" /> */}
      <Link to="/" style={menuStyle}>
        Services
      </Link>
      <Link to="/" style={menuStyle}>
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
