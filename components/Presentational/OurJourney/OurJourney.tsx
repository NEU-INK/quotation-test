import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState, useRef, useEffect, useCallback } from 'react'
import styles from './OurJourney.module.scss'
import { useDevice } from '../../../utils/deviceContext'
import useTimeline from '../../../hooks/useTimeline'
import { setNumber } from '../../../utils/common'
import { ITimeNode } from '../../../types/interfaces'

const OurJourney = () => {
  const { isMobile } = useDevice()

  // const dataList = [
  //   // { year: 1950, text: 'walt was founded in 1950 by Mr. Walter L.', img: '/images/walt/home-products1.png' },
  //   {
  //     year: 1968,
  //     text: 'Built the first socks machine.',
  //     img: '/images/walt/home-products-1968.png',
  //   },
  //   // { year: 1971, text: '布局全球成为袜业大王', img: '/images/walt/home-products2.png' },
  //   // { year: 1977, text: '布局全球成为袜业大王', img: '/images/walt/home-products3.png' },
  //   // { year: 1998, text: '改革开放时期再次爆发，全面擦撒擦的是从', img: '/images/walt/home-products4.png' },
  //   // { year: 2008, text: '擦撒擦的是v但是v ，擦撒擦撒v', img: '/images/walt/home-products4.png' },
  // ]

  // const [currentCanvasLocation, setCurrentCanvasLocation] = useState(10)
  // const [currentYearIndex, setCurrentYearIndex] = useState(0)

  // const rulerRef = useRef<HTMLDivElement>(null)
  // const canvasRef = useRef<HTMLCanvasElement>(null)

  // useEffect(() => {
  //   const drawRuler = () => {
  //     const canvas = canvasRef.current
  //     if (!canvas) return

  //     const ctx = canvas.getContext('2d')
  //     if (!ctx) return

  //     const width = canvas.width || 1600
  //     const height = canvas.height || 40
  //     ctx.clearRect(0, 0, width, height)

  //     ctx.strokeStyle = '#13357b'
  //     ctx.fillStyle = 'rgb(241,34,34)'
  //     const itemWidth = 10
  //     const divider = 10
  //     const startY = height

  //     const minYear = 1890
  //     const offset = -currentYearIndex * itemWidth
  //     const numTicks = Math.ceil(width / itemWidth) + 1

  //     for (let i = 0; i < numTicks; i++) {
  //       const x = i * itemWidth + offset
  //       const year = minYear + Math.floor(x / itemWidth)
  //       if (x > 0 && x < width) {
  //         ctx.beginPath()
  //         ctx.moveTo(x, startY)
  //         if (year % divider === 0) {
  //           ctx.lineTo(x, height - 24)
  //           ctx.lineWidth = 2
  //         } else {
  //           ctx.lineTo(x, height - 15)
  //           ctx.lineWidth = 1
  //         }
  //         ctx.stroke()
  //       }
  //     }
  //     setCurrentCanvasLocation(
  //       Math.floor(currentCanvasLocation / itemWidth) + Math.floor(canvas.width / 2 / itemWidth)
  //     )
  //   }
  //   drawRuler()
  // }, [currentYearIndex, currentCanvasLocation]) // 将 currentCanvasLocation 添加为依赖

  // const handleScroll = () => {
  //   if (rulerRef.current) {
  //     const scrollLeft = rulerRef.current.scrollLeft
  //     const rulerWidth = rulerRef.current.scrollWidth
  //     const containerWidth = rulerRef.current.clientWidth
  //     const yearWidth = rulerWidth / dataList.length
  //     const index = Math.max(
  //       0,
  //       Math.min(
  //         dataList.length - 1,
  //         Math.round((scrollLeft + containerWidth / 2 - yearWidth / 2) / yearWidth)
  //       )
  //     )
  //     setCurrentYearIndex(index)
  //   }
  // }

  // useEffect(() => {
  //   if (rulerRef.current) {
  //     const rulerWidth = rulerRef.current.scrollWidth
  //     const containerWidth = rulerRef.current.clientWidth
  //     const yearWidth = rulerWidth / dataList.length
  //     const targetScrollLeft = currentYearIndex * yearWidth - containerWidth / 2 + yearWidth / 2
  //     rulerRef.current.scrollLeft = Math.min(
  //       Math.max(targetScrollLeft, 0),
  //       rulerWidth - containerWidth
  //     )
  //   }
  // }, [currentYearIndex, dataList.length])

  // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (!rulerRef.current) return

  //   rulerRef.current.style.cursor = 'grabbing'
  //   const startX = e.clientX
  //   const startScrollLeft = rulerRef.current.scrollLeft
  //   const onMouseMove = (e: MouseEvent) => {
  //     if (!rulerRef.current) return // 检查是否为 null
  //     rulerRef.current.scrollLeft = startScrollLeft - (e.clientX - startX)
  //   }

  //   const onMouseUp = () => {
  //     if (!rulerRef.current) return // 检查是否为 null
  //     rulerRef.current.style.cursor = 'grab'
  //     document.removeEventListener('mousemove', onMouseMove)
  //     document.removeEventListener('mouseup', onMouseUp)
  //     triggerInertiaEffect()
  //   }

  //   document.addEventListener('mousemove', onMouseMove)
  //   document.addEventListener('mouseup', onMouseUp)
  // }

  // const triggerInertiaEffect = () => {
  //   if (!rulerRef.current) return

  //   let lastScrollLeft = rulerRef.current.scrollLeft
  //   // let lastTimestamp = performance.now();

  //   const inertia = (timestamp: number) => {
  //     // console.log(timestamp)
  //     if (!rulerRef.current) return // 检查是否为 null
  //     const scrollDelta = rulerRef.current.scrollLeft - lastScrollLeft
  //     lastScrollLeft = rulerRef.current.scrollLeft

  //     if (Math.abs(scrollDelta) < 0.5) return

  //     rulerRef.current.scrollLeft += scrollDelta * 0.95
  //     requestAnimationFrame(inertia)
  //   }

  //   requestAnimationFrame(inertia)
  // }
  // const isGD = false

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
  } = useTimeline()

  const timelineWidth = 655

  useEffect(() => {
    const { width } = timelineContainerRef.current!.getBoundingClientRect()
    const _width = setNumber(width / 2)
    setCenterX(_width)
    setTransleteX(setNumber(_width - timelineWidth))
    setSelectedNode(timelineData[timelineData.length - 1])
  }, [])

  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const handleDragStart = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      timelineRef.current!.style.cursor = 'grabbing'
      'touches' in e ? setLastX(e.touches[0].clientX) : setLastX(e.clientX)
      setIsDragging(true)
    },
    [setIsDragging, setLastX]
  )

  const handleDragMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      // e.preventDefault()
      if (!isDragging) return
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const moveX = setNumber(clientX - lastX) // 拖拽移动距离
      const _translateX = setNumber(moveX + translateX)
      const maxRightTranslate = setNumber(centerX - timelineWidth)
      const finalVal =
        _translateX > centerX
          ? centerX
          : _translateX < maxRightTranslate
          ? maxRightTranslate
          : _translateX
      setTransleteX(finalVal)
      setLastX(clientX)
    },
    [centerX, isDragging, lastX, setLastX, setTransleteX, translateX]
  )

  const handleDragEnd = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      timelineRef.current!.style.cursor = 'grab'
      setIsDragging(false)
    },
    [setIsDragging]
  )

  const selectTimeNode = (target: ITimeNode) => {
    // 防止干扰拖拽
    if (isDragging) return
    setSelectedNode(target)
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
            onMouseUp={handleDragEnd}
            onTouchEnd={handleDragEnd}
          >
            <Box
              ref={timelineRef}
              className={styles.timeline_line}
              sx={{
                width: `${timelineWidth}px`,
                transform: `translateX(${translateX}px)`,
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
            >
              {timelineData.map((item) => (
                <Box key={item.id} className={styles.timeNodeContainer}>
                  <Box
                    className={
                      selectedNode?.id === item.id
                        ? `${styles.singleTimeNode} ${styles.timeNodeSelected}`
                        : styles.singleTimeNode
                    }
                  >
                    <span className={styles.timeNode_lineSegment}></span>
                    <Box className={styles.timeNode} onClick={() => selectTimeNode(item)}></Box>
                    <span className={styles.timeNode_lineSegment}></span>
                  </Box>
                  <Typography
                    fontSize={'2.9rem'}
                    fontWeight={800}
                    lineHeight={1.5}
                    fontFamily={'HC'}
                    textAlign={'center'}
                    sx={{
                      marginTop: '1rem',
                      color:
                        selectedNode?.id === item.id ? 'var(--base-blue)' : 'var(--hover-blue)',
                      cursor: 'pointer',
                    }}
                    onClick={() => selectTimeNode(item)}
                  >
                    {item.year}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {selectedNode?.id && (
            <Box className={styles.timeNodeContent}>
              <img
                src={selectedNode.imgUrl}
                className={styles.timeNodeContentImg}
                alt={selectedNode.describe}
              />
              <Box className={styles.timeNodeContentDetail}>
                <Typography fontSize={'3.6rem'} fontWeight={800} lineHeight={1.5} fontFamily={'HC'}>
                  {selectedNode.year}
                </Typography>
                <Typography fontSize={'2rem'} fontWeight={800} lineHeight={1.5} fontFamily={'HC'}>
                  {selectedNode.describe}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        {/* <Box className={styles.timeLineContainer}>
          <Box className={styles.years}>
            <Box className={styles.yearBox}>
              <Typography
                fontSize={`${isMobile ? '3rem' : '3.6rem'}`}
                fontWeight={800}
                fontFamily={'HS'}
                color={'#7790b5'}
              >
                {currentYearIndex === 0 ? '1950' : dataList[currentYearIndex - 1]?.year}
              </Typography>
              <Typography
                fontSize={`${isMobile ? '4rem' : '4.8rem'}`}
                fontWeight={800}
                fontFamily={'HS'}
                color={'#13357b'}
                className={styles.currentYear}
              >
                {dataList[currentYearIndex]?.year}
              </Typography>
              <Typography
                fontSize={`${isMobile ? '3rem' : '3.6rem'}`}
                fontWeight={800}
                fontFamily={'HS'}
                color={'#7790b5'}
              >
                {currentYearIndex === dataList.length - 1
                  ? '1971'
                  : dataList[currentYearIndex + 1]?.year}
              </Typography>
            </Box>
          </Box>

          <Box className={styles.ruleBox}>
            <span className={styles.rule_cursorTop}></span>
            {isGD && (
              <Box
                className={styles.rulerContainer}
                ref={rulerRef}
                onScroll={handleScroll}
                onMouseDown={handleDragStart}
              >
                <canvas
                  ref={canvasRef}
                  width={`${isMobile ? '768' : '2020'}`}
                  height={40}
                  className={styles.canvas}
                />
              </Box>
            )}
            <Box className={styles.rulerContainer} ref={rulerRef}>
              <canvas
                ref={canvasRef}
                width={`${isMobile ? '1000' : '2020'}`}
                height={40}
                className={styles.canvas}
              />
            </Box>
            <span className={styles.rule_cursorBottom}></span>
          </Box>
          <Box className={styles.imageAndText}>
            <Box className={styles.imageAndTextBox}>
              <img
                src={dataList[currentYearIndex].img}
                alt={dataList[currentYearIndex].text}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  overflow: 'hidden',
                }}
              />
              <Typography
                fontSize={`${isMobile ? '2.6rem' : '2.6rem'}`}
                sx={{ lineHeight: 1, fontFamily: 'HS', textAlign: 'left', width: '100%' }}
                color={'#13357b'}
                style={{ margin: '1rem 0 0 0' }}
              >
                {dataList[currentYearIndex].text}
              </Typography>
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Box>
  )
}

export default OurJourney
