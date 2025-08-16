
//最好的
import { Box, Typography, Modal, IconButton } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
// import CloseIcon from '@mui/icons-material/Close';
import styles from './MapComponent.module.scss';
import Slider from "react-slick";
import {useDevice} from "../../../utils/deviceContext";

const MapComponent = () => {
    const { isMobile } = useDevice();

    const [selectedPoint, setSelectedPoint] = useState(4); // 存储选中的点
    const [isModalOpen, setIsModalOpen] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplay: true,
    };
    // 定义标点的位置数据
    const points = [
        {
            id: 1,
            label: 'Global Logistics Warehouse',
            position: { top: '51%', left: '4%' }, // 基于背景图的百分比位置
            content: '/path/to/image1.png',
        },
        {
            id: 2,
            label: 'USA Factory ',
            position: { top: '49%', left: '5.8%' }, // 基于背景图的百分比位置
            content: '/path/to/image1.png',
        },
        {
            id: 3,
            label: 'Mexico Factory ',
            position: { top: '57%', left: '7.4%' }, // 基于背景图的百分比位置
            content: '/path/to/image1.png',
        },
        {
            id: 4,
            label: 'China Factory | China Headquarers',
            position: { top: '55.3%', right: '21.2%' }, // 基于背景图的百分比位置
            content: '/path/to/image1.png',
        },
        {
            id: 4,
            label: 'China Factory | China Headquarers',

            position: { top: '55.3%', right: '21.2%' }, // 基于背景图的百分比位置
            content: '/path/to/image1.png',
        },
        {
            id: 5,
            label: 'Sales and Distribution Centre',
            position: { top: '50.6%', right: '16.8%' }, // 基于背景图的百分比位置
            content: '/path/to/image1.png',
        },
        {
            id: 6,
            label: 'Cambodia Factor',
            position: { top: '60.5%', right: '24%' }, // 基于背景图的百分比位置
            content: '/path/to/image1.png',
        },
    ];

    // 定义标点的文本位置
    const pointsText = [

        {
            id: 1,
            label: 'Global Logistics Warehouse',
            location: 'Long Beach, California',

            textPosition: { top: '5%', left: '4%' }, // 文本位置
            textAlign: 'left',
            width: '28rem',
            widthL:'30rem',

        },
        {
            id: 2,
            label: 'USA Factory ',
            location: 'Logan, Utah',
            textPosition: { top: '22%', left: '22%' },
            textAlign: 'left',
            width: '28rem',
            widthL:'30rem',

        },
        {
            id: 3,
            label: 'Mexico Factory ',
            location: 'Penjamo, Guanajuato ',
            textPosition: { bottom: '16%', left: '7.5%' },
            textAlign: 'left',
            width: '28rem',
            widthL:'30rem',

        },
        {
            id: 4,
            label: 'China Factory',
            location: 'Hangzhou and Additional Zhejiang Haining Sites',

            textPosition: {  top: '12%', right: '23%' },
            // textPosition: {  top: '12%', right: '1%' },
            textAlign: 'right',
            width: `${isMobile?'18rem':'33rem'}`,
            widthL:`${isMobile?'18rem':'33rem'}`,

        },
        {
            id: 4,
            type:2,
            label: 'China Headquarers',
            location: 'Zhejiang Haining',
            // textPosition: {  top: '12%', right: '7.5%' },
            textPosition: {  top: '12%', right:`${isMobile?'0':'7.5%'}` },
            textAlign: 'left',
            // width: '24rem',
            width: `${isMobile?'12rem':'24rem'}`,
            // widthL:'24rem',
            widthL:`${isMobile?'14rem':'24rem'}`,


        },
        {
            id: 5,
            type:1,
            label: 'Sales and Distribution Centre',
            location: 'Shibuya, Tokyo, Japan',
            textPosition: { top: '51%', right: `${isMobile?'-5%':'-2%'}` },
            textAlign: 'left',
            width: `${isMobile?'14rem':'24rem'}`,
            widthL:`${isMobile?'14rem':'29rem'}`,


        },


        {
            id: 6,
            type:1,
            label: 'Cambodia Factor',
            location: 'Preah Sihanouk',
            position: { top: '60.5%', right: '24%' }, // 基于背景图的百分比位置
            textPosition: { bottom: '2%', right: '24.5%' },
            textAlign: 'right',
            width: '32rem',
            widthL:'32rem',
        },
    ];

    // 定义虚线连接线的数据
    const pointsLine = [

        {
            id: 1,
            width: '0.1vw',
            height: '11.5vw',
            linePosition: { top: '24%', left: `calc(4% + 1vw)` }, // 基于背景图的百分比位置
            type: 2, // 1 横线 2 竖线
        },
        {
            id: 2,
            width: '0.1vw',
            height: '9.5vw',
            linePosition: { top: '26.1%', left: `calc(5.7% + 1vw)` }, // 基于背景图的百分比位置
            type: 2, // 1 横线 2 竖线
        },
        {
            id: 2,
            width: '13vw',
            height: '0.1vw',
            linePosition: { top: '26.1%', left: `calc(5.8% + 1vw)` }, // 基于背景图的百分比位置
            type: 1, // 1 横线 2 竖线
        },
        {
            id: 3,
            width: '0.1vw',
            height: '5vw',
            linePosition: { top: '62%', left: `calc(7.4% + 1vw)` }, // 基于背景图的百分比位置
            type: 2, // 1 横线 2 竖线
        },
        {
            id: 4,
            width: '0.1vw',
            height: '17.2vw',
            linePosition: { top: '14%', right: `calc(21.2% + 1vw)`}, // 基于背景图的百分比位置
            type: 2, // 1 横线 2 竖线
        },
        {
            id: 5,
            width: '2.7vw',
            height: '0.1vw',
            linePosition: { top: `calc(50.6% + 2.2vw)`, right: '15%' }, // 基于背景图的百分比位置
            type: 1, // 1 横线 2 竖线
        },
        {
            id: 6,
            width: '0.1vw',
            height: '9.6vw',
            linePosition: { top: '65.2%',right: `calc(24% + 1vw)` }, // 基于背景图的百分比位置
            type: 2, // 1 横线 2 竖线
        },
    ];

    // 弹窗数据
    const mapInfo = [

        {
            id:1,
            data:[
                {

                    title  : 'Global Logistics Warehouse',
                    location:'Long Beach, California',
                    img:'/images/walt/404.png',
                    text:''
                }
            ]
        },
        {
            id:5,
            data:[
                {

                    title  : 'Sales and Distribution Centre',
                    location:'Shibuya, Tokyo, Japan',
                    img:'/images/walt/404.png',
                    text:''
                }
            ]
        },
        {
            id:2,
            data:[
                {
                    title  : 'USA Factory',
                    location:'Logan, Utah',
                    img:'/images/walt/walt-mggc.png',
                    text:'The Logan factory in Utah is a key player in Walt Technology Group\'s global operations. This facility specializes in advanced R&D, particularly in AI-driven identification and automation technologies. It supports the broader production network by focusing on high-quality, customized sock production, maintaining close collaboration with other global facilities to meet rigorous standards.'
                }
            ]
        },
        {
            id:4,
            data:[
                {
                    title  : 'China Headquarters',
                    location:'Zhejiang Haining',
                    img:'/images/walt/walt-zjhngc.png',
                    text:'Located in Zhejiang Haining, this headquarters is the heart of Walt Technology Group Co., Ltd. The facility is fully integrated, covering all aspects of sock production, from raw materials to final products. The headquarters is equipped with advanced automation and AI technologies, emphasizing energy efficiency and sustainable practices. It serves as the main center for research and development, driving innovation in product design and manufacturing processes.'
                },
                {
                    title  : 'China Headquarters',
                    location:'Zhejiang Haining',
                    img:'/images/walt/walt-zjhezzgc.png',
                    text:'Located in Zhejiang Haining, this headquarters is the heart of Walt Technology Group Co., Ltd. The facility is fully integrated, covering all aspects of sock production, from raw materials to final products. The headquarters is equipped with advanced automation and AI technologies, emphasizing energy efficiency and sustainable practices. It serves as the main center for research and development, driving innovation in product design and manufacturing processes.'
                },
                {
                    title  : 'China Headquarters',
                    location:'Zhejiang Haining',
                    img:'/images/walt/walt-hetwgc.png',
                    text:'Located in Zhejiang Haining, this headquarters is the heart of Walt Technology Group Co., Ltd. The facility is fully integrated, covering all aspects of sock production, from raw materials to final products. The headquarters is equipped with advanced automation and AI technologies, emphasizing energy efficiency and sustainable practices. It serves as the main center for research and development, driving innovation in product design and manufacturing processes.'
                }
            ]
        },
        {
            id:3,
            data:[

                {
                    title  : 'Mexico Factory',
                    location:'Penjamo, Guanajuato',
                    img:'/images/walt/walt-mxggc1.png',
                    text:'Located in Penjamo, Guanajuato, the Mexico factory (AMRAY S.A. de C.V.) spans 12,228 square meters and employs 560 people, established in 2016. It produces a variety of garments, including men\'s, women\'s, and children\'s polo shirts, casual shirts, and activewear, with a production capacity of 350,000 pieces per month. The factory utilizes state-of-the-art equipment and stringent quality control measures to ensure high standards are met for both local and international markets.'
                },


                {
                    title  : 'Mexico Factory',
                    location:'Penjamo, Guanajuato',
                    img:'/images/walt/walt-mxggc2.png',
                    text:'Located in Penjamo, Guanajuato, the Mexico factory (AMRAY S.A. de C.V.) spans 12,228 square meters and employs 560 people, established in 2016. It produces a variety of garments, including men\'s, women\'s, and children\'s polo shirts, casual shirts, and activewear, with a production capacity of 350,000 pieces per month. The factory utilizes state-of-the-art equipment and stringent quality control measures to ensure high standards are met for both local and international markets.'
                },

                {
                    title  : 'Mexico Factory',
                    location:'Penjamo, Guanajuato',
                    img:'/images/walt/walt-mxggc3.png',
                    text:'Located in Penjamo, Guanajuato, the Mexico factory (AMRAY S.A. de C.V.) spans 12,228 square meters and employs 560 people, established in 2016. It produces a variety of garments, including men\'s, women\'s, and children\'s polo shirts, casual shirts, and activewear, with a production capacity of 350,000 pieces per month. The factory utilizes state-of-the-art equipment and stringent quality control measures to ensure high standards are met for both local and international markets.'
                }
            ]
        },
        {
            id:6,
            data:[
                {
                    title  : 'Cambodia Factory',
                    location:'Preah Sihanouk',
                    img:'/images/walt/walt-jpzgc.png',
                    text:'Our factory in Preah Sihanouk, Cambodia, plays a pivotal role in producing socks for some of the world\'s largest brands. Beyond its manufacturing capacity, this facility is committed to enhancing local community development by providing employment opportunities and supporting sustainable initiatives. A key project is the development of our Carbon Zero Eco Park, reflecting our dedication to environmental sustainability and responsible corporate practices.'
                },
                {
                    title  : 'Cambodia Factory',
                    location:'Preah Sihanouk',
                    img:'/images/walt/walt-jpzgc2.png',
                    text:'Our factory in Preah Sihanouk, Cambodia, plays a pivotal role in producing socks for some of the world\'s largest brands. Beyond its manufacturing capacity, this facility is committed to enhancing local community development by providing employment opportunities and supporting sustainable initiatives. A key project is the development of our Carbon Zero Eco Park, reflecting our dedication to environmental sustainability and responsible corporate practices.'
                },
                {
                    title  : 'Cambodia Factory',
                    location:'Preah Sihanouk',
                    img:'/images/walt/walt-jpzgc3.png',
                    text:'Our factory in Preah Sihanouk, Cambodia, plays a pivotal role in producing socks for some of the world\'s largest brands. Beyond its manufacturing capacity, this facility is committed to enhancing local community development by providing employment opportunities and supporting sustainable initiatives. A key project is the development of our Carbon Zero Eco Park, reflecting our dedication to environmental sustainability and responsible corporate practices.'
                }
            ]
        }
    ]

    const handleMouseEnter = (id:any) => {
        setSelectedPoint(id);
    };

    // 鼠标离开不作处理
    const handleMouseLeave = () => {
        // setSelectedPoint(null);
    };

    const handlePointClick = (point:any) => {
        setSelectedPoint(point.id);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box className={styles.mapComponent}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image
                    src="/images/walt/home-map-bg.png"
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
                    <Typography fontSize={`${isMobile?'6rem':'9.6rem'}`} fontWeight={800} fontFamily={'HC'}>
                        OUR TEAM
                    </Typography>
                </Box>
                <Box className={styles.punctuationBox}>
                    {points.map((point) => (
                        <Box
                            key={point.id}
                            className={styles.point}
                            width={'2vw'}
                            height={'2vw'}
                            sx={{
                                position: 'absolute',
                                ...point.position, // 标点的绝对位置，基于背景图
                            }}
                            onMouseEnter={() => handleMouseEnter(point.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handlePointClick(point)}
                        >
                            <Image
                                src={
                                    selectedPoint === point.id
                                        ? '/images/walt/mark-red.png': '/images/walt/mark-blue.png'
                                }
                                alt={point.label}
                                width={25}
                                height={30}
                                className={styles.pointImage}


                            />
                        </Box>
                    ))}
                    {pointsText.map((point:any) => (
                        <Box
                            key={point.id}
                            className={styles.pointText}
                            sx = {{
                                position: 'absolute',
                                ...point.textPosition, // 文本的绝对位置，基于背景图
                                color: selectedPoint === point.id ? '#8DB7D9' : '#13357b',

                                textAlign:`${point.textAlign}`,
                            }}
                            onMouseEnter={() => handleMouseEnter(point.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handlePointClick(point)}
                        >
                            <Typography
                                fontSize={`${isMobile?'1.5rem':'3.6rem'}`}
                                fontFamily={'HS'} fontWeight={600}
                                sx={{

                                    width: `${point.width}`,
                                }}
                            >
                                {point.label}
                            </Typography>
                            <Typography
                                fontSize={`${isMobile?'1.4rem':'2.6rem'}`}
                              fontFamily={'HS'}
                                sx={{

                                    width: `${point.widthL}`
                                }}
                            >
                                {`(${point.location})`}
                            </Typography>
                        </Box>
                    ))}
                    {pointsLine.map((point) => (
                        <Box
                            key={point.id}
                            className={styles.pointLine}
                            sx={{
                                position: 'absolute',
                                ...point.linePosition, // 线条的绝对位置，基于背景图
                                color: selectedPoint === point.id ? '#8DB7D9' : '#13357b',

                                width: point.width,
                                height:point.height,
                                // background: '#f80000',
                                borderRight: point.type===2 ? `1px dashed ${selectedPoint === point.id ? '#8DB7D9' : '#13357b'}` : 'none',
                                borderTop: point.type===1 ?  `1px dashed ${selectedPoint === point.id ? '#8DB7D9' : '#13357b'}`: 'none',

                            }}
                            onMouseEnter={() => handleMouseEnter(point.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handlePointClick(point)}

                        >
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* 弹窗显示 */}
            <Modal open={isModalOpen} onClose={handleCloseModal}>

                <Box className={styles.modalContent}>

                    <Slider {...settings}>
                        { (mapInfo.find((p) => p.id === selectedPoint)?.data)?.map((item, index) => (
                            <Box  className={styles.modalContentBox} key={index} position="relative">
                                {/* 背景图 */}
                                <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                                    <Image
                                        src={item.img}
                                        alt="Background"
                                        objectFit="cover"
                                        quality={100}
                                        priority
                                        width={400} height={400}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Box>
                                <Box className={styles.modalContentText}>
                                    {/* 第一部分：18% 高度 */}
                                    <Box className={styles.modalContentTextTop}>
                                        <Typography component="div" style={{display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'left'}}>
                                            <Typography   fontSize={`${isMobile?'3rem':'3.6rem'}`} fontFamily={'HS'} fontWeight={700} >
                                                {item.title}
                                            </Typography>
                                            <Typography fontFamily={'HS'}   fontSize={`${isMobile?'2.2em':'2.6rem'}`} >
                                                {item.location}

                                            </Typography>
                                        </Typography>
                                        <Typography   fontSize={`${isMobile?'1.4rem':'2rem'}`} fontFamily={'HS'} className={styles.contentTopText}      style={{maxWidth:'60%',maxHeight:'100%'}}>
                                            {item.text}
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                        ))}
                    </Slider>
                    <IconButton className={styles.closeButton} onClick={handleCloseModal}>
                        {/*<CloseIcon />*/}
                        <Box
                            component="img"
                            src="/icons/walttec/map-modal-close.png"
                            alt="Shopping Cart Icon"
                            sx={{ width: '3rem', height: '3rem' }} // 设置图标的大小
                        />
                    </IconButton>


                    {/*<IconButton className={styles.closeButton} onClick={handleCloseModal}>*/}
                    {/*    <CloseIcon />*/}
                    {/*</IconButton>*/}
                    {/* 轮播内容 */}
                    {/*<Box>*/}
                    {/*    <Typography fontSize="2vw">*/}
                    {/*        {selectedPoint}*/}
                    {/*        {mapInfo.find((p) => p.id === selectedPoint)?.data[0].title}*/}
                    {/*    </Typography>*/}
                    {/*    {selectedPoint}*/}
                    {/*    <Image*/}
                    {/*        src={points.find((p:any) => p.id === selectedPoint)?.content}*/}
                    {/*        alt="Point content"*/}
                    {/*        width={400}*/}
                    {/*        height={300}*/}
                    {/*    />*/}
                    {/*</Box>*/}


                </Box>
            </Modal>
        </Box>
    );
};

export default MapComponent;

