import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import galleryStyles from "../styles/services.module.css"
import pageTitleStyles from "../styles/pageTitle.module.css"
// import "../styles/gallery.module.css"

const LandingGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      tv: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "TVInstallation" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
      painting: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "Painting" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
      remodeling: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "Remodeling" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
      others: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "Others" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Services" />
      <div id="Tv-Installation" className={galleryStyles.parent}>
        <div className={pageTitleStyles.container}>
          <h1>SERVICES</h1>
        </div>
        <div className={galleryStyles.title}>
          <h2>TV Installation</h2>
        </div>
        {data.tv.edges.map((item, index) => {
          console.log(item)
          return (
            <div key={index}>
              <Img
                className={galleryStyles.image}
                fluid={item.node.childImageSharp.fluid}
                alt={`${item.node.name.replace(/-/g, " ")}`}
              />
            </div>
          )
        })}
      </div>
      <div id="painting" className={galleryStyles.parent}>
        <div className={galleryStyles.title}>
          <h2>Painting</h2>
        </div>
        {data.painting.edges.map((item, index) => {
          console.log(item)
          return (
            <div key={index}>
              <Img
                className={galleryStyles.image}
                fluid={item.node.childImageSharp.fluid}
                alt={`${item.node.name.replace(/-/g, " ")}`}
              />
            </div>
          )
        })}
      </div>
      <div id="remodeling" className={galleryStyles.parent}>
        <div className={galleryStyles.title}>
          <h2>Remodeling</h2>
        </div>
        {data.remodeling.edges.map((item, index) => {
          console.log(item)
          return (
            <div key={index}>
              <Img
                className={galleryStyles.image}
                fluid={item.node.childImageSharp.fluid}
                alt={`${item.node.name.replace(/-/g, " ")}`}
              />
            </div>
          )
        })}
      </div>
      <div id="others" className={galleryStyles.parent}>
        <div className={galleryStyles.title}>
          <h2>Others</h2>
        </div>
        {data.others.edges.map((item, index) => {
          console.log(item)
          return (
            <div key={index}>
              <Img
                className={galleryStyles.image}
                fluid={item.node.childImageSharp.fluid}
                alt={`${item.node.name.replace(/-/g, " ")}`}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default LandingGallery

// str.replace(/-/g, "")
