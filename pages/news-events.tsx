import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/pagesStyles/newsEvents.module.scss'
import Slider from 'react-slick'
import Image from 'next/image'
import { BlogPost } from '../types/interfaces'
// import Link from "next/link";
import fs from 'fs'
import path from 'path'
import { NEWS_EVENTS_PATH } from '../utils/constants'
import { getMarkdownAllData } from '../utils/markdown'
import { sortByDate } from '../utils/sort'
import { useDevice } from '../utils/deviceContext'

const sliderList = [
  {
    type: 2,
    src: '/images/new-events/news-events-top-1.png',
    // src: "https://asset.cloudinary.com/dq928gtws/b0edac3e74a9c038662754ab6fd9abcb",
    poster: '/images/new-events/news-events-top-1.png',
    header: 'OUR PARTNERS',
    description: '“For the future and beyond, We Are Ready!“',
    btnText: ' PLACE CUSTOM ORDER',
    btnLink: '/about-us',
    // btnLink: "/about-us-learn-more",
  },
]
const settings1 = {
  dotsClass: 'slick-dots slick-thumb home-container-slick-dots ',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
}

const NewsEvents = ({ dataList }: any) => {
  const { isMobile } = useDevice()

  return (
    <>
      <Head>
        <title>News & Events | Walt Tec | Latest Updates</title>
        <meta
          name="description"
          content="Stay updated with the latest news and events from Walt Technology Group, including innovations, sustainability initiatives, and community outreach."
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="News & Events | Walt Tec | Latest Updates" />
        <meta
          property="og:description"
          content="Get the latest updates from Walt Technology Group, featuring innovations in textile manufacturing and sustainability efforts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walttec.shop/news-events/" />
        <meta property="og:image" content="https://walttec.shop/images/news-events.jpg" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News & Events | Walt Tec | Latest Updates" />
        <meta
          name="twitter:description"
          content="Discover Walt Technology Group's latest news, innovations, and events related to sustainable and advanced textile manufacturing."
        />
        <meta name="twitter:image" content="https://walttec.shop/images/news-events.jpg" />

        <link rel="canonical" href="https://walttec.shop/news-events/" />
        <meta name="robots" content="index,follow" />
      </Head>

      <Box className={`${styles.ourPartnersPage}`}>
        <Box position="relative">
          <Slider {...settings1}>
            {sliderList.map((video, index) => (
              <Box key={index} position="relative">
                <Box position="relative" width="100%" height="100%">
                  {video.type === 1 ? (
                    <video
                      src={video.src}
                      controls
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      poster={video.poster}
                      style={{ width: '100%' }}
                    />
                  ) : (
                    <Image
                      src={video.src}
                      alt={`image-${index}`}
                      width={1920}
                      height={1080}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
        {/*<OurPartnersCard/>*/}
      </Box>
      <Box className={styles.newsBox}>
        <Typography
          lineHeight={2}
          fontSize={`${isMobile ? '4rem' : '9.6rem'}`}
          fontWeight={800}
          fontFamily={'HC'}
          color={'var(--base-blue)'}
        >
          NEWS AND EVENTS
        </Typography>
        <Box className={styles.newsEvents}>
          {dataList.map((post: BlogPost, index: number) => (
            <Box
              className={styles.newsCard}
              key={index}
              onClick={() => (window.location.href = `/news-event-slug/${post.slug}`)}
              style={{ cursor: 'pointer' }} // 使整个卡片可点击
            >
              <Box className={styles.imageContainer}>
                <Image
                  src={post.frontmatter.cover_image}
                  alt=""
                  width={500}
                  height={500}
                  style={{ width: '100%', height: 'auto' }}
                />
                <Box className={styles.overlay}>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{
                      borderColor: 'white',
                      color: 'var(--base-blue)',
                      backgroundColor: 'white',
                    }}
                    sx={{
                      fontSize: `${isMobile ? '2rem' : '2.6rem'}`,
                      textTransform: 'none',
                      fontFamily: 'HS',
                      padding: '0.2rem 3rem',
                    }}
                  >
                    Read More →
                  </Button>
                </Box>
              </Box>
              <Typography
                className={styles.newsTitle}
                fontSize={`${isMobile ? '3rem' : '3.6rem'}`}
                fontWeight={800}
                fontFamily={'HS'}
                color={'var(--base-blue)'}
              >
                {post.frontmatter.title}
              </Typography>
              <Typography
                fontSize={`${isMobile ? '2rem' : '2.6rem'}`}
                className={styles.newsExcerpt}
                fontFamily={'HS'}
                color={'var(--base-blue)'}
              >
                {post.frontmatter.excerpt}
              </Typography>
              <Box className={styles.newsFooter}>
                <Box className={styles.authorContainer}>
                  <Box
                    className={styles.authorCircle}
                    fontSize={`${isMobile ? '1.8rem' : '1.8rem'}`}
                  >
                    {post.frontmatter.author
                      .split(' ')
                      .map((word) => word[0].toUpperCase())
                      .join('')
                      .substring(0, 2)}
                  </Box>
                  <Typography
                    fontSize={`${isMobile ? '2rem' : '2.4rem'}`}
                    className={styles.authorName}
                    color={'var(--base-blue)'}
                  >
                    {post.frontmatter.author}
                  </Typography>
                </Box>
                <Typography
                  fontSize={`${isMobile ? '2rem' : '3.6rem'}`}
                  className={styles.postDate}
                  color={'var(--base-blue)'}
                >
                  {post.frontmatter.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default NewsEvents

export async function getStaticProps() {
  const newsFiles = fs.readdirSync(path.join(NEWS_EVENTS_PATH))
  const data = getMarkdownAllData(newsFiles, NEWS_EVENTS_PATH, fs)

  return {
    props: {
      dataList: data.sort(sortByDate),
    },
  }
}
