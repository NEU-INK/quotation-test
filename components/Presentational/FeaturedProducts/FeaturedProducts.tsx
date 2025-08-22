import React from 'react'
import { Typography, Box, Paper } from '@mui/material'
import Image from 'next/image'
import styles from './FeaturedProducts.module.scss'
import { useDevice } from '../../../utils/deviceContext'
import WaltButton from '../../Smart/WaltButton/WaltButton'

const data = [
  {
    img: '/images/walt/home-products1.png',
    title: 'SOCKS',
    path: '/',
  },
  {
    img: '/images/walt/home-products2.png',
    title: 'GRAPHIC T-SHIRTS',
    path: '/',
  },
  {
    img: '/images/walt/home-products3.png',
    title: 'PERFORMANCE',
    path: '/',
  },
  {
    img: '/images/walt/home-products4.png',
    title: 'SHAPEWEAR',
    path: '/',
  },
]

const FeaturedProducts: React.FC = () => {
  const { isMobile } = useDevice()

  return (
    <Box className={styles.capacity}>
      <Box className={styles.top}>
        <Typography
          lineHeight={1}
          fontSize={`${isMobile ? '6rem' : '9.6rem'}`}
          fontWeight={800}
          fontFamily={'HC'}
          color={'var(--base-blue)'}
        >
          FEATURED <br />
          PRODUCTS
        </Typography>
        <Typography
          fontFamily={'HS'}
          fontSize={`${isMobile ? '2.6rem' : '2.6rem'}`}
          color={'var(--base-blue)'}
          style={{ textAlign: 'right' }}
        >
          Walt Technology Group Co. Ltd
        </Typography>
      </Box>
      <Box className={styles.cardsContainer}>
        {data.map((item, index) => (
          <Box key={index} className={styles.card}>
            <Paper elevation={0} className={styles.paper}>
              <Image
                src={item.img}
                alt={`form-image-${index + 1}`}
                width={1000}
                height={800}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  mt: '20px',
                  color: '#13357b',
                }}
              >
                <Typography
                  fontSize={`${isMobile ? '3.6rem' : '3.6rem'}`}
                  color={'var(--base-blue)'}
                  sx={{ fontWeight: 600, lineHeight: 1, fontFamily: 'HS' }}
                  align="left"
                >
                  {item.title}
                </Typography>

                <WaltButton
                  text="CONTACT US →"
                  href="/contact-us"
                  borderColor="var(--base-blue)"
                  textColor="var(--base-blue)"
                  hoverBackgroundColor="var(--base-blue)"
                  hoverBorderColor="var(--base-blue)"
                  hoverTextColor="white"
                  activeBackgroundColor="var(--base-blue)"
                  activeBorderColor="var(--base-blue)"
                  activeTextColor="white"
                  style={{
                    fontSize: `${isMobile ? '2.2rem' : '2.2rem'}`,
                    textTransform: 'none',
                    fontFamily: 'HS',
                  }} // 传入自定义样式
                />
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default FeaturedProducts
