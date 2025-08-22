import React, { useState, useRef, useEffect } from 'react'
import { Box, Typography, Paper } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/pagesStyles/sustainability.module.scss'
import Slider from 'react-slick'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDevice } from '../utils/deviceContext'

import VideoPlayer from '../components/Smart/VideoPlayer/VideoPlayer'
import HubSpotForm from '../components/Shared/hubSpotForm/HubSpotForm'
import WaltButton from '../components/Smart/WaltButton/WaltButton'

const dataList = [
  {
    type: 1,
    src: '/video/xcspjpz.mp4',
    // src: "https://asset.cloudinary.com/dq928gtws/b0edac3e74a9c038662754ab6fd9abcb",
    poster: '/video/xcspjpz-bg.png',
    header: 'OUR PARTNERS',
    description: 'For the future and beyond, We Are Ready!',
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

const data = [
  {
    id: 1,
    img: '/images/sustainability/eco-friendly-materials-1.png',
    title: 'RECYCLED',
    title2: ' POLYESTER',
    path: '/',
  },
  {
    id: 2,
    img: '/images/sustainability/eco-friendly-materials-2.png',
    title: 'COFFEE YARN',
    title2: ' ',
    path: '/',
  },
  {
    id: 3,
    img: '/images/sustainability/eco-friendly-materials-3.png',
    title: 'YARN',
    title2: ' ',
    path: '/',
  },
]

const parkData = [
  {
    id: 1,
    primaryTitle: 'HUMAN TO',
    secondaryTitles: [
      {
        id: 1,
        title: 'HUMAN',
        description:
          'Human development through education, training and equipping the local community.',
        imageSrc: '/images/sustainability/carbon-zero-eco-park-1.png',
      },
      {
        id: 2,
        title: 'ENVIRONMENT',
        description: 'Our park utilizes renewable energy sources to reduce our carbon emissions.',
        imageSrc: '/images/sustainability/carbon-zero-eco-park-4.png',
      },
      {
        id: 3,
        title: 'ANIMALS',
        description:
          'We are committed to animal welfare and support sustainable practices that minimize harm to animals.',
        imageSrc: '/images/sustainability/carbon-zero-eco-park-2.png',
      },
      {
        id: 4,
        title: 'NATURE',
        description:
          'We prioritize biodiversity conservation and support initiatives that protect natural habitats.',
        imageSrc: '/images/sustainability/carbon-zero-eco-park-3.png',
      },
    ],
  },
]

const Sustainability = () => {
  const { isMobile } = useDevice()

  const router = useRouter()

  const [activePrimary, setActivePrimary] = useState(parkData[0])
  const [activeSecondary, setActiveSecondary] = useState(parkData[0].secondaryTitles[0])
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const scrollContainerRefBox = useRef<HTMLDivElement | null>(null)

  // const isHD = false
  // const handleSecondaryClick = (secondary: { id: number; title: string; description: string; imageSrc: string }) => {
  //       setActiveSecondary(secondary);
  //     console.log('secondary-----', secondary)
  //     // 滚动到点击的项目
  //         // if(isHD){
  //         //     const secondaryElement = document.getElementById(`secondary-${secondary.id}`);
  //         //     secondaryElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  //         // }
  // };

  const handleSecondaryClick = (secondary: {
    id: number
    title: string
    description: string
    imageSrc: string
  }) => {
    setActiveSecondary(secondary)
    // console.log('secondary-----', secondary)

    // 获取滚动容器的高度和位置
    const containerHeight = scrollContainerRef.current?.scrollHeight || 0
    const boxHeight = scrollContainerRefBox.current?.clientHeight || 0 // 外部容器的高度

    if (scrollContainerRef.current && scrollContainerRefBox.current) {
      // 添加 null 检查
      let targetPosition = 0

      switch (secondary.id) {
        case 1:
          targetPosition = 0 // 滚动到最上面
          break
        case 2:
          targetPosition = containerHeight * 0.45 - boxHeight / 2 // 滚动到45%
          break
        case 3:
          targetPosition = containerHeight * 0.55 - boxHeight / 2 // 滚动到55%
          break
        case 4:
          targetPosition = containerHeight - boxHeight // 滚动到最底下
          break
        default:
          break
      }

      // 在外部容器内滚动
      scrollContainerRefBox.current.scrollTo({
        top: targetPosition,
        behavior: 'smooth', // 添加平滑滚动
      })
    }
  }
  // 禁用手动滚动
  // useEffect(() => {
  //     const scrollContainer = scrollContainerRef.current;
  //
  //     const handleWheel = (event: WheelEvent) => {
  //         event.preventDefault(); // 阻止手动滚动
  //     };
  //
  //     if (scrollContainer) {
  //         scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
  //
  //         // 清理事件监听器
  //         return () => {
  //             scrollContainer.removeEventListener('wheel', handleWheel);
  //         };
  //     }
  // }, []);

  //
  // const handleWheelScroll = (event: React.WheelEvent) => {
  //     if (isHD && scrollContainerRef.current) {
  //         scrollContainerRef.current.scrollTop += event.deltaY;
  //
  //         const scrolledIndex = Math.round(
  //             (scrollContainerRef.current.scrollTop ?? 0) /
  //             (scrollContainerRef.current.scrollHeight / activePrimary.secondaryTitles.length)
  //         );
  //         setActiveSecondary(activePrimary.secondaryTitles[scrolledIndex]);
  //     }
  // };

  const [quality, setQuality] = useState('1080p')

  useEffect(() => {
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection
    if (connection) {
      if (connection?.effectiveType === '4g') {
        setQuality('1080p')
      } else if (connection?.effectiveType === '3g') {
        setQuality('720p')
      } else {
        setQuality('480p')
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Sustainability | Walt Tec | Eco-friendly Manufacturing</title>
        <meta
          name="description"
          content="Walt Technology Group is committed to sustainability through water conservation, energy efficiency, and recycling in all stages of production."
        />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Sustainability | Walt Tec | Eco-friendly Manufacturing"
        />
        <meta
          property="og:description"
          content="Learn how Walt Technology Group prioritizes sustainability through innovative water treatment systems, recycling initiatives, and energy-efficient production."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walttec.shop/sustainability/" />
        <meta property="og:image" content="https://walttec.shop/images/sustainability.jpg" />

        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sustainability | Walt Tec | Eco-friendly Manufacturing"
        />
        <meta
          name="twitter:description"
          content="Discover Walt Technology Group's sustainability efforts, including water recycling, solar energy, and eco-friendly textile production."
        />
        <meta name="twitter:image" content="https://walttec.shop/images/sustainability.jpg" />

        <link rel="canonical" href="https://walttec.shop/sustainability/" />
        <meta name="robots" content="index,follow" />
      </Head>

      <Box className={`${styles.sustainabilityPage}`}>
        <Box position="relative">
          <Slider {...settings1}>
            {dataList.map((video, index) => (
              <Box key={index} position="relative">
                <Box position="relative" width="100%" height="100%">
                  <VideoPlayer videoId="jpz" quality={quality} />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        {/*<OurPartnersPartner/>*/}
        <Box className={styles.park} display="flex">
          {/* Left Side (50%) */}
          <Box
            flex="1"
            padding=" 0 2%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography
              fontSize={`${isMobile ? '4rem' : '9.6rem'}`}
              color={'var(--base-blue)'}
              sx={{ fontWeight: 600, lineHeight: 1, fontFamily: 'HC' }}
            >
              CARBON ZERO ECO PARK
            </Typography>
            {/* Primary and Secondary Menus */}

            <Box display="flex">
              {/* Primary Menu (30%) */}
              <Box
                width="30%"
                paddingRight="10px"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {parkData.map((item) => (
                  <Box key={item.id} marginBottom="10px">
                    <Typography
                      fontSize={`${isMobile ? '2rem' : '3.6rem'}`}
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1,
                        fontFamily: 'HS',
                        cursor: 'pointer',
                        wordBreak: 'break-word',
                        color: activePrimary.id === item.id ? '#ADD8E6' : 'var(--base-blue)',
                      }}
                      onClick={() => setActivePrimary(item)}
                    >
                      {item.primaryTitle}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Triangle (10%) */}
              <Box width="10%" display="flex" justifyContent="center" alignItems="center">
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderBottom: '1rem solid transparent',
                    borderTop: '1rem solid transparent',
                    borderLeft: '1rem solid var(--base-blue)',
                  }}
                />
              </Box>

              {/* Secondary Menu (60%) */}
              {/*style={{ overflowY: 'auto', maxHeight: '200px' }}*/}
              <Box
                style={{ height: '37.8rem', overflow: 'hidden' }}
                width="60%"
                paddingLeft="10px"
                ref={scrollContainerRefBox}
              >
                <Box
                  style={{ height: '54rem', padding: '16.2rem 0', overflow: 'auto' }}
                  ref={scrollContainerRef}
                >
                  {activePrimary.secondaryTitles.map((secondary) => (
                    <Typography
                      key={secondary.id}
                      id={`secondary-${secondary.id}`}
                      variant="body1"
                      onClick={() => handleSecondaryClick(secondary)}
                      style={{
                        height: '5.4rem',

                        cursor: 'pointer',
                        paddingLeft: '10px',
                        color: activeSecondary.id === secondary.id ? '#ADD8E6' : 'var(--base-blue)',
                      }}
                      fontSize={`${isMobile ? '2rem' : '3.6rem'}`}
                    >
                      {secondary.title}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Description Section (Scrollable) */}
            <Box style={{ overflowY: 'auto', maxHeight: '150px', marginTop: '20px' }}>
              <Typography
                fontSize={`${isMobile ? '2rem' : '2.6rem'}`}
                color={'var(--base-blue)'}
                sx={{ fontFamily: 'HS', wordBreak: 'break-word' }}
              >
                {activeSecondary.description}
              </Typography>
            </Box>
          </Box>

          {/* Right Side (Image) */}
          <Box flex="1" position="relative">
            <Image
              src={activeSecondary.imageSrc}
              alt="Park Image"
              width={500}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>

        <Box className={styles.materials}>
          <Typography
            fontSize={`${isMobile ? '4rem' : '9.6rem'}`}
            lineHeight={2}
            fontWeight={800}
            fontFamily={'HC'}
            color={'var(--base-blue)'}
            textAlign={'center'}
          >
            ECO-FRIENDLY MATERIALS
          </Typography>
          <Box className={styles.materialsBox}>
            {data.map((item, index) => (
              <Box key={index} className={styles.materialsCard}>
                <Paper elevation={0} className={styles.paper}>
                  <Image
                    src={item.img}
                    alt={`form-image-${index + 1}`}
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', borderRadius: '50%' }}
                  />
                  {/*<Box className={styles.materialsText}>*/}
                  {/*    <Typography*/}
                  {/*        sx={{fontSize: '2.4vw', fontWeight: 600, lineHeight: 1, fontFamily: 'HS',}} textAlign={'center'}*/}
                  {/*        >*/}
                  {/*        <sup style={{fontSize:'1vw'}}>[{item.id}]</sup>*/}
                  {/*        {item.title}*/}
                  {/*    </Typography>*/}
                  {/*</Box>*/}

                  <Box className={styles.materialsText}>
                    <Box className={styles.textContainer}>
                      {' '}
                      {/* 外层负责居中且换行左对齐 */}
                      <Typography
                        fontSize={`${isMobile ? '3rem' : '4.8rem'}`}
                        color={'var(--base-blue)'}
                        sx={{
                          fontWeight: 600,
                          lineHeight: 1.2, // 行高适中
                          fontFamily: 'HS',
                          textAlign: 'left', // 换行后左对齐
                          position: 'relative', // 为角标提供定位上下文
                          display: 'inline-block', // 保持 inline 布局
                          padding: ' 0 0.5em', // 添加内边距以避免角标与文本重叠
                        }}
                      >
                        {/* 角标紧挨第一个单词 */}
                        <span
                          style={{
                            fontSize: `${isMobile ? '1.4rem' : '2rem'}`,
                            position: 'absolute',
                            top: '0.5rem', // 角标对齐第一个单词上边缘
                            left: `${isMobile ? '-0.4rem' : '0'}`, // 左侧微调
                          }}
                        >
                          <span> [{item.id}]</span>
                        </span>
                        {item.title}
                        <br /> {item.title2}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={styles.invitation}>
          <Typography
            fontSize={`${isMobile ? '4rem' : '9.6rem'}`}
            lineHeight={2}
            fontWeight={800}
            fontFamily={'HS'}
            color={'var(--base-blue)'}
          >
            INVITATION
          </Typography>
          <Typography
            fontSize={`${isMobile ? '3rem' : '4.9rem'}`}
            lineHeight={1.2}
            fontWeight={800}
            fontFamily={'HS'}
            color={'var(--base-blue)'}
          >
            Achieving a carbon neutral world is one of the <br /> most important objectives of our
            time.
          </Typography>
          <Typography
            mt={'2.3rem'}
            fontSize={`${isMobile ? '2rem' : '3.6rem'}`}
            lineHeight={1.2}
            fontFamily={'HS'}
            color={'var(--base-blue)'}
          >
            We are always looking for sustainability partners to join us on this
            <br /> journey including carbon accounting, certification, engineering, <br />
            renewable energy, new eco-friendly materials and any contribution to
            <br /> sustainable development goals.
          </Typography>

          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '5rem',
            }}
          >
            <WaltButton
              text=" PARTNER WITH US"
              borderColor="var(--base-blue)"
              backgroundColor="var(--base-blue)"
              textColor="#fff"
              hoverBackgroundColor="var(--base-blue)"
              hoverBorderColor="var(--base-blue)"
              hoverTextColor="white"
              activeBackgroundColor="var(--base-blue)"
              activeBorderColor="var(--base-blue)"
              activeTextColor="white"
              style={{
                fontSize: `${isMobile ? '2rem' : '2.6rem'}`,
                fontWeight: 600,
                width: '340px',
              }} // 传入自定义样式
              onClick={() => router.push('/contact-us')}
            />
          </Box>
        </Box>
      </Box>
      <HubSpotForm />
    </>
  )
}

export default Sustainability
