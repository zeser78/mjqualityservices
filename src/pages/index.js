import React from "react"
import Layout from "../components/layout"
import "../../firebase"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BookInspection from "../components/bookInspection"
import Services from "../components/servicesSection"
import MapSection from "../components/mapSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%` }}>
      <Hero />

      <div
        style={{
          position: `relative`,
          zIndex: 9,
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
