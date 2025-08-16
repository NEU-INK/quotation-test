import '../styles/globals.css'
import '../components/Shared/header/header.scss'
import '../styles/pagesStyles/home.scss'
import '../styles/pagesStyles/jobs.scss'
import '../styles/pagesStyles/blog.scss'
import '../styles/pagesStyles/page.scss'
import '../styles/pagesStyles/team.scss'
import '../components/Presentational/Title/Title.scss'
import '../components/Smart/Testimonials/Testimonials.scss'
import '../components/Smart/ContactButton/ContactButton.scss'
import '../components/Presentational/TestimonialCard/TestimonialCard.scss'
import '../components/Presentational/Vision/Vision.scss'
import '../components/Smart/ContactForm/ContactForm.scss'
import '../components/Presentational/HomeContainer/HomeContainer.scss'
import '../components/Smart/HeaderMenu/HeaderMenu.scss'
import '../components/Smart/Category/Category.scss'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/Shared/layout/Layout'
import favicon from '../public/favicon.ico'
import type { AppProps } from 'next/app'
import { DeviceProvider } from '../utils/deviceContext'
import React from 'react'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const adjustRootFontSize = () => {
      const baseSize = 10 // 基础字体大小，10px
      const dpr = window.devicePixelRatio || 1 // 获取系统缩放比例
      document.documentElement.style.fontSize = `${baseSize / dpr}px` // 动态调整 font-size
    }

    adjustRootFontSize() // 初始化调整
    window.addEventListener('resize', adjustRootFontSize) // 监听窗口变化

    return () => {
      window.removeEventListener('resize', adjustRootFontSize)
    }
  }, [])
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <link rel="shortcut icon" type="image/x-icon" href={favicon.src} />
        <meta name="p:domain_verify" content="72badb9b77626abfd0f773a9a3026805" />
        <meta name="robots" content="index,follow" />

        {/* Global Meta Tags */}
        <title>Walt Tec | Walt Technology Group Co., Ltd</title>
        <meta
          name="description"
          content="Walt Technology Group Co., Ltd. is one of the world's leading sock manufacturers, specializing in innovative, sustainable, and AI-driven production for over 20 years."
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Walt Technology Group",
              "url": "https://walttec.shop/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://walttec.shop/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Walt Technology Group Co., Ltd" />
        <meta
          name="keywords"
          content="sock manufacturing, sustainable textiles, AI production, vertical integration, functional apparel, eco-friendly production"
        />
        <meta property="og:title" content="Walt Tec | Walt Technology Group Co., Ltd" />
        <meta
          property="og:description"
          content="Discover Walt Technology Group's world-leading innovations in sock manufacturing, functional apparel, and sustainable production practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://walttec.shop/" />
        <meta property="og:image" content="https://walttec.shop/video/home-lbt2.jpg" />
        {/* Twitter Cards Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Walt Tec | Leading Global Sock Manufacturer" />
        <meta
          name="twitter:description"
          content="Walt Technology Group Co., Ltd. is a leading global sock manufacturer with an annual capacity of 200 million pairs and over 20 years of experience, serving clients worldwide."
        />
        <meta name="twitter:image" content="https://walttec.shop/video/home-lbt2.jpg" />
      </Head>

      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-53L87NB6XQ"
        strategy="afterInteractive"
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-53L87NB6XQ');
                    `,
        }}
      />

      {/* HubSpot Script */}
      <Script
        id="hs-script-loader"
        src="//js.hs-scripts.com/47318811.js"
        strategy="afterInteractive"
      />

      {/* Lucky Orange Script */}
      <Script
        id="lucky-orange-script"
        src="https://tools.luckyorange.com/core/lo.js?site-id=b59290d5"
        strategy="afterInteractive"
        async
        defer
      />

      <DeviceProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DeviceProvider>
    </>
  )
}

export default MyApp

/*
import '../styles/globals.css'
import '../components/Shared/header/header.scss'
import '../styles/pagesStyles/home.scss'
import '../styles/pagesStyles/jobs.scss'
import '../styles/pagesStyles/blog.scss'

import '../styles/pagesStyles/page.scss'
import '../styles/pagesStyles/team.scss'
import '../components/Presentational/Title/Title.scss'
import '../components/Smart/Testimonials/Testimonials.scss'
import '../components/Smart/ContactButton/ContactButton.scss'
import '../components/Presentational/TestimonialCard/TestimonialCard.scss'
import '../components/Presentational/Vision/Vision.scss'
import '../components/Smart/ContactForm/ContactForm.scss'
import '../components/Presentational/HomeContainer/HomeContainer.scss'
import '../components/Smart/HeaderMenu/HeaderMenu.scss'
import '../components/Smart/Category/Category.scss'
import Head from 'next/head'
import Script from 'next/script' // 引入next/script组件
import Layout from '../components/Shared/layout/Layout'
import favicon from '../public/favicon.ico'
// import {
//     createTheme,
//     ThemeProvider,
//     responsiveFontSizes,
// } from '@mui/material/styles'
// import {
//     createTheme,
//     responsiveFontSizes,
// } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import { DeviceProvider } from '../utils/deviceContext';

// import { useEffect, useState } from 'react';
// let theme = createTheme({
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 576,
//             md: 768,
//             lg: 992,
//             xl: 1200,
//         },
//     },
//     typography: {
//         fontFamily: 'HS',
//         htmlFontSize: 10, // 使 MUI 也遵循 1rem = 10px 的规则
//     },
//     palette: {
//         primary: {
//             main: '#6eb7e5',
//         },
//     },
// })

// theme = responsiveFontSizes(theme)


// 在服务端渲染时确定设备类型
// MyApp.getInitialProps = async ({ ctx }: any) => {
//     const userAgent = ctx.req ? ctx.req.headers['user-agent'] : navigator.userAgent;
//     const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent.toLowerCase());
//     console.log('deviceType---',isMobile)
//     return { deviceType: isMobile ? 'mobile' : 'desktop' };
// };

function MyApp({ Component, pageProps }: AppProps) {
    // 服务端渲染获取用户代理信息，来判断设备是移动端还是 PC 端
    // const [deviceType, setDeviceType] = useState('desktop');
    //
    // useEffect(() => {
    //     const userAgent = navigator.userAgent.toLowerCase();
    //
    //     if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
    //         console.log('userAgent-dsdsadsad---',userAgent)
    //         setDeviceType('mobile');
    //     } else {
    //         console.log('usercs55555555555555acAgent----',userAgent)
    //         setDeviceType('desktop');
    //     }
    // }, []);

    return (
        <>
            <Head>
                <link rel="shortcut icon" type="image/x-icon" href={favicon.src}/>
                <meta name="p:domain_verify" content="72badb9b77626abfd0f773a9a3026805"/>
            </Head>

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-53L87NB6XQ"
                strategy="afterInteractive" // 确保脚本在交互后加载
            />
            <Script
                id="gtag"
                strategy="afterInteractive" // 确保脚本在交互后加载
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-53L87NB6XQ');
          `,
                }}
            />

            {/!* HubSpot 脚本 *!/}
            <Script
                id="hs-script-loader"
                src="//js.hs-scripts.com/47318811.js"
                strategy="afterInteractive"
            />

            {/!*<ThemeProvider theme={theme}>*!/}
            {/!*    <Layout>*!/}
            {/!*        /!*<Component {...pageProps} deviceType={deviceType}/>*!/!*!/}
            {/!*        <Component {...pageProps}/>*!/}
            {/!*    </Layout>*!/}
            {/!*</ThemeProvider>*!/}
            <DeviceProvider>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </DeviceProvider>
        </>
    )
}

export default MyApp
*/
