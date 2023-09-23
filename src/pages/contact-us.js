import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import ContactUsStyles from "../styles/contactus.module.css"
import pageTitleStyles from "../styles/pageTitle.module.css"

const ContactUs = () => {

  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className={ContactUsStyles.container}>
        <div className={pageTitleStyles.container}>
          <h1>CONTACT US</h1>
        </div>
        <div className={ContactUsStyles.containerContent}>
          <div className={ContactUsStyles.content}>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              style={{ paddingRight: "15px" }}
            />
            <FontAwesomeIcon icon={faPhoneAlt} size="2x" />

            <h2>(404)-542-0566</h2>
            <h2>(404)-587-5154</h2>
            <h3>
              <a href="mailTo:Mjqualityservicesllc@gmail.com">
                Mjqualityservicesllc@gmail.com
              </a>
            </h3>
            <h4>
              <a href="www.mjqservices.com">www.mjqservices.com</a>
            </h4>

            <h1>FREE ESTIMATE!</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ContactUs
