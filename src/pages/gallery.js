import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import galleryStyles from "../styles/gallery.module.css"
import pageTitleStyles from "../styles/pageTitle.module.css"
// import "../styles/gallery.module.css"

const LandingGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "gallery" }
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
      <SEO title="gallery" />
      <div className={galleryStyles.parent}>
        <div className={pageTitleStyles.container}>
          <h1>GALLERY</h1>
        </div>
        {data.allFile.edges.map((item, index) => {
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
