import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import BookInspection from "../components/bookInspection"
import Services from "../components/servicesSection"
import MapSection from "../components/mapSection"
import firebase from "gatsby-plugin-firebase"

const IndexPage = () => {
  useEffect(() => {
    firebase.analytics().logEvent("visited_home")
  }, [])

  return (
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
      </div>
    </Layout>
  )
}

export default IndexPage
