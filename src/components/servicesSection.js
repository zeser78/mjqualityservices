import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCouch,
  faPaintRoller,
  faTvMusic,
} from "@fortawesome/pro-light-svg-icons"

const Services = () => {
  return (
    <div style={{ margin: `50px 0` }}>
      <h1 style={{ textAlign: `center`, color: `white` }} id="services">
        Services
      </h1>
      <div style={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}>
        <div className="service-box">
          <FontAwesomeIcon icon={faTvMusic} size="5x" />
          <h2>TV Installation</h2>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faPaintRoller} size="5x" />
          <h2>Painting</h2>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faCouch} size="5x" />
          <h2>Remodeling</h2>
        </div>
        {/* <div className="service-box">
       
          <h2>Mounting</h2>
          <ul>
            <li>TV mounting with hidden cables.</li>
            <li>Water Heater.</li>
            <li>Air duct mounting.</li>
          </ul>
        </div>
        <div className="service-box">
          <h2>Painting</h2>
          <ul>
            <li>Resurfacing and refinishing.</li>
            <li>3D Wall.</li>
          </ul>
        </div>
        <div className="service-box">
          <h2>Remodeling</h2>
          <h3>
            <ul>
              <li>Swimming pool.</li>
              <li>Bathrooms</li>
              <li>Kitchens</li>
            </ul>
          </h3>
        </div>
        <div className="service-box">
          <h2>Cleaning</h2>
          <ul>
            <li>Carpet cleaning.</li>
            <li>Streching.</li>
            <li>Water damange.</li>
            <li>Air duct cleaning.</li>
          </ul>
        </div>
        <div className="service-box">
          <h2>Reparing</h2>
          <h3>
            <ul>
              <li>Sinks and toilets.</li>
              <li>Repairs Carpet</li>
            </ul>
          </h3>
        </div>
        <div className="service-box">
          <h2>Construction</h2>
          <h3>
            <ul>
              <li>Deck Design.</li>
              <li>Swimming Pool.</li>
              <li>A/C and Heater system.</li>
            </ul>
          </h3>
        </div> */}
      </div>
    </div>
  )
}

export default Services
