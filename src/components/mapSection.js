import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import iconLogo from "../images/icons-black/icon-48x48.png"

const mapStyles = {
  position: "relative",
  width: "100%",
  height: "400px",
  boder: `1px solid  pink`,
}
const position = {
  lat: 33.9812,
  lng: -84.1542,
}
const MapSection = props => {
  return (
    <Map
      containerStyle={mapStyles}
      google={props.google}
      zoom={12}
      style={mapStyles}
      initialCenter={position}
    >
      <Marker position={position} icon={iconLogo} />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA_e34Bpq2iIu6lHlS7J5nBjfpcY_ZXonc",
})(MapSection)
