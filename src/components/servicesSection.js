import React from "react"

const Services = () => {
  return (
    <div style={{ margin: `50px 0` }}>
      <h1 style={{ textAlign: `center` }}>Services</h1>
      <div style={{ display: `flex`, flexDirection: `row` }}>
        <div className="service-box">
          <h2>Painting</h2>
          <ul>
            <li>
              Resurfacing and refinishing
              <li>3D Wall</li>
            </li>
          </ul>
        </div>
        <div className="service-box">
          <h2>Remodeling</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h3>
        </div>
        <div className="service-box">
          <h2>Cleaning</h2>
          <ul>
            <li>Carpet cleaning.</li>
            <li>Streching</li>
            <li>Repairs carpet.</li>
            <li>Water damange.</li>
          </ul>
        </div>
        <div className="service-box">
          <h2>Reparing</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Services
