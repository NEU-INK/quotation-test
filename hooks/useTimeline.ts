import { useState } from 'react'
import { ITimeNode } from '../types/interfaces'

export default function useTimeline() {
  const [translateX, setTransleteX] = useState(0)
  const [centerX, setCenterX] = useState(0)
  const [lastX, setLastX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const timelineData: ITimeNode[] = [
    {
      id: '0',
      year: 2000,
      describe: '',
      imgUrl: '/images/timeline/2000.jpg',
    },
    {
      id: '1',
      year: 2004,
      describe: '',
      imgUrl: '/images/timeline/2004.jpg',
    },
    {
      id: '2',
      year: 2006,
      describe: '',
      imgUrl: '/images/timeline/2006.jpg',
    },
    {
      id: '3',
      year: 2018,
      describe: '',
      imgUrl: '/images/timeline/2018.jpg',
    },
    {
      id: '4',
      year: 2019,
      describe: '',
      imgUrl: '/images/timeline/2019.jpg',
    },
    {
      id: '5',
      year: 2021,
      describe: '',
      imgUrl: '/images/timeline/2021.jpg',
    },
    {
      id: '6',
      year: 2024,
      describe: '',
      imgUrl: '/images/timeline/2024.jpg',
    },
  ]
  const [selectedNode, setSelectedNode] = useState<ITimeNode | null>(null)

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
  }
}
