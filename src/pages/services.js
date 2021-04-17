import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import firebase from "gatsby-plugin-firebase"
import galleryStyles from "../styles/services.module.css"
import pageTitleStyles from "../styles/pageTitle.module.css"

const LandingGallery = () => {
  useEffect(() => {
    firebase.analytics().logEvent("visited_services")
  }, [])
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
      <div className={galleryStyles.container}>
        <div className={pageTitleStyles.container}>
          <h1>SERVICES</h1>
        </div>
        <div id="Tv-Installation" className={galleryStyles.title}>
          <h2>TV Installation</h2>
        </div>
        <div className={galleryStyles.parent}>
          {data.tv.edges.map((item, index) => {
            return (
              <div key={index} className={galleryStyles.box}>
                <Img
                  className={galleryStyles.image}
                  fluid={item.node.childImageSharp.fluid}
                  alt={`${item.node.name.replace(/-/g, " ")}`}
                />
              </div>
            )
          })}
        </div>
        <div id="painting" className={galleryStyles.title}>
          <h2>Painting</h2>
        </div>
        <div className={galleryStyles.parent}>
          {data.painting.edges.map((item, index) => {
            return (
              <div key={index} className={galleryStyles.box}>
                <Img
                  className={galleryStyles.image}
                  fluid={item.node.childImageSharp.fluid}
                  alt={`${item.node.name.replace(/-/g, " ")}`}
                />
              </div>
            )
          })}
        </div>
        <div id="remodeling" className={galleryStyles.title}>
          <h2>Remodeling</h2>
        </div>
        <div className={galleryStyles.parent}>
          {data.remodeling.edges.map((item, index) => {
            return (
              <div key={index} className={galleryStyles.box}>
                <Img
                  className={galleryStyles.image}
                  fluid={item.node.childImageSharp.fluid}
                  alt={`${item.node.name.replace(/-/g, " ")}`}
                />
              </div>
            )
          })}
        </div>
        <div id="others" className={galleryStyles.title}>
          <h2>Others</h2>
        </div>
        <div className={galleryStyles.parent}>
          {data.others.edges.map((item, index) => {
            return (
              <div key={index} className={galleryStyles.box}>
                <Img
                  className={galleryStyles.image}
                  fluid={item.node.childImageSharp.fluid}
                  alt={`${item.node.name.replace(/-/g, " ")}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default LandingGallery

// str.replace(/-/g, "")
