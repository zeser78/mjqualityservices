import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../images/mjqservices-logo-512px-white.png"
import useDocumentScrollThrottled from "./scrollTool"
import Sidebar from "./sidebar"
import headerStyles from "../styles/header.module.css"

// let menuStyle = {
//   textDecoration: `none`,
//   color: `white`,
//   padding: `1rem`,
//   zIndex: `11`,
//   // fontSize: `1.75rem`,
// }

const Header = () => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 480
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 300)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const showStyle = shouldShowShadow ? "shadow" : ""
  const hiddenStyle = shouldHideHeader ? "hidden" : ""

  if (showStyle) {
    console.log(showStyle)
    return (
      <header>
        <div className={headerStyles.iconMenu}>
          <Sidebar />
        </div>
        <HeaderHorizontal />
      </header>
    )
  } else {
    return (
      <header>
        <div className={headerStyles.iconMenu}>
          <Sidebar />
        </div>
        <div>
          <Link to="/">
            <img src={logo} className={headerStyles.logoMobil} />
          </Link>
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
      className={`${headerStyles.section} ${headerStyles.vertical} ${headerStyles.animationMenu}`}
    >
      <Link to="/">
        <img src={logo} className={headerStyles.logo} />
      </Link>
      <Link to="/" className={headerStyles.menu}>
        Home
      </Link>
      <Link to="about-us" className={headerStyles.menu}>
        About Us
      </Link>

      <Link to="/#services-title" className={headerStyles.menu}>
        Services
      </Link>
      <Link to="/services" className={headerStyles.menu}>
        Gallery
      </Link>
      <Link to="/#contactus" className={headerStyles.menu}>
        Contact Us
      </Link>
    </div>
  )
}

const HeaderHorizontal = () => {
  return (
    <div
      className={`${headerStyles.section} ${headerStyles.animationMenu}`}
      // className="section-menu animation-menu"
    >
      <Link to="/">
        <img src={logo} className={headerStyles.logo} />
      </Link>
      <Link to="/" className={headerStyles.menu}>
        Home
      </Link>
      <Link to="about-us" className={headerStyles.menu}>
        About Us
      </Link>

      <Link to="/#services-title" className={headerStyles.menu}>
        Services
      </Link>
      <Link to="/services" className={headerStyles.menu}>
        Gallery
      </Link>
      <Link to="/#contactus" className={headerStyles.menu}>
        Contact Us
      </Link>
    </div>
  )
}
