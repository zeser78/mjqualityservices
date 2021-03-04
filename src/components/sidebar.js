import React, { useState, useEffect } from "react"
import { Link } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/pro-light-svg-icons"
import logo from "../images/mjqservices-logo-512px-white.png"
import sidebarStyles from "../styles/sidebar.module.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const renderSidebar = () => {
    if (!isOpen) {
      return null
    }

    return (
      <div className={sidebarStyles.sidebar}>
        <div className={sidebarStyles.sidebarLink}>
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
        </div>
        <div className={sidebarStyles.sidebarLink}>
          <Link to="/about-us" onClick={toggleSidebar}>
            About Us
          </Link>
        </div>
        <div className={sidebarStyles.sidebarLink}>
          <Link to="/#services" onClick={toggleSidebar}>
            Services
          </Link>
        </div>
        <div className={sidebarStyles.sidebarLink}>
          <Link to="/services" onClick={toggleSidebar}>
            Gallery
          </Link>
        </div>
        <div className={sidebarStyles.sidebarLink}>
          <Link to="/contact-us" onClick={toggleSidebar}>
            Contact Us
          </Link>
        </div>
      </div>
    )
  }
  const toggleSidebar = () => {
    setIsOpen(value => !value)
  }

  return (
    <div>
      <div className={sidebarStyles.sidebarIcon}>
        <SidebarIcon isOpen={isOpen} handleClick={toggleSidebar} />
      </div>
      {renderSidebar()}
    </div>
  )
}
// }

// src/components/SidebarIcon.js

const SidebarIcon = ({ handleClick, isOpen }) => {
  return (
    <span onClick={handleClick}>
      {isOpen ? (
        <FontAwesomeIcon icon={faTimes} size="2x" color="white" />
      ) : (
        <FontAwesomeIcon icon={faBars} size="2x" color="white" />
      )}
    </span>
  )
}

export default Sidebar
