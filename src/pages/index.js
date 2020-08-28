import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import BookInspection from "../components/bookInspection"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `100%` }}>
      <Hero />
      <BookInspection />
      <Services />
    </div>
  </Layout>
)

export default IndexPage
