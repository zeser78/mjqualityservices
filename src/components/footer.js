import React from "react"
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <footer>
      <div className="section-footer">
        <div>
          <p>
            © {new Date().getFullYear()}, Website developed by:
            <span>
              <a href="https://www.xpaso.com"> XPASO LLC</a>
            </span>
          </p>
        </div>
        <div>
          <h3>
            Social Media:
            <span style={{ padding: `5px` }}>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </span>
            <span style={{ padding: `5px` }}>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </span>
            <span style={{ padding: `5px` }}>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </span>
          </h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer

//TODO: Add social media
