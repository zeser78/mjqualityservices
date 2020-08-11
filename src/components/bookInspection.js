import React from "react"

const BookInspection = () => {
  let inputStyle = {
    width: `100%`,
    height: `60px`,
  }
  return (
    <>
      <h2>Book Inspection</h2>
      <div>
        <input style={inputStyle} type="text" />
        <input style={inputStyle} type="text" />
        <input style={inputStyle} type="text" />
        <input style={inputStyle} type="text" />
        <input style={inputStyle} type="text" />
      </div>
    </>
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
