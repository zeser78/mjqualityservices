import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"

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
      <BookInspection />
      <Services />
      <MapSection />
    </div>
  </Layout>
)

export default IndexPage

//TODO: add pics, about Us section
//TODO: add logo to map
//TODO: add background as hero pic
