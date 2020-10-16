import React from "react"
import mjBackground from "../images/bg2.jpeg"
import StyledBackgroundSection from "./BGImage"

const BookInspection = () => {
  let inputStyle = {
    width: `100%`,
    height: `3.2rem`,
    display: `flex`,
    // flex: `0 0 0 30%`,
    maxWidth: `25%`,
    margin: `10px`,
    justifyContent: `center`,
    alignItems: `center`,
    // padding: `10px 50px 10px 20px`,
  }
  return (
    <div
      style={{
        padding: `50px 0`, position:`relative` 
      }}
    >
      <h1 style={{ textAlign: `center`, color: `white`, margin: `0` }}>
        Get A Free Estimate
      </h1>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          alignItems: `center`,
          justifyContent: `center`,
          margin: `10px auto`,
        }}
      >
        <input style={inputStyle} type="text" placeholder="Your Name" />
        <input style={inputStyle} type="email" placeholder="Email" />
        <input style={inputStyle} type="phone" placeholder="Phone Number" />
        <input style={inputStyle} type="text" placeholder="Zip" />
        <input style={inputStyle} type="textarea" placeholder="Message" />
        <button className="button-estimate">Get a Free Estimate</button>
      </div>
    </div>
  )
}

export default BookInspection
