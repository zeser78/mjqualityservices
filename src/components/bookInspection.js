import React from "react"

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
    <div style={{ margin: `50px 0` }}>
      <h1 style={{ textAlign: `center` }}>Book for Inspection</h1>
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
        <input style={inputStyle} type="text" placeholder="Phone" />
        <input style={inputStyle} type="text" placeholder="Address" />
        <input style={inputStyle} type="date" placeholder="Inspection Date" />
        <input style={inputStyle} type="time" placeholder="Best Time" />
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
            backgroundColor: `hsl(24.2, 100%, 50%)`,
            border: `none`,
          }}
        >
          Book for Inspection
        </button>
      </div>
    </div>
  )
}

export default BookInspection

// .booking-form .form-group .field-input input[type="text"] {
// 	position: relative;
// 	width: 100%;
// 	height: 60px;
// 	border: 1px solid #e3e3e3;
// 	background: #fff;
// 	color: #5a5a68;
// 	border-radius: 5px;
// 	padding: 10px 50px 10px 20px;
// 	font-size: 16px;
// 	transition: all 500ms ease;
// }

// .row {
// 	display: -ms-flexbox;
// 	display: flex;
// 	-ms-flex-wrap: wrap;
// 	flex-wrap: wrap;
// 	margin-right: -15px;
// 	margin-left: -15px;
// }

// .col-lg-4 {
// 	-ms-flex: 0 0 33.333333%;
// 	flex: 0 0 33.333333%;
// 	max-width: 33.333333%;
// }
