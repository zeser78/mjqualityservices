import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCouch,
  faPaintRoller,
  faTvMusic,
  faDraftingCompass,
} from "@fortawesome/pro-light-svg-icons"
import serviceSectionStyles from "../styles/servicesSection.module.css"

const Services = () => {
  return (
    <div id="services-title" className={serviceSectionStyles.section}>
      <h1>Services</h1>
      <div className={serviceSectionStyles.container}>
        <div
          className={`${serviceSectionStyles.box} ${serviceSectionStyles.box1}`}
        >
          <Link to="/services#Tv-Installation">
            <FontAwesomeIcon icon={faTvMusic} size="4x" />
          </Link>
          <h2>TV Installation</h2>
        </div>
        <div
          className={`${serviceSectionStyles.box} ${serviceSectionStyles.box2}`}
        >
          <Link to="/services#painting">
            <FontAwesomeIcon icon={faPaintRoller} size="4x" />
          </Link>
          <h2>Painting</h2>
        </div>
        <div
          className={`${serviceSectionStyles.box} ${serviceSectionStyles.box1}`}
        >
          <Link to="/services#remodeling">
            <FontAwesomeIcon icon={faCouch} size="4x" />
          </Link>
          <h2>Remodeling</h2>
        </div>
        <div
          className={`${serviceSectionStyles.box} ${serviceSectionStyles.box2}`}
        >
          <Link to="services/#others">
            <FontAwesomeIcon icon={faDraftingCompass} size="4x" />
          </Link>
          <h2>Others</h2>
        </div>
      </div>
    </div>
  )
}

export default Services
