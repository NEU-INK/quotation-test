// import { homeData } from '../data/data'
import Head from 'next/head'
import AboutUs from '../components/Presentational/AboutUs/AboutUs'
import HomeContainer from '../components/Presentational/HomeContainer/HomeContainer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fs from 'fs'
import path from 'path'
import { sortByDate, sortByIndex } from '../utils/sort'
import { getMarkdownAllData, getMarkDownSingleData } from '../utils/markdown'
import {
  BLOGS_PATH,
  SERVICES_PATH,
  TESTIMONIALS_PATH,
  ABOUT_US_PATH,
  PRODUCT_PATH,
} from '../utils/constants'
import OurJourney from '../components/Presentational/OurJourney/OurJourney'
import React from 'react'
import FeaturedProducts from '../components/Presentational/FeaturedProducts/FeaturedProducts'
import MapComponent from '../components/Presentational/MapComponent/MapComponent'
import PartnersCustomers from '../components/Presentational/PartnersCustomers/PartnersCustomers'
import styles from '../styles/pagesStyles/home.module.scss'
import HubSpotForm from '../components/Shared/hubSpotForm/HubSpotForm'

export default function Home() {
  // const { title } = homeData

  return (
    <>
      <Head>
        <title>Walt Tec | Leading Sock Manufacturer | Walt Technology Group</title>
        <meta
          name="description"
          content="Walt Technology Group is a leading sock manufacturer with an annual capacity of 200 million pairs and 20+ years of global experience."
        />
        {/* Open Graph Metadata */}
        <meta property="og:title" content="Walt Tec | Leading Global Sock Manufacturer" />
        <meta
          property="og:description"
          content="Walt Technology Group Co., Ltd. is a leading global sock manufacturer with an annual capacity of 200 million pairs and over 20 years of experience, serving clients worldwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walttec.shop/" />
        <meta property="og:image" content="https://walttec.shop/video/home-lbt2.jpg" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Walt Tec | Leading Global Sock Manufacturer" />
        <meta
          name="twitter:description"
          content="Walt Technology Group Co., Ltd. is a leading global sock manufacturer with an annual capacity of 200 million pairs and over 20 years of experience, serving clients worldwide."
        />
        <meta name="twitter:image" content="https://walttec.shop/video/home-lbt2.jpg" />
        <meta name="twitter:site" content="@WaltTecOfficial" /> {/* Replace with your handle */}
        <link rel="canonical" href="https://walttec.shop/" />
        <meta name="robots" content="index,follow" />
      </Head>

      <div className={`${styles.homePageContainer} `}>
        <HomeContainer />
        <AboutUs />

        <FeaturedProducts />
        <OurJourney />
        <MapComponent />
        <PartnersCustomers />
      </div>
      <HubSpotForm />
    </>
  )
}

// 通过 getStaticProps 获取静态数据，在构建时执行
export async function getStaticProps() {
  const blogFiles = fs.readdirSync(path.join(BLOGS_PATH))
  const serviceFiles = fs.readdirSync(path.join(SERVICES_PATH))
  const testimonialFiles = fs.readdirSync(path.join(TESTIMONIALS_PATH))
  const productFiles = fs.readdirSync(path.join(PRODUCT_PATH))

  const blogs = getMarkdownAllData(blogFiles, BLOGS_PATH, fs)
  const services = getMarkdownAllData(serviceFiles, SERVICES_PATH, fs)
  const testimonials = getMarkdownAllData(testimonialFiles, TESTIMONIALS_PATH, fs)
  const aboutUs = getMarkDownSingleData(fs, ABOUT_US_PATH)
  const product = getMarkdownAllData(productFiles, PRODUCT_PATH, fs)

  return {
    props: {
      blogs: blogs.sort(sortByDate),
      services: services.sort(sortByIndex),
      testimonials: testimonials.sort(sortByDate),
      aboutUs: aboutUs.props,
      product: product.sort(sortByIndex),
    },
  }
}
