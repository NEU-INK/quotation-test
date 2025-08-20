/*
import React from 'react'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import {footerData, siteName} from '../../../data/data'
import Image from 'next/image'
import Link from 'next/link'
import logoWhite from "../../../public/images/walt/logo-white.png";
import styles from './footer.contactUs.module.scss'

const Footer = () => {
  const { copyright, info, details ,affiliates} = footerData

  return (
    <Box className={styles.footerContainer}>
      <Box className={styles.footerTitle}>
        <Link href="/" className={styles.footerTitleLink}>
          <Box>
            <Image  className={styles.footerTitleImg} src={logoWhite.src} alt={siteName} width={80} height={80}  />
          </Box>
          <Typography   fontSize={'2.8vw'} fontFamily={'HC'} fontWeight={800}   lineHeight={1} sx={{
color: '#ffffff'
          }}>
            {siteName}
          </Typography>
        </Link>
        <Typography  fontSize={'1.2vw'} fontFamily={'HS'} lineHeight={4} >
          Walt Technology Group Co. Ltd
        </Typography>
      </Box>
      <Container maxWidth="xl" className="footer-items">
        <Box className="footer-items-container">
          {details?.map(({ icon, desc }, index) => (
            <Stack direction={'row'} spacing={1} key={index}>
              <Box>
                <Image src={icon.src} alt="icon" width={20} height={20} />
              </Box>
              <Typography className="description">
                {new RegExp(/^\S+@\S+\.\S+$/).test(desc) ? (
                  <Link href={`mailto:${desc}`}>{desc}</Link>
                ) : (
                  desc
                )}
              </Typography>
            </Stack>
          ))}
        </Box>
        <Box className="footer-items-container">
          <Typography fontSize={18} fontWeight={'600'}>
            {info.title}
          </Typography>
          {info.contactUs.map((contact, index) => (
            <Link key={index} href={contact.path}>
              {contact.text}
            </Link>
          ))}
        </Box>
        <Box className="footer-items-container footer-affiliates-link ">
          <Typography fontSize={18} fontWeight={'600'}>
            {affiliates.title}
          </Typography>
          {affiliates.links.map((link, index) => (
                    <a key={index}  href={link.path} target="_blank" rel="noopener noreferrer">
                      {link.text}
                  </a>
          ))}
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Divider sx={{ marginTop: 4 }} />
        <Box className="copyright">
          <Typography>
            <Link href="/">{copyright.split(' ')[0]}&nbsp;</Link>
            {copyright.split(' ').splice(1).toString().replaceAll(',', ' ')}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
*/
import React from 'react'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { footerData, siteName } from '../../../data/data'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'
import logoWaltTEC from '../../../public/images/logo-walttec.png'
import { useDevice } from '../../../utils/deviceContext'

const Footer = () => {
  const { isMobile } = useDevice()

  const { copyright } = footerData
  const socializeIcon = [
    {
      src: '/icons/walttec/socializeIcon-2.png',
      url: 'https://www.facebook.com/walttec.org',
    },
    {
      src: '/icons/walttec/socializeIcon-3.png',
      url: 'https://www.instagram.com/walttec',
    },
    {
      src: '/icons/walttec/socializeIcon-4.png',
      url: 'https://www.linkedin.com/company/walttec',
    },
    {
      src: '/icons/walttec/socializeIcon-1.png',
      url: 'https://www.tiktok.com/@walttec',
    },
  ]

  const contactInfo = {
    title: 'contactInfo',
    links: [
      {
        title: 'Add',
        path: 'https://maps.app.goo.gl/TqRrmZEqA4uHoWyJ7',
        text: 'No. 48 Shijing Road, Haining Economic Development Zone, Haining City, Jiaxing City, Zhejiang Province, China',
      },
      {
        title: 'E-mail',
        path: 'www.neu-ink.com',
        text: 'print@neu-ink.com',
      },
      {
        title: 'Tel',
        path: 'www.allaboutsocks.com',
        text: '87237175',
      },
    ],
  }

  const affiliates = {
    title: 'Affiliates',
    links: [
      {
        path: 'https://www.comfort-fresh.com',
        text: 'Comfort Fresh',
      },
      {
        path: 'https://www.neu-ink.com',
        text: 'NEU INK',
      },
      {
        path: 'https://www.allaboutsocks.com',
        text: 'All About Socks',
      },
      {
        path: 'https://www.xwaist.com',
        text: ' XWAIST',
      },
    ],
  }

  const navigation = {
    title: 'Navigation Links',
    links: [
      {
        text: 'Home',
        path: '/',
      },
      {
        text: 'About Us',
        path: '/about-us',
      },
      {
        text: 'Products',
        path: '/products',
      },
      {
        path: '/sustainability',
        text: 'Sustainability',
      },
      {
        path: '/contact-us',
        text: 'Contact Us',
      },
      {
        path: '/quotation',
        text: 'Quotation',
      },
    ],
  }

  const importantDocuments = {
    title: 'Important documents',
    links: [
      {
        text: 'Incubator and Partnership Program',
        path: 'https://walttec.netlify.app/',
      },
      {
        path: '/contact-us',
        text: 'Wholesale (B2B)',
      },
      {
        path: '/contact-us',

        text: 'Socks Tech Pack Template',
      },
      {
        path: '/contact-us',
        text: 'Apparel Tech Pack Template',
      },
    ],
  }

  return (
    <Box className={styles.footerContainer}>
      {/* 第一部分：Logo 和公司名称 */}
      <Box className={styles.footerTitle}>
        <Link href="/" className={styles.footerTitleLink}>
          <Box>
            <Image
              src={logoWaltTEC.src}
              width={211.8}
              height={50.3}
              className={styles.footerTitleImg}
              alt={siteName}
            />
          </Box>
          {/*<Typography fontFamily={'HC'} fontSize={`${isMobile ? '4rem' : '4rem'}`} fontWeight={800} lineHeight={1}*/}
          {/*            sx={{color: '#ffffff'}} className={styles.footerTitleImgText}>*/}
          {/*    {siteName}*/}
          {/*</Typography>*/}
        </Link>
        <Typography fontSize={`${isMobile ? '3.2rem' : '2.6rem'}`} fontFamily={'HS'} lineHeight={4}>
          Walt Technology Group Co. Ltd
        </Typography>
      </Box>

      {/* 第二部分：四个模块，a、b、c、d */}
      <Box className={styles.footerItems}>
        <Box className={`${styles.footerItemsContainer} ${styles.moduleA}`}>
          <Stack direction={'row'} spacing={1}>
            {/* 显示社交图标 */}
            {socializeIcon.map((item, index) => (
              <Stack direction={'row'} spacing={1} key={index}>
                <Link href={item.url}>
                  <Image src={item.src} alt="icon" width={40} height={40} />
                </Link>
              </Stack>
            ))}
          </Stack>
          <Box className={`${styles.contentTextBox}`}>
            {contactInfo.links.map((contact, index) => (
              <p key={index}>
                <span className={`${styles.contentTextTitle}`}>{contact.title}: </span>
                <span>{contact.text}</span>
              </p>
            ))}
          </Box>
        </Box>

        {/* 模块 b：联系我们 */}
        <Box className={`${styles.footerItemsContainer} ${styles.moduleB}`}>
          <Typography fontSize={`${isMobile ? '3.2rem' : '2.4rem'}`} fontWeight={'600'}>
            {affiliates.title}
          </Typography>
          <Box className={`${styles.contentTextBox}`}>
            {affiliates.links.map((contact, index) => (
              <Link key={index} href={contact.path}>
                {contact.text}
              </Link>
            ))}
          </Box>
        </Box>

        {/* 模块 c：友情链接 */}
        <Box className={`${styles.footerItemsContainer} ${styles.moduleC}`}>
          <Typography fontSize={`${isMobile ? '3.2rem' : '2.4rem'}`} fontWeight={'600'}>
            {navigation.title}
          </Typography>
          <Box className={`${styles.contentTextBox}`}>
            {navigation.links.map((link, index) => (
              <a key={index} href={link.path} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            ))}
          </Box>
        </Box>

        {/* 模块 d：重要文件 */}
        <Box className={`${styles.footerItemsContainer} ${styles.moduleD}`}>
          <Typography fontSize={`${isMobile ? '3.2rem' : '2.4rem'}`} fontWeight={'600'}>
            {importantDocuments.title}
          </Typography>
          <Box className={`${styles.contentTextBox}`}>
            {importantDocuments.links.map((link, index) => (
              <a key={index} href={link.path} target="_blank" rel="noopener noreferrer">
                {link.text}
              </a>
            ))}
          </Box>
        </Box>
      </Box>

      {/* 第三部分：版权信息 */}
      <Container maxWidth="xl">
        <Divider sx={{ marginTop: 4 }} />
        <Box className={styles.copyright}>
          <Typography fontSize={`${isMobile ? '2.4rem' : '1.8rem'}`}>
            {copyright.split(' ')[0]}&nbsp;{' '}
            {copyright.split(' ').splice(1).toString().replaceAll(',', ' ')}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
