import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/logo-mjqservices-white-500px.png"
import useDocumentScrollThrottled from "./scrollTool"

let menuStyle = {
  textDecoration: `none`,
  color: `white`,
  padding: `1rem`,
  // fontSize: `1.75rem`,
}

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 180
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

  const shadowStyle = shouldShowShadow ? "shadow" : ""
  const hiddenStyle = shouldHideHeader ? "hidden" : ""

  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
      <div
        style={{
          // backgroundColor: `hsl(0, 100%, 3%)`,
          opacity: `1`,
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

        <Link to="/" style={menuStyle}>
          Services
        </Link>
        <Link to="/" style={menuStyle}>
          Contact Us
        </Link>
      </div>
    </header>
  )
}

export default Header
