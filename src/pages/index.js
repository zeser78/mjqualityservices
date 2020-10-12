import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import BookInspection from "../components/bookInspection"
import Services from "../components/servicesSection"
import MapSection from "../components/mapSection"
import BImage from "../components/BGImage"
import mjBackground from "../images/bg-wood.jpeg"
// import VideoSection from "../components/videoSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%` }}>
      <Hero />
      {/* <BImage> */}
      <div
        style={{
          backgroundImage: `url(${mjBackground})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <BookInspection />
        <Services />
        <MapSection />
      </div>
      {/* </BImage> */}
    </div>
  </Layout>
)

export default IndexPage
