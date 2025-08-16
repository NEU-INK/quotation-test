import React from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/pagesStyles/aboutUs.module.scss'
import AboutUsTop from '../components/Presentational/AboutUsTop/AboutUsTop'
import AboutUsVisionMission from '../components/Presentational/AboutUsVisionMission/AboutUsVisionMission'
import AboutUsOurStory from '../components/Presentational/AboutUsOurStory/AboutUsOurStory'
import AboutUsGlobalPresence from '../components/Presentational/AboutUsGlobalPresence/AboutUsGlobalPresence'
import HubSpotForm from '../components/Shared/hubSpotForm/HubSpotForm'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Walt Tec | Walt Technology Group Co., Ltd</title>
        <meta
          name="description"
          content="Walt Technology Group Co., Ltd. is a global leader in sock manufacturing with over 20 years of industry experience, offering vertically integrated, sustainable, and innovative production solutions worldwide."
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="About Us | Walt Tec | Walt Technology Group Co., Ltd" />
        <meta
          property="og:description"
          content="Discover how Walt Technology Group has grown from humble beginnings to become a global leader in sock manufacturing with sustainable, AI-driven solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walttec.shop/about-us/" />
        <meta property="og:image" content="https://walttec.shop/images/about-us.jpg" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Walt Tec | Walt Technology Group Co., Ltd" />
        <meta
          name="twitter:description"
          content="Learn more about Walt Technology Group's commitment to innovation, sustainability, and global excellence in the sock manufacturing industry."
        />
        <meta name="twitter:image" content="https://walttec.shop/images/about-us.jpg" />

        <link rel="canonical" href="https://walttec.shop/about-us/" />
        <meta name="robots" content="index,follow" />
      </Head>

      <Box className={`${styles.aboutUsPage}`}>
        <AboutUsTop />
        <AboutUsVisionMission />
        <AboutUsOurStory />
        <AboutUsGlobalPresence />
      </Box>
      <HubSpotForm />
    </>
  )
}

export default AboutUs
