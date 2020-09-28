import React from "react"
import StyledBackgroundSection from "../components/BGImage"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import BookInspection from "../components/bookInspection"
import Services from "../components/servicesSection"
import MapSection from "../components/mapSection"
// import VideoSection from "../components/videoSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%` }}>
      <Hero />
      <StyledBackgroundSection>
        <BookInspection />
        <Services />
        <MapSection />
        {/* <VideoSection /> */}
      </StyledBackgroundSection>
    </div>
  </Layout>
)

export default IndexPage
