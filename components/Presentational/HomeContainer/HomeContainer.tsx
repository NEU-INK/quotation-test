import React, { useEffect, useState } from 'react'

import { Box, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import { homeData } from '../../../data/data'
import { useRouter } from 'next/router'
import { useDevice } from '../../../utils/deviceContext'
import VideoPlayer from '../../Smart/VideoPlayer/VideoPlayer'
// import DynamicImage from '../../Smart/DynamicImage/DynamicImage';
import WaltButton from '../../Smart/WaltButton/WaltButton'

const HomeContainer = () => {
  const router = useRouter()
  const { isMobile } = useDevice()

  const { videos } = homeData

  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb home-container-slick-dots ',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
    autoplay: true,
    arrows: false,
  }
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
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'var(--base-blue)',
      }}
    >
      <Slider {...settings}>
        {/* 使用图片作为图标 */}
        {videos.map((video, index) => (
          <Box key={index} position="relative">
            <Box position="relative" width="100%" height="100%">
              {video.type === 1 ? (
                <VideoPlayer videoId={video.name as string} quality={quality} />
              ) : (
                // <DynamicImage
                //     imageName={video.src}
                //     alt="Background"
                //     width={1920}
                //     height={1080}
                //     style={{ width: '100%', height: 'auto', zIndex: 1, position: 'absolute' }}
                // />
                <Image
                  src={video.src}
                  alt={`image-${index}`}
                  width={1920}
                  height={1080}
                  style={{ width: '100%', height: 'auto' }}
                />
              )}{' '}
              {/* 显示视频上方的文字内容 */}
              {index === 1 ? (
                <Box position="absolute" bottom="15%" left="6%" color="white">
                  <Typography
                    fontSize={`${isMobile ? '4rem' : '8.2rem'}`}
                    lineHeight={1}
                    fontWeight={800}
                    style={{ fontWeight: 'bold' }}
                  >
                    {video.text1}
                    <br />
                    {video.text2}
                    <br />
                    {video.text3}
                  </Typography>

                  <WaltButton
                    text={video.btnText}
                    icon="./icons/walttec/home-shopping-cart.png"
                    iconPosition="left"
                    borderColor="white"
                    textColor="white"
                    hoverBackgroundColor="var(--base-blue)"
                    hoverBorderColor="var(--base-blue)"
                    hoverTextColor="white"
                    activeBackgroundColor="var(--base-blue)"
                    activeBorderColor="var(--base-blue)"
                    activeTextColor="white"
                    style={{ fontSize: `${isMobile ? '2rem' : '2.6rem'}` }}
                    onClick={() => router.push(video.btnLink)}
                  />
                </Box>
              ) : (
                <Box position="absolute" bottom="15%" left="6%" color="white">
                  <Typography
                    fontSize={`${isMobile ? '4rem' : '8.2rem'}`}
                    lineHeight={1.5}
                    fontWeight={800}
                    style={{ fontWeight: 'bold' }}
                  >
                    {video.header}
                  </Typography>

                  <WaltButton
                    text={video.btnText}
                    icon="./icons/walttec/home-shopping-cart.png" // 使用图片路径
                    iconPosition="left"
                    borderColor="white"
                    textColor="white"
                    onClick={() => router.push(video.btnLink)}
                    hoverBackgroundColor="#003680"
                    hoverBorderColor="#003680"
                    hoverTextColor="white"
                    activeBackgroundColor="#003680"
                    activeBorderColor="#003680"
                    activeTextColor="white"
                    style={{ fontSize: `${isMobile ? '2rem' : '2.6rem'}` }} // 传入自定义样式
                  />
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default HomeContainer
