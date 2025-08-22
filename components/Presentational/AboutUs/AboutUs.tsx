import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import Image from 'next/image'
import styles from './AboutUs.module.scss'
import { useDevice } from '../../../utils/deviceContext'
import 'slick-carousel/slick/slick.css'
import WaltButton from '../../Smart/WaltButton/WaltButton'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'

const AboutUs = () => {
  const { isMobile } = useDevice()

  const router = useRouter()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }
  const NumberCard = [
    {
      number: '20',
      text: 'Years of Expertise',
    },
    {
      number: '2000',
      text: 'Staff Across the Globe',
    },
    {
      number: '200',
      text: 'Million Pairs Per Year',
    },
  ]
  const sustainabilityList = [
    {
      path: '/images/walt/home-sus-1.png',
    },
    {
      path: '/images/walt/home-sus-2.png',
    },
    {
      path: '/images/walt/home-sus-3.png',
    },
    {
      path: '/images/walt/home-sus-4.png',
    },
  ]

  return (
    <Box className={styles.aboutUs}>
      {/* 背景图 */}
      {isMobile ? (
        <></>
      ) : (
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            src={'/images/home-aboutus-bj.png'}
            alt="Background"
            objectFit="cover"
            quality={100}
            priority
            width={1920}
            height={1080}
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      )}

      {isMobile ? (
        <Box className={styles.contentMobileBox}>
          <Image
            src={`/images/home-aboutus-bj.png`}
            alt="Background"
            objectFit="cover"
            quality={100}
            priority
            width={1920}
            height={1080}
            style={{ width: '100%', height: 'auto', zIndex: 1, position: 'absolute' }}
          />

          <Box className={styles.contentMobile}>
            {/* 第一部分：18% 高度 */}
            <Typography
              fontSize={'8rem'}
              textAlign={'center'}
              fontFamily={'HC'}
              lineHeight={1.5}
              fontWeight={700}
            >
              ABOUT US
            </Typography>
            <Typography fontFamily={'HS'} fontSize={'4rem'} lineHeight={1.5} textAlign={'center'}>
              Walt Technology Group Co. Ltd
            </Typography>
            <Typography
              fontFamily={'HS'}
              className={styles.contentTopText}
              lang="en"
              fontSize={'4rem'}
              lineHeight={1.5}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            >
              Walt Technology Group Co. Ltd is the largest socks and apparel manufacturer in the
              universe. We are the global industry leader at the forefront of technology and
              innovation in socks and apparel. We have over 20 years of expertise and over 2,000
              staff across the globe from USA, China, Cambodia, Mexico and Japan. We have a capacity
              of producing over 4 million pairs of socks per week and over 200 million pairs per
              year.
            </Typography>
            <Box className={styles.contentNumberMobile}>
              {NumberCard.map((item, index) => (
                <Box key={index}>
                  <Typography fontFamily={'HS'} fontSize={'6rem'} fontWeight={600} lineHeight={1}>
                    {item.number}
                  </Typography>
                  <Typography fontFamily={'HS'} fontSize={'4rem'} fontWeight={600} lineHeight={1.5}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box className={styles.sustainabilityLeftMobile}>
              <Slider {...settings} className={styles.customSlider}>
                {sustainabilityList.map((item, index) => (
                  <Box className={styles.sustainabilityLeftBox} key={index} position="relative">
                    <Image
                      src={item.path}
                      alt="carousel1"
                      width={400}
                      height={400}
                      style={{ borderRadius: '50%', width: '100%', height: 'auto' }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
            <Box className={styles.sustainabilityRightMobile}>
              <Typography
                fontSize={'5rem'}
                fontFamily={'HS'}
                paragraph
                fontWeight={600}
                lineHeight={1.5}
                textAlign={'center'}
              >
                SUSTAINABILITY
              </Typography>
              <Typography
                fontFamily={'HS'}
                fontSize={'4rem'}
                lineHeight={1.5}
                paragraph
                className={styles.sustainabilityRightText}
              >
                We have systems in place as an industr leader that sets the paceto contribute
                towards a sustainable future. In all our factories we have water recycling and waste
                processing systems. We are building the largest Eco-Park in Asia as an initiative
                towards a carbon zero world. Our mission for the carbon zero eco-park is to suppor
                the relationship between human to humans, humans to environment and human to
                animals.
              </Typography>
              <WaltButton
                text="  LEARN MORE  →"
                borderColor="white"
                textColor="white"
                href="/sustainability"
                hoverBackgroundColor="transparent"
                hoverBorderColor="white"
                hoverTextColor="white"
                activeBackgroundColor="transparent"
                activeBorderColor="white"
                activeTextColor="white"
                style={{ fontSize: `5rem` }} // 传入自定义样式
              />
            </Box>
            <Box className={styles.bottomMobile}>
              <Typography
                paragraph
                fontSize={'4rem'}
                lineHeight={1.5}
                fontWeight={600}
                textAlign={'center'}
                fontFamily={'HS'}
              >
                We are partnering with key organizations in global sustainability.
                <br /> Join Our Carbon Zero Initiative and see how you can
                <br /> play your part towards a carbon zero world.
              </Typography>

              <Button
                variant="contained"
                color="primary"
                className={styles.bottomBtn}
                style={{
                  fontFamily: 'HS',

                  fontSize: '4rem',
                  fontWeight: 800,
                  marginLeft: '1rem',
                  marginBottom: '5rem',
                  borderColor: 'white', // 设置边框颜色为白色
                  color: '#003680', // 设置文字颜色
                }}
                onClick={() => router.push('/contact-us')}
              >
                JOIN CARBON ZERO INITIATIVE
              </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={styles.content}>
          {/* 第一部分：18% 高度 */}
          <Box className={styles.contentTop}>
            <Typography
              component="div"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                width: '100%',
                height: '100%',
                padding: '0',
              }}
            >
              <Typography fontSize={'9.6rem'} textAlign={'left'} fontFamily={'HC'} fontWeight={700}>
                ABOUT US
              </Typography>
              <Typography fontFamily={'2.6rem'} fontSize={'1.5vw'} textAlign={'center'}>
                Walt Technology Group Co. Ltd
              </Typography>
            </Typography>
            <Typography
              fontFamily={'HS'}
              fontSize={'2.6rem'}
              className={styles.contentTopText}
              lang="en"
              style={{ maxWidth: '50%', maxHeight: '100%' }}
            >
              Walt Technology Group Co. Ltd is the largest socks and apparel manufacturer in the
              universe. We are the global industry leader at the forefront of technology and
              innovation in socks and apparel. We have over 20 years of expertise and over 2,000
              staff across the globe from USA, China, Cambodia, Mexico and Japan. We have a capacity
              of producing over 4 million pairs of socks per week and over 200 million pairs per
              year.
            </Typography>
          </Box>
          <Box className={styles.contentNumber}>
            {NumberCard.map((item, index) => (
              <Box key={index}>
                <Typography fontFamily={'HS'} fontSize={'10.9rem'} fontWeight={600} lineHeight={1}>
                  {item.number}
                </Typography>
                <Typography fontFamily={'HS'} fontSize={'3.6rem'} fontWeight={600} lineHeight={1}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box className={styles.sustainability}>
            <Box className={styles.sustainabilityLeft}>
              <Slider {...settings} className={styles.customSlider}>
                {sustainabilityList.map((item, index) => (
                  <Box className={styles.sustainabilityLeftBox} key={index} position="relative">
                    <Image
                      src={item.path}
                      alt="carousel1"
                      width={1000}
                      height={1000}
                      style={{
                        display: 'block',
                        width: '80%',
                        height: 'auto',
                        borderRadius: '50%',
                        margin: '0 auto',
                      }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>
            <Box className={styles.sustainabilityRight}>
              <Typography
                fontSize={'4.8rem'}
                fontFamily={'HS'}
                paragraph
                fontWeight={600}
                lineHeight={1}
              >
                SUSTAINABILITY
              </Typography>
              <Typography
                fontFamily={'HS'}
                fontSize={'2.6rem'}
                paragraph
                className={styles.sustainabilityRightText}
              >
                We have systems in place as an industr leader that sets the paceto contribute
                towards a sustainable future. In all our factories we have water recycling and waste
                processing systems. We are building the largest Eco-Park in Asia as an initiative
                towards a carbon zero world. Our mission for the carbon zero eco-park is to suppor
                the relationship between human to humans, humans to environment and human to
                animals.
              </Typography>
              <WaltButton
                text="  LEARN MORE  →"
                borderColor="white"
                textColor="white"
                href="/sustainability"
                hoverBackgroundColor="transparent"
                hoverBorderColor="white"
                hoverTextColor="white"
                activeBackgroundColor="transparent"
                activeBorderColor="white"
                activeTextColor="white"
                style={{ fontSize: `2.6rem` }} // 传入自定义样式
              />
            </Box>
          </Box>
          <Box className={styles.bottom}>
            <Typography
              paragraph
              fontSize={'4.8rem'}
              fontWeight={600}
              textAlign={'center'}
              fontFamily={'HS'}
            >
              We are partnering with key organizations in global sustainability.
              <br /> Join Our Carbon Zero Initiative and see how you can
              <br /> play your part towards a carbon zero world.
            </Typography>

            <WaltButton
              text="  JOIN CARBON ZERO INITIATIVE →"
              borderColor="#8ab4d6"
              backgroundColor="#fff"
              textColor="var(--base-blue)"
              href="/contact-us"
              hoverBackgroundColor="var(--base-blue)"
              hoverBorderColor="#fff"
              hoverTextColor="#fff"
              activeBackgroundColor="#1565c0"
              activeBorderColor="#1565c0"
              activeTextColor="#003680"
              style={{ fontSize: `2.6rem`, fontFamily: 'HS', fontWeight: 800 }} // 传入自定义样式
            />
          </Box>
        </Box>
      )}
    </Box>
  )
}
export default AboutUs
