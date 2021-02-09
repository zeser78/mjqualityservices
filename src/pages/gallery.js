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
          return (
            <div
              key={index}
              // className={`{galleryStyles.box} box-${index}`}
            >
              <Img
                className={galleryStyles.image}
                fluid={item.node.childImageSharp.fluid}
                alt={"MJ Quality Services - ${item.node.title}"}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
  //find the div to render box
  // return (
  //   <>
  //     <div className={landingGalleryStyles.container}>
  //       <h1>Custom Creations</h1>
  //     </div>

  //     <div className={landingGalleryStyles.containerGallery}>
  //       {data.allFile.edges.map((image, index) => (
  //         <div key={index} className={`${landingGalleryStyles.item}`}>
  //           {/* <div key={index} className={`${landingGalleryStyles.box}${index}`}> */}
  //           {console.log(landingGalleryStyles.box + index)}
  //           <Img
  //             fluid={image.node.childImageSharp.fluid}
  //             alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
  //           />
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // )
}

export default LandingGallery

{
  /* <div className="parent">
{data.allGalleryJson.edges.map((item, index) => {
 
  return (
    <div key={index} className={`box box-${index}`}>
      <Img
        fluid={item.node.image.childImageSharp.fluid}
        style={{ position: `relative`, minHeight: `100%`  }}
        alt={item.node.title}
      />
    </div>
  )
})}
</div> */
}
