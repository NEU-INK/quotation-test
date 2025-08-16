
import React, { useEffect } from 'react'
import Head from 'next/head'
// import { useRouter } from 'next/router'
import fs from 'fs'
import { Box, Typography } from '@mui/material'
import MarkdownText from '../../components/MarkdownText'
import { BlogPostWithContent, Blog } from '../../types/interfaces'
import { getMarkDownSingleData, getMarkdownSinglePath } from '../../utils/markdown'
import { NEWS_EVENTS_PATH } from '../../utils/constants'
import Prism from 'prismjs'
import styles from './NewEventSlug.module.scss'

// Prism.js 样式和功能导入
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min'
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import {useDevice} from "../../utils/deviceContext";
import HubSpotForm from  '../../components/Shared/hubSpotForm/HubSpotForm'
export default function BlogDetailPage({ frontmatter: { title, date, cover_image, author }, content }: BlogPostWithContent) {
  // const router = useRouter()
  const { isMobile } = useDevice();

  // 使用 Prism.js 进行代码高亮
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0].toUpperCase()).join('').substring(0, 2)
  }

  return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:image" content={cover_image} />
        </Head>
        <Box className={styles.newPage}>
          <Box className={styles.header}>
            <Typography fontSize={`${isMobile ? '4rem' : '9.6rem'}`} fontWeight={'800'} lineHeight={2}
                        className={styles.title}>{title}</Typography>
            <Box className={styles.newsFooter}>
              <Box className={styles.authorContainer}>
                <Box fontSize={`${isMobile ? '1.6rem' : '1.8rem'}`} className={styles.authorCircle}>
                  {getInitials(author)}
                </Box>
                <Typography fontSize={`${isMobile ? '2rem' : '2.4rem'}`}
                            className={styles.authorName}>{author}</Typography>
              </Box>
              <Typography fontSize={`${isMobile ? '2rem' : '2.4rem'}`} className={styles.postDate}>{date}</Typography>
            </Box>
          </Box>
          <div className={styles.postBody}>
            <MarkdownText  isMobile={isMobile}>{content}</MarkdownText>
          </div>
          {/*<div style={{width: '100%'}}>*/}
          {/*  <iframe*/}

          {/*      src="http://localhost:3000/proxy"*/}
          {/*      width="100%"*/}
          {/*      height='100vh'*/}
          {/*      style={{border: 'none'}}*/}
          {/*      title="External Website"*/}
          {/*  />*/}
          {/*</div>*/}
          {/*          <Box    className={styles.iframeBox}>*/}
          {/*            <iframe*/}

          {/*                src="https://blog.walttec.blog/blog/midwest-fashion-embrace-colorful-casual-socks-for-everyday-wear*/}
          {/*"*/}
          {/*                width="100%"*/}
          {/*                height="calc(100% - 60rem)"*/}
          {/*                title="External Website"*/}
          {/*                style={{border: "none"}}*/}
          {/*            />*/}
          {/*          </Box>*/}

        </Box>
        <HubSpotForm/>

      </>
  )
}

export async function getStaticPaths() {
  return getMarkdownSinglePath(fs, NEWS_EVENTS_PATH)
}

export async function getStaticProps({params: {slug}}: Blog) {
  return getMarkDownSingleData(fs, NEWS_EVENTS_PATH, slug)
}
