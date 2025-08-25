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
      year: 1991,
      content: [
        {
          imgUrl: '/images/timeline/1991.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '1',
      year: 1993,
      content: [
        {
          imgUrl: '/images/timeline/1993.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '2',
      year: 1997,
      content: [
        {
          imgUrl: '/images/timeline/1997.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '3',
      year: 2000,
      content: [
        {
          imgUrl: '/images/timeline/2000.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '4',
      year: 2004,
      content: [
        {
          imgUrl: '/images/timeline/2004.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '5',
      year: 2006,
      content: [
        {
          imgUrl: '/images/timeline/2006.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '6',
      year: 2010,
      content: [
        {
          imgUrl: '/images/timeline/2010.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '7',
      year: 2015,
      content: [
        {
          imgUrl: '/images/timeline/2015.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '8',
      year: 2016,
      content: [
        {
          imgUrl: '/images/timeline/2016.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '9',
      year: 2018,
      content: [
        {
          imgUrl: '/images/timeline/2018.jpg',
          describe: '',
        },
        {
          imgUrl: '/images/timeline/2018-2.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '10',
      year: 2019,
      content: [
        {
          imgUrl: '/images/timeline/2019.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '11',
      year: 2020,
      content: [
        {
          imgUrl: '/images/timeline/2020.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '12',
      year: 2021,
      content: [
        {
          imgUrl: '/images/timeline/2021.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '13',
      year: 2023,
      content: [
        {
          imgUrl: '/images/timeline/2023.jpg',
          describe: '',
        },
      ],
    },
    {
      id: '14',
      year: 2024,
      content: [
        {
          imgUrl: '/images/timeline/2024.jpg',
          describe: '',
        },
      ],
    },
  ]
  const [selectedNode, setSelectedNode] = useState<ITimeNode | null>(null)

  const getFontSize = () => {
    const baseSize = 10
    const dpr = window.devicePixelRatio || 1
    return baseSize / dpr
  }

  /**
   * 节点中间部分+两边轴线的rem值
   */
  const timeNodeWidthRem = 10

  const getNodeWidth = (remNumber: number) => getFontSize() * remNumber

  const setSelectedNodePos = (index: number) => {
    const nodeWidth = setNumber(getNodeWidth(timeNodeWidthRem))
    // index已经少了1，所以不用再减1
    const width = setNumber((index + 0.5) * nodeWidth)
    setTransleteX(setNumber(centerX - width))

    setContentTransleteX(setNumber(-index * timeNodeContentWidth))
  }

  const [timeNodeContentWidth, setTimeNodeContentWidth] = useState(0)
  const [contentTranslateX, setContentTransleteX] = useState(0)

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

    timeNodeWidthRem,
    getNodeWidth,
    setSelectedNodePos,

    timeNodeContentWidth,
    setTimeNodeContentWidth,
    contentTranslateX,
    setContentTransleteX,
  }
}
