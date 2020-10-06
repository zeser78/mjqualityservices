import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../images/mjqservices-logo-512px-white.png"
import useDocumentScrollThrottled from "./scrollTool"
import Sidebar from "./sidebar"

let menuStyle = {
  textDecoration: `none`,
  color: `white`,
  padding: `1rem`,
  zIndex: `11`,
  // fontSize: `1.75rem`,
}

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 280
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const showStyle = shouldShowShadow ? "shadow" : ""
  const hiddenStyle = shouldHideHeader ? "hidden" : ""

  if (showStyle) {
    return (
      <header>
        <div className="icon-menu">
          <Sidebar />
        </div>
        {/* <div>
          <img
            src={logo}
            width="100px"
            style={{ zIndex: 400, position: `absolute` }}
          />
        </div> */}
        <HeaderHorizontal />
      </header>
    )
  } else {
    return (
      <header>
        <div className="icon-menu">
          <Sidebar />
        </div>
        <div className="logo-mobile">
          <img
            src={logo}
            width="100px"
            style={{
              zIndex: 400,
              position: `absolute`,
              margin: `0.7rem`,
            }}
          />
        </div>
        <HeaderVertical />
      </header>
    )
  }
}

export default Header

const HeaderVertical = () => {
  return (
    <div
      className="section-menu"
      style={{
        // backgroundColor: `hsl(0, 100%, 3%)`,
        opacity: `1`,
        // height: `3rem`,
        // display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `flex-start`,
        padding: `1rem`,
        color: `white`,
        fontWeight: `600`,
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

      <Link to="/" style={menuStyle}>
        Services
      </Link>
      <Link to="/" style={menuStyle}>
        Contact Us
      </Link>
    </div>
  )
}

const HeaderHorizontal = () => {
  return (
    <div
      className="section-menu"
      style={{
        backgroundColor: `hsl(0, 100%, 3%)`,
        opacity: `0.6`,
        // height: `3rem`,
        // display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        alignItems: `center`,
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

      <Link to="/" style={menuStyle}>
        Services
      </Link>
      <Link to="/" style={menuStyle}>
        Contact Us
      </Link>
    </div>
  )
}
