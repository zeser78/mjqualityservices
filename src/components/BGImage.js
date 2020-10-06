import React, { Children } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BImage = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mjqualityservices-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Img fluid={data.placeholderImage.childImageSharp.fluid}>{children}</Img>
    </>
  )
}

export default BImage
