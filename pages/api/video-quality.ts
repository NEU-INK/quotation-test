import { NextApiRequest, NextApiResponse } from 'next'

// const videoBaseUrl = 'https://walttec.shop/walttec-file/video'; // 视频资源基础路径
const videoBaseUrl = 'https://video.walttec.shop/walttec-file/video'

const videoMap = {
  'introduction-1080p': `${videoBaseUrl}/introduction/introduction-1080/1080p.m3u8`,
  'introduction-720p': `${videoBaseUrl}/introduction/introduction-720/720p.m3u8`,
  'introduction-480p': `${videoBaseUrl}/introduction/introduction-480/480p.m3u8`,
  'hdgc-1080p': `${videoBaseUrl}/hdgc/hdgc-1080/1080p.m3u8`,
  'hdgc-720p': `${videoBaseUrl}/hdgc/hdgc-720/720p.m3u8`,
  'hdgc-480p': `${videoBaseUrl}/hdgc/hdgc-480/480p.m3u8`,
  'jpz-1080p': `${videoBaseUrl}/jpzlty/jpz-1080/1080p.m3u8`,
  'jpz-720p': `${videoBaseUrl}/jpzlty/jpz-720/720p.m3u8`,
  'jpz-480p': `${videoBaseUrl}/jpzlty/jpz-480/480p.m3u8`,
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { videoId, quality } = req.query

  const videoKey = `${videoId}-${quality}` as keyof typeof videoMap

  if (videoMap[videoKey]) {
    res.status(200).json({ videoPath: videoMap[videoKey] })
  } else {
    res.status(404).json({ error: 'Video not found for the specified quality' })
  }
}
