import { useState } from 'react'
import { ITimeNode } from '../types/interfaces'
import { setNumber } from '../utils/common'

export default function useTimeline() {
  const [translateX, setTransleteX] = useState(0)
  const [centerX, setCenterX] = useState(0)
  const [lastX, setLastX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const timelineData: ITimeNode[] = [
    {
      id: '0',
      year: 1993,
      describe: '',
      imgUrl: '/images/timeline/1993.jpg',
    },
    {
      id: '1',
      year: 1997,
      describe: '',
      imgUrl: '/images/timeline/1997.jpg',
    },
    {
      id: '2',
      year: 2000,
      describe: '',
      imgUrl: '/images/timeline/2000.jpg',
    },
    {
      id: '3',
      year: 2004,
      describe: '',
      imgUrl: '/images/timeline/2004.jpg',
    },
    {
      id: '4',
      year: 2006,
      describe: '',
      imgUrl: '/images/timeline/2006.jpg',
    },
    {
      id: '5',
      year: 2016,
      describe: '',
      imgUrl: '/images/timeline/2016.jpg',
    },
    {
      id: '6',
      year: 2018,
      describe: '',
      imgUrl: '/images/timeline/2018.jpg',
    },
    {
      id: '7',
      year: 2019,
      describe: '',
      imgUrl: '/images/timeline/2019.jpg',
    },
    {
      id: '8',
      year: 2020,
      describe: '',
      imgUrl: '/images/timeline/2020.jpg',
    },
    {
      id: '9',
      year: 2021,
      describe: '',
      imgUrl: '/images/timeline/2021.jpg',
    },
    {
      id: '10',
      year: 2023,
      describe: '',
      imgUrl: '/images/timeline/2023.jpg',
    },
    {
      id: '11',
      year: 2024,
      describe: '',
      imgUrl: '/images/timeline/2024.jpg',
    },
  ]
  const [selectedNode, setSelectedNode] = useState<ITimeNode | null>(null)

  const getNodeWidth = () => {
    const baseSize = 10
    const dpr = window.devicePixelRatio || 1
    const nodeWidth = (baseSize / dpr) * 14
    return nodeWidth
  }

  const setSelectedNodePos = (index: number) => {
    const nodeWidth = setNumber(getNodeWidth())
    // index已经少了1，所以不用再减1
    const width = setNumber((index + 0.5) * nodeWidth)
    setTransleteX(setNumber(centerX - width))
  }

  return {
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
    getNodeWidth,
    setSelectedNodePos,
  }
}
