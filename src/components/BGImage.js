import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "mj-background.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          //   className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
// import styled from "styled-components"

// const BgImage = styled(Hero)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: -1;
//   height: 100vh; // or whatever

//   // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
//   & > img {
//     object-fit: cover !important; // or whatever
//     object-position: 0% 0% !important; // or whatever
//     font-family: "object-fit: cover !important; object-position: 0% 0% !important;"; // needed for IE9+ polyfill
//   }
// `

// const Hero = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "mjqualityservices-6.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 1000) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   return <Image fluid={data.placeholderImage.childImageSharp.fluid} />
// }
// export default BgImage
