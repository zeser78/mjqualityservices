import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/mjqualityservices-500x.png"

const Header = ({ siteTitle }) => (
  <header
  // style={{
  //   background: `white`,
  //   marginBottom: `1.45rem`,
  // }}
  >
    <div
      style={{
        backgroundColor: `hsl(197, 69%, 70%)`,
        // height: `3rem`,
        display: `flex`,
        justifyContent: `space-around`,
        alignItems: `center`,
        padding: `0.5rem`,
        color: `black`,
        fontWeight: `900`,
        fontSize: "1.5rem",
      }}
    >
      <Link>Home</Link>
      <Link>About Us</Link>
      <img src={logo} width="150px" />
      <Link>Services</Link>
      <Link>Contact Us</Link>
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
