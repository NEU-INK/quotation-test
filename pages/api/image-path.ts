import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
// import path from 'path';

// const isDev = process.env.NODE_ENV !== 'production';
const isDev = true
const imageBasePath = '/var/www/static/walttec-file/images'
const imageBaseUrl = 'https://walttec.shop/walttec-file/images'

let cachedImages: string[] | null = null
const cacheDuration = 60 * 60 * 1000 // 缓存 1 小时
let lastCacheTime = 0

/**
 * 获取图片列表
 * 在开发环境直接跳过路径检查，返回一个模拟图片列表。
 */
function getImages() {
  const now = Date.now()

  if (!cachedImages || now - lastCacheTime > cacheDuration) {
    try {
      if (isDev) {
        console.log('Development mode: Skipping directory check.')
        cachedImages = [] // 本地不检查目录，返回空列表或模拟数据
      } else {
        if (!fs.existsSync(imageBasePath)) {
          throw new Error(`Directory not found: ${imageBasePath}`)
        }
        cachedImages = fs.readdirSync(imageBasePath) // 生产环境读取目录
      }
      lastCacheTime = now
    } catch (error: any) {
      console.error('Error reading images:', error.message)
      throw error
    }
  }

  return cachedImages
}

/**
 * API Handler
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { imageName } = req.query

  if (!imageName || typeof imageName !== 'string') {
    return res.status(400).json({ error: 'Image name is required' })
  }

  try {
    const images = getImages()

    // 在开发环境直接跳过检查，构造 URL 返回
    if (isDev || images.includes(imageName)) {
      const imagePath = `${imageBaseUrl}/${imageName}`
      return res.status(200).json({ imagePath })
    }
    return res.status(404).json({ error: 'Image not found' })
  } catch (error: any) {
    console.error('API Error:', error.message)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
