// components/VideoPlayer.tsx
import React, { useEffect, useRef } from 'react'
import Hls from 'hls.js'

type VideoPlayerProps = {
  videoId: string // 视频 ID，用于区分不同视频
  quality: string // 视频分辨率，比如 '1080p', '720p'
  poster: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, quality, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const fetchVideoPath = async () => {
      const res = await fetch(`/api/video-quality?videoId=${videoId}&quality=${quality}`)

      // const { videoPath } = await res.json();
      const { videoPath } = await res.json()
      //   console.log('Video URL-----:', videoPath)

      if (videoPath) {
        if (Hls.isSupported() && videoRef.current) {
          const hls = new Hls()
          hls.loadSource(videoPath)
          hls.attachMedia(videoRef.current)
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            videoRef.current?.play()
          })
        } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
          // Safari 原生支持 HLS
          videoRef.current.src = videoPath
          videoRef.current.play()
        }
      } else {
        console.error('Video path not found')
      }
    }

    fetchVideoPath()
  }, [videoId, quality])

  return (
    <video
      ref={videoRef}
      loop
      controls
      autoPlay
      muted
      style={{ width: '100%', height: 'auto' }} // 宽度 100%，高度自动
      poster={poster}
    />
  )
}

export default VideoPlayer
