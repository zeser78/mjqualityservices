import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import backgroundAboutUs from "../images/background-about.svg"
import aboutUsStyles from "../styles/aboutus.module.css"
import pageTitleStyles from "../styles/pageTitle.module.css"

const AboutUs = () => {
  return (
    <Layout>
      <SEO title="About Us" />
      <div className={aboutUsStyles.container}>
        <div className={pageTitleStyles.container}>
          <h1>ABOUT US</h1>
        </div>
        <div className={aboutUsStyles.containerContent}>
          <div className={aboutUsStyles.content}>
            <p>
              Like many people in this wonderful country, we have arrived with a
              suitcase full of dreams and a thousand goals to accomplish. Thank
              God we can say that this is one of them and we can't be happier!.
            </p>
            <p>
              We have approximately 5 years of experience in different services.
              As our name says, we offer QUALITY at the best price of the market
              so everyone can have access to them.
            </p>
            <p>
              We don't limit ourselves to TV Installation painting, and
              remodeling, we go beyond covering services such as carpet
              cleaning, remodeling, deck construction, resurfacing, and 3D
              walls.
            </p>
            <p>
              To guarantee an excellent service we have a super talented and
              specialized team.
            </p>
            <p>
              We are MJ Quality Services and our greatest reward is your
              satisfaction!.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default AboutUs
