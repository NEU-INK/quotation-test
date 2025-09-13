import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './OurJourney.module.scss'
import { useDevice } from '../../../utils/deviceContext'
import useTimeline from '../../../hooks/useTimeline'
import { setNumber } from '../../../utils/common'
import { ITimeNode } from '../../../types/interfaces'

const OurJourney = () => {
  const { isMobile } = useDevice()

  const {
    translateX,
    setTransleteX,
    centerX,
    setCenterX,
    lastX,
    setLastX,
    isDragging,
    setIsDragging,
    timelineData,
    selectedNode,
    setSelectedNode,

    timeNodeWidthRem,
    getNodeWidth,
    setSelectedNodePos,

    timeNodeContentWidth,
    setTimeNodeContentWidth,
    contentTranslateX,
  } = useTimeline()

  const [timelineWidth, setTimelineWidth] = useState(0)

  useEffect(() => {
    const { width } = timelineContainerRef.current!.getBoundingClientRect()
    const _width = setNumber(width / 2)
    setCenterX(_width)
    setTimeNodeContentWidth(_width)
    setTimelineWidth(setNumber(timelineData.length * getNodeWidth(timeNodeWidthRem)))
  }, [])

  useEffect(() => {
    setTransleteX(setNumber(centerX - timelineWidth))
    const total = timelineData.length
    setSelectedNode(timelineData[total - 1])
    setSelectedNodePos(total - 1)
  }, [centerX, timelineWidth])

  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // const handleDragStart = useCallback(
  //   (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
  //     timelineRef.current!.style.cursor = 'grabbing'
  //     'touches' in e ? setLastX(e.touches[0].clientX) : setLastX(e.clientX)
  //     setIsDragging(true)
  //   },
  //   [setIsDragging, setLastX]
  // )

  // const handleDragMove = useCallback(
  //   (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
  //     // e.preventDefault()
  //     if (!isDragging) return
  //     const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
  //     const moveX = setNumber(clientX - lastX) // 拖拽移动距离
  //     const _translateX = setNumber(moveX + translateX)
  //     const maxRightTranslate = setNumber(centerX - timelineWidth)
  //     const finalVal =
  //       _translateX > centerX
  //         ? centerX
  //         : _translateX < maxRightTranslate
  //         ? maxRightTranslate
  //         : _translateX
  //     setTransleteX(finalVal)
  //     setLastX(clientX)
  //   },
  //   [centerX, isDragging, lastX, setLastX, setTransleteX, timelineWidth, translateX]
  // )

  // const handleDragEnd = useCallback(
  //   (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
  //     timelineRef.current!.style.cursor = 'grab'
  //     setIsDragging(false)
  //   },
  //   [setIsDragging]
  // )

  const selectTimeNode = (target: ITimeNode, index: number) => {
    // 防止干扰拖拽
    if (isDragging) return
    setSelectedNode(target)
    setSelectedNodePos(index)
  }

  const sliderConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: true,
  }

  return (
    <Box className={styles.aboutUs}>
      <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
        <Image
          src="/images/walt/home-our-bg.png"
          alt="Background"
          objectFit="cover"
          quality={100}
          priority
          width={1920}
          height={1080}
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Box className={styles.content}>
        <Box className={styles.contentTop}>
          <Typography
            fontSize={`${isMobile ? '6rem' : '9.6rem'}`}
            fontWeight={800}
            fontFamily={'HC'}
            color={'var(--base-blue)'}
          >
            OUR JOURNEY
          </Typography>
        </Box>

        <Box className={styles.timeline}>
          <Box
            ref={timelineContainerRef}
            className={styles.timeline_lineContainer}
            // onMouseUp={handleDragEnd}
            // onTouchEnd={handleDragEnd}
          >
            <Box
              ref={timelineRef}
              className={styles.timeline_line}
              sx={{
                width: `${timelineWidth}px`,
                margin: '0 auto',
                // transform: `translate3d(${translateX}px,0,0)`,
                // transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
              }}
              // onMouseDown={handleDragStart}
              // onMouseMove={handleDragMove}
              // onTouchStart={handleDragStart}
              // onTouchMove={handleDragMove}
            >
              {timelineData.map((item, index) => (
                <Box key={item.id} className={styles.timeNodeContainer}>
                  <Box
                    className={
                      selectedNode?.id === item.id
                        ? `${styles.singleTimeNode} ${styles.timeNodeSelected}`
                        : styles.singleTimeNode
                    }
                  >
                    <span className={styles.timeNode_lineSegment}></span>
                    <Box className={styles.timeNode} onClick={() => selectTimeNode(item, index)} />
                    <span className={styles.timeNode_lineSegment}></span>
                  </Box>
                  <Typography
                    className={styles.timeNodeTitle}
                    fontSize={'2.9rem'}
                    fontWeight={800}
                    lineHeight={1.5}
                    fontFamily={'HC'}
                    textAlign={'center'}
                    sx={{
                      color:
                        selectedNode?.id === item.id ? 'var(--base-blue)' : 'var(--hover-blue)',
                      cursor: 'pointer',
                    }}
                    onClick={() => selectTimeNode(item, index)}
                  >
                    {item.year}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {selectedNode?.id && (
            <Box className={styles.timeNodeContentContainer}>
              <Box
                className={styles.timeNodeContentLine}
                sx={{
                  width: `${timelineWidth}px`,
                  transform: `translate3d(${contentTranslateX}px,0,0)`,
                  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                }}
              >
                {timelineData.map((item) =>
                  item.content.length === 1 ? (
                    <Box
                      key={item.id}
                      className={styles.timeNodeContent}
                      sx={{
                        width: `${timeNodeContentWidth}px !important`,
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={item.content[0].imgUrl}
                        className={styles.timeNodeContentImg}
                        alt={item.content[0].describe}
                      />
                      <Box className={styles.timeNodeContentDetail}>
                        <Typography
                          fontSize={'3.6rem'}
                          fontWeight={800}
                          lineHeight={1.5}
                          fontFamily={'HC'}
                        >
                          {item.year}
                        </Typography>
                        <Typography
                          fontSize={'2rem'}
                          fontWeight={800}
                          lineHeight={1.5}
                          fontFamily={'HC'}
                        >
                          {item.content[0].describe}
                        </Typography>
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      key={item.id}
                      className={styles.timeNodeContent}
                      sx={{
                        width: `${timeNodeContentWidth}px !important`,
                        flexShrink: 0,
                      }}
                    >
                      <Slider key={item.id} {...sliderConfig} className={styles.sliderContainer}>
                        {item.content.map((child, index) => (
                          <Box key={index} className={styles.timeNodeContent}>
                            <img
                              src={child.imgUrl}
                              className={styles.timeNodeContentImg}
                              alt={child.describe}
                            />
                            <Box className={styles.timeNodeContentDetail}>
                              <Typography
                                fontSize={'4.8rem'}
                                fontWeight={800}
                                lineHeight={1.5}
                                fontFamily={'HC'}
                                sx={{
                                  marginBottom: '1rem',
                                }}
                              >
                                {item.year}
                              </Typography>
                              <Typography
                                fontSize={'2.6rem'}
                                fontWeight={800}
                                lineHeight={1.5}
                                fontFamily={'HC'}
                                // paragraph
                                // sx={{
                                //   textAlign: 'justify',
                                //   textAlignLast: 'left',
                                //   wordBreak: 'keep-all',
                                // }}
                              >
                                {child.describe}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Slider>
                    </Box>
                  )
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default OurJourney
