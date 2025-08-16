import React from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
// eslint-disable-next-line
// eslint-disable-next-line
import styles from '../styles/pagesStyles/contactUs.module.scss'
import OurMailingAddress from '../components/Presentational/OurMailingAddress/OurMailingAddress'
import HubSpotForm from '../components/Shared/hubSpotForm/HubSpotForm'

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Walt Tec | Get in Touch</title>
        <meta
          name="description"
          content="Have questions or need more information? Contact Walt Technology Group Co., Ltd. today and connect with our offices worldwide in China, USA, Europe, and Southeast Asia."
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Contact Us | Walt Tec | Get in Touch" />
        <meta
          property="og:description"
          content="Reach out to Walt Technology Group Co., Ltd. for inquiries about our innovative sock manufacturing, sustainable practices, and product solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walttec.shop/contact-us/" />
        <meta property="og:image" content="https://walttec.shop/images/contact-us.jpg" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Walt Tec | Get in Touch" />
        <meta
          name="twitter:description"
          content="Contact Walt Technology Group Co., Ltd. for more information about our global sock manufacturing and advanced production technologies."
        />
        <meta name="twitter:image" content="https://walttec.shop/images/contact-us.jpg" />

        <link rel="canonical" href="https://walttec.shop/contact-us/" />
        <meta name="robots" content="index,follow" />

        <script src="//js.hsforms.net/forms/embed/v2.js" async></script>
      </Head>

      <Box className={`${styles.contactUsPage}`}>
        <HubSpotForm quotation={true} />
        <OurMailingAddress />
      </Box>
    </>
  )
}

export default ContactUs
