import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mjqualityservices-6.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div style={{ height: `100vh` }}>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{
          position: `fixed`,
          top: 0,
          bottom: 0,
          width: `100%`,
          heigth: `100vh`,
        }}
        alt="MJ Quality Services - background hero"
      />
    </div>
  )
}

export default Hero
