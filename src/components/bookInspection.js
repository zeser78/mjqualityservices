import React from "react"
import MjBg from "../images/mj-background.png"

const BookInspection = () => {
  let inputStyle = {
    width: `100%`,
    height: `60px`,
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
      className="container-bg"
      style={{ margin: `50px 0`, backgroundImage: MjBg }}
    >
      <h1 style={{ textAlign: `center` }}>Get A Free Estimate</h1>
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
        <button
          style={{
            width: `100%`,
            maxWidth: `25%`,
            background: `#009aa8`,
            height: `60px`,
            textAlign: `center`,
            borderRadius: `5px`,
            fontSize: `1.3rem`,
            margin: `10px`,
            padding: `14px 30px`,
            color: `white`,
            paddingLeft: `17px`,
            paddingRight: `15px`,
            backgroundColor: `hsl(67, 63%, 52%)`,
            border: `none`,
          }}
        >
          Get a Free Estimate
        </button>
      </div>
    </div>
  )
}

export default BookInspection
