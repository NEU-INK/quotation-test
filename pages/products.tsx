import Head from 'next/head'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import styles from '../styles/pagesStyles/products.module.scss'
import { Box, Typography } from '@mui/material'
import Slider from 'react-slick'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ProductsList from '../components/Presentational/ProductsList/ProductsList'
import { useDevice } from '../utils/deviceContext'
import HubSpotForm from '../components/Shared/hubSpotForm/HubSpotForm'
import WaltButton from '../components/Smart/WaltButton/WaltButton'

const settings = {
  dotsClass: 'slick-dots slick-thumb home-container-slick-dots ',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
}
const sliderList = [
  {
    type: 2,
    src: '/images/products/top-1.png',
    // src: "https://asset.cloudinary.com/dq928gtws/b0edac3e74a9c038662754ab6fd9abcb",
    poster: '/images/products/top-1.png',
    header: 'ALL OUR PRODUCTS',
    description: '“For the future and beyond, We Are Ready!“',
    btnText: ' PLACE CUSTOM ORDER',
    btnLink: '/about-us',
    // btnLink: "/about-us-learn-more",
  },
]
// 页面组件，接收从 getStaticProps 获取的数据作为 props
export default function Products() {
  const { isMobile } = useDevice()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Products | Walt Tec | Advanced Sock & Apparel Solutions</title>
        <meta
          name="description"
          content="Explore Walt Technology Group's innovative product range, including socks, body shaping garments, functional wear, and AI-driven apparel solutions."
        />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Products | Walt Tec | Advanced Sock & Apparel Solutions"
        />
        <meta
          property="og:description"
          content="Discover Walt Technology Group's advanced textile products, from seamless knitting to AI-driven apparel solutions, designed for performance and sustainability."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walttec.shop/products/" />
        <meta property="og:image" content="https://walttec.shop/images/products.jpg" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Products | Walt Tec | Advanced Sock & Apparel Solutions"
        />
        <meta
          name="twitter:description"
          content="Browse our product catalog for innovative socks, functional garments, and sustainable textile solutions at Walt Technology Group."
        />
        <meta name="twitter:image" content="https://walttec.shop/images/products.jpg" />

        <link rel="canonical" href="https://walttec.shop/products/" />
        <meta name="robots" content="index,follow" />
      </Head>

      <Box position="relative">
        <Slider {...settings}>
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
                <Box position="absolute" top="60%" left="10%" color={'white'}>
                  <Typography
                    fontSize={`${isMobile ? '4rem' : '8.2rem'}`}
                    lineHeight={1.5}
                    fontWeight={800}
                    fontFamily={'HC'}
                  >
                    {video.header}
                  </Typography>

                  {/*<Typography fontSize={'3vw'} lineHeight={2}  fontFamily={'HS'}  style={{ width: '40vw' }} >*/}
                  {/*    {*/}
                  {/*        video.description*/}
                  {/*    }*/}
                  {/*</Typography>*/}

                  <WaltButton
                    text={video.btnText}
                    icon="/icons/walttec/home-shopping-cart.png" // 使用图片路径
                    iconPosition="left"
                    borderColor="white"
                    textColor="white"
                    hoverBackgroundColor="var(--base-blue)"
                    hoverBorderColor="var(--base-blue)"
                    hoverTextColor="white"
                    activeBackgroundColor="var(--base-blue)"
                    activeBorderColor="var(--base-blue)"
                    activeTextColor="white"
                    style={{
                      fontSize: `${isMobile ? '2rem' : '2.6rem'}`,
                    }} // 传入自定义样式
                    onClick={() => router.push(video.btnLink)}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box className={styles.page}>
        <ProductsList />
      </Box>
      <HubSpotForm />
    </>
  )
}
