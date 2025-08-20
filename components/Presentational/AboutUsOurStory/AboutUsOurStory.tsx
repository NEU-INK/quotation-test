import React, { useState, useEffect, useRef } from 'react'
import { Typography, Box } from '@mui/material'
import Image from 'next/image'
// import Slider from 'react-slick';
import styles from './AboutUsOurStory.module.scss'
import { useDevice } from '../../../utils/deviceContext'

const data = [
  {
    id: 1,
    sup: 1,
    img: '/images/about-us/about-us-story-1.png',
    title: 'A Dream Through The Window',
    describe: [
      {
        num: 1,
        text: 'A poor country boy grew up during a difficult time and society. As was common during that time, his family often could not afford to put enough food on the table. ',
      },
      {
        num: 2,
        text: 'Only a few people in society could afford to go to school at that time. The boy would sleep by the window of the school, watching from outside so he could learn how to read and write. ',
      },
    ],
  },
  {
    id: 2,
    sup: 2,

    img: '/images/about-us/about-us-story-2.png',
    title: 'The Workshop Apprentice',
    describe: [
      {
        num: 1,
        text: 'By the time he was 14 years old, he had to find work to support his family. He secured a job at a small corner workshop that made machinery. ',
      },
      {
        num: 2,
        text: 'Years went by, and working in the machinery workshop allowed him to learn how to build machines from the ground up. ',
      },
      {
        num: 3,
        text: 'It was during this time that a dream was born in him—to build a socks machine.',
      },
    ],
  },

  {
    id: 3,
    sup: 3,

    img: '/images/about-us/about-us-story-3.png',

    title: 'Pursuing the Dream ',
    describe: [
      {
        num: 1,
        text: 'When the boy was about 20 years old, he put all his focus and energy into building his dream socks machine. ',
      },
      {
        num: 2,
        text: 'To start, he had to borrow money from friends, family, and the local government’s bank. They believed in him and his dream, and he pursued this machine-building project with determination. ',
      },
      {
        num: 3,
        text: 'To realize his dream, he needed to build the machine from the ground up. He began by buying the necessary equipment and learning how to design and draw the machine parts.',
      },
    ],
  },

  {
    id: 4,
    sup: 4,
    img: '/images/about-us/about-us-story-4.png',

    title: 'The First Success',
    describe: [
      {
        num: 1,
        text: 'After five years of struggle and numerous failures, he eventually succeeded in making his first socks machine. ',
      },
      {
        num: 2,
        text: 'He had dedicated his life to this project day and night for the past five years and could not wait to reveal this machine to the market. Excited and confident, he introduced the machine, hoping people would buy it. ',
      },
      {
        num: 3,
        text: 'He was right—the people in the village loved it and thought it was of good quality and a brilliant idea. He made successful sales while the momentum lasted.',
      },
    ],
  },
  {
    id: 5,
    sup: 5,
    img: '/images/about-us/about-us-story-5.png',

    title: 'The Market Shift ',
    describe: [
      {
        num: 1,
        text: 'After a short while, he realized he was also wrong. The situation soon turned upside down. The market trend shifted, and he realized that the machine he had spent so much time building was quickly becoming outdated because the fashion for socks was changing. ',
      },
      {
        num: 2,
        text: 'He could no longer sell his machines and was now stuck with a large inventory of recently outdated socks machines in the workshop with no sales. ',
      },
      {
        num: 3,
        text: 'His heart sank. On the brink of bankruptcy, he felt that all his blood, sweat, and tears had been for nothing.',
      },
    ],
  },

  {
    id: 6,
    sup: 6,
    img: '/images/about-us/about-us-story-6.png',
    title: 'Starting Over',
    describe: [
      {
        num: 1,
        text: 'Once a boy, now a parent with six children and very little money, he had no choice but to start over. He needed an entirely new design for the sock machine and had to begin from scratch. He secured a new loan from the bank. ',
      },
      {
        num: 2,
        text: 'At that time, changing machine parts was very difficult because they were manual and analog, rendering them as valuable as scrap metal. The machines could only produce one style of socks, and switching styles took days of manual work. There had to be another way.',
      },
    ],
  },

  {
    id: 7,
    sup: 7,
    img: '/images/about-us/about-us-story-7.png',
    title: 'Innovation and Hope',
    describe: [
      {
        num: 1,
        text: 'Then, he had an idea—to use a computer controller to change the style of the socks instead of relying on manual operation. This innovation could make his machines versatile and adaptable to changing market demands.',
      },
      {
        num: 2,
        text: 'With renewed hope and determination, he began working on his new design. The road ahead was still uncertain, but he was committed to succeeding. His journey had taught him resilience and innovation, and with these lessons, he aimed to create a machine that could withstand the test of time.',
      },
    ],
  },

  {
    id: 8,
    sup: 8,
    img: '/images/about-us/about-us-story-8.png',
    title: 'The Best Socks Machine',
    describe: [
      {
        num: 1,
        text: 'He wanted to build the most durable sock machine but lacked experience with computer controllers. Determined, he proposed his project to a Japanese high-speed rail computer control company, and they agreed to collaborate.',
      },
      {
        num: 2,
        text: 'Drawing on years of metal treatment experience, he developed a precise steel treatment method, which he patented. This resulted in the best controller and the most durable machine.',
      },
      {
        num: 3,
        text: 'The final machine featured highly computerized control, precision craftsmanship, high-speed production, and exceptional durability.',
      },
    ],
  },

  {
    id: 9,
    sup: 1,
    img: '/images/about-us/about-us-story-9.png',
    title: 'Another Country Boy',
    describe: [
      {
        num: 1,
        text: 'Another boy, born on a small island, had a different journey. At 7, due to communist rulings, he moved alone to a western city to live with his well-off uncle and extended family. Without his parents, he quickly learned independence. From a young age, he balanced studies and work, fostering a strong entrepreneurial spirit.',
      },
      {
        num: 2,
        text: 'In middle school, a misunderstanding led to him being expelled. No school in the region would accept him, so he moved to Canada. There, he continued to study and work despite it being illegal for students. As a result, he was expelled by an immigration officer and had to relocate to the USA.',
      },
    ],
  },

  {
    id: 10,
    sup: 2,
    img: '/images/about-us/about-us-story-10.png',
    title: 'His American Dream ',
    describe: [
      {
        num: 1,
        text: 'Pursuing the American dream, he enrolled in the first college that granted him a student visa, ending up in a small-town studying statistics. He worked hard every day, balancing studies and a job. Yet, the harder he studied, the lower his grades, with an average GPA of 2.2.',
      },
      {
        num: 2,
        text: 'Feeling hopeless, he switched to a business major. His grades soared, thanks to his years of work experience in various business situations. Even his professor was impressed and asked him to become an assistant tutor.',
      },
    ],
  },

  {
    id: 11,
    sup: 3,
    img: '/images/about-us/about-us-story-11.png',
    title: 'The In-laws and the factory',
    describe: [
      {
        num: 1,
        text: 'During one summer break, he traveled to meet his girlfriend’s parents, eager to make a good impression. However, her father ignored him without an obvious reason. Later, the father told his daughter not to return with him and even locked her passport, preventing her from leaving. ',
      },
      {
        num: 2,
        text: 'Angry and discouraged, the boy noticed the father\'s factory was hiring for a low-level machine job. Despite the "dirty work," he saw it as an opportunity to stay close to his girlfriend and her family, so he applied for the job.',
      },
    ],
  },

  {
    id: 12,
    sup: 4,
    img: '/images/about-us/about-us-story-12.png',
    title: 'The Two Boys Met',
    describe: [
      {
        num: 1,
        text: 'The first boy, now a middle-aged man, encountered the college boy working long hours on an old machine, 12 hours a day, Monday through Saturday. Despite the exhaustion, the college boy was happy because he cherished his time with his girlfriend. ',
      },
      {
        num: 2,
        text: 'Noticing the dirty and disorganized workshop, he approached the father with a proposal: to reorganize the workshop for free on Sundays to make it more efficient. The middle-aged man found the offer too good to refuse.',
      },
    ],
  },

  {
    id: 13,
    sup: 5,
    img: '/images/about-us/about-us-story-13.png',
    title: 'A Bold Proposal',
    describe: [
      {
        num: 1,
        text: 'Years later, the second boy, now back in the US and continuing his studies, discovered that the father was trying to invest in a way that would allow his family to migrate to the US. The boy made a proposal to the father: instead of investing in a bank with no returns, they could form a joint venture to start a sock factory in the USA. ',
      },
      {
        num: 2,
        text: "This investment would help the father’s family migrate to the US, although the boy would not be included since he wasn't part of the family.",
      },
    ],
  },

  {
    id: 14,
    sup: 5,
    img: '/images/about-us/about-us-story-14.png',
    title: 'A Strategic Partnership',
    describe: [
      {
        num: 1,
        text: 'To meet the $1 million investment required for immigration, both parties needed to contribute 50%. The father offered his sock machine as part of his investment, despite its lower actual value. The boy, with only $15,000 after selling everything he owned, borrowed $80,000 from friends and family. He proposed to cover the remaining amount by working for free for the father in the coming years.',
      },
      {
        num: 2,
        text: 'The father saw this as a great deal: minimal cash investment, securing his family’s migration, and gaining a dedicated worker—all part of his American dream.',
      },
    ],
  },

  {
    id: 15,
    sup: 6,
    img: '/images/about-us/about-us-story-15.png',
    title: 'Expanding Horizons',
    describe: [
      {
        num: 1,
        text: 'The second young boy dropped out of school and, with just three office desks, began cold-calling retailers for business. After three years of hard work, he managed to stabilize the company. In the fourth year, feeling the need to explore new markets, he turned his attention to the Far East.',
      },
      {
        num: 2,
        text: 'Recognizing the emerging opportunities in the 1990s, he ventured into Asia, leaving his wife to run the business in the USA. He began selling sock machine equipment in the Asian market, starting in China.',
      },
    ],
  },

  {
    id: 16,
    sup: 7,
    img: '/images/about-us/about-us-story-16.png',
    title: 'Overcoming Obstacles ',
    describe: [
      {
        num: 1,
        text: 'In China, he faced challenges as no one had the money to buy the sock machines, and few knew how to operate computerized models. To overcome this, he assembled a mechanical team to teach factory owners how to use the machines from scratch.',
      },
      {
        num: 2,
        text: 'Offering generous credit and payment terms without collateral, he also assisted the factory owners in finding customers. After four years of perseverance, the market began to respond, and he started to see more stable income from his efforts.',
      },
    ],
  },

  {
    id: 17,
    sup: 8,
    img: '/images/about-us/about-us-story-17.png',
    title: 'Battling betrayal',
    describe: [
      {
        num: 1,
        text: 'Unfortunately, a greedy manager within his company sought to profit personally by working with external factories to create fake contracts. They purchased machines at low prices and failed to make full payments, causing severe financial strain. ',
      },
      {
        num: 2,
        text: 'As the company struggled, the machine supplier stopped providing equipment, pushing the company toward bankruptcy. With only a few sample machines left, he used these to restart the business from scratch.',
      },
    ],
  },
]

const AboutUsOurStory: React.FC = () => {
  const { isMobile } = useDevice()

  const [selectedIndex, setSelectedIndex] = useState(0)
  // const [isHovered, setIsHovered] = useState(false)
  // console.log(isHovered)
  const carouselRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleImageClick = (index: number) => {
    setSelectedIndex(index)
  }

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % data.length)
    }, 50000000)
  }

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // 自动每5秒切换图片
  useEffect(() => {
    startAutoSlide()
    return stopAutoSlide
  }, [])

  // 确保选中的图片在可视区域的中间
  useEffect(() => {
    if (carouselRef.current) {
      const itemHeight = 180 // 每张图片的高度
      const centerPosition =
        itemHeight * selectedIndex - carouselRef.current.clientHeight / 2 + itemHeight / 2
      carouselRef.current.scrollTo({
        top: centerPosition,
        behavior: 'smooth',
      })
    }
  }, [selectedIndex])

  const handleMouseEnter = () => {
    // setIsHovered(true)
    stopAutoSlide()
  }

  const handleMouseLeave = () => {
    // setIsHovered(false)
    startAutoSlide()
  }

  const handleTouchStart = () => {
    // setIsHovered(true)
    stopAutoSlide()
  }

  const handleTouchEnd = () => {
    // setIsHovered(false)
    startAutoSlide()
  }

  return (
    <Box
      className={styles.capacity}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Box className={styles.top}>
        <Typography
          lineHeight={1}
          fontSize={`${isMobile ? '4rem' : '9.6rem'}`}
          fontWeight={800}
          fontFamily={'HC'}
        >
          OUR STORY
        </Typography>
        <Typography
          fontFamily={'HS'}
          fontSize={`${isMobile ? '2rem' : '2.6rem'}`}
          style={{ textAlign: 'right' }}
          lineHeight={1}
        >
          A DREAM THROUGH THE WINDOW <br /> ANOTHER COUNTRY BOY
        </Typography>
      </Box>

      <Box className={styles.cardsContainer}>
        <Box className={styles.leftCard}>
          <Box className={styles.imageFrame}>
            <div className={styles.leftBorder}></div>
            <div className={styles.rightBorder}></div>

            <Image
              src={data[selectedIndex].img}
              alt={data[selectedIndex].title}
              width={1000}
              height={1000}
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
            />
          </Box>
          <Box className={styles.textContent}>
            <Box className={styles.titleBox}>
              <Typography
                className={styles.title}
                fontSize={`${isMobile ? '2.2rem' : '3.6rem'}`}
                fontWeight={800}
              >
                {data[selectedIndex].title}
                <sup style={{ fontSize: `${isMobile ? '1.6rem' : '2rem'}` }}>
                  [{data[selectedIndex].sup}]
                </sup>
              </Typography>
            </Box>

            <Box className={styles.describeBox}>
              <Box className={`${isMobile ? styles.describeBoxBoxMobile : styles.describeBoxBox}`}>
                {data[selectedIndex].describe.map((desc) => (
                  <Typography
                    fontFamily={'HS'}
                    fontSize={`${isMobile ? '2rem' : '2.6rem'}`}
                    lineHeight={1.25}
                    key={desc.num}
                    className={styles.describeText}
                    sx={{ marginTop: '4rem' }}
                  >
                    {desc.text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 右侧图片竖直排列 */}
        <Box className={styles.carousel} ref={carouselRef}>
          <Box className={styles.imageList}>
            {data.map((item, index) => (
              <Box
                key={item.id}
                className={`${styles.carouselItem} ${
                  selectedIndex === index ? styles.selected : ''
                }`}
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={180}
                  height={180}
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AboutUsOurStory
