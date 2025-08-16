import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Head from 'next/head';
import styles from '../styles/pagesStyles/ourPartners.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useDevice} from "../utils/deviceContext";
import HubSpotForm from  '../components/Shared/hubSpotForm/HubSpotForm'
import WaltButton from "../components/Smart/WaltButton/WaltButton";

const  dataList= [
    {
        type:2,
        src: "/images/our-partners/our-partners-top1.png",
        // src: "https://asset.cloudinary.com/dq928gtws/b0edac3e74a9c038662754ab6fd9abcb",
        poster: "/images/our-partners/our-partners-top1.png",
        header: "OUR PARTNERS",
        description: "“For the future and beyond, We Are Ready!“",
        btnText: " PLACE CUSTOM ORDER",
        btnLink: "/about-us",
        // btnLink: "/about-us-learn-more",
    },
];
const partnersList = [
    {
        id: 1, // 唯一标识符
        name: 'Partners', // 标题
        data: [ // Carousel 显示的具体内容
            {
                imageSrc: '/images/our-partners/our-partners-img1.png', // 图片路径
                title: 'CAFE APRES', // 显示的标题
                description: '“Hi! I just received the socks! First, the material is incredible on both sock types. Thank you!” ', // 描述信息
                description2:'     - Victoria',
                btnText: 'Visit Café Aprés', // 按钮上的文字
                link: 'https://www.cafeapres.com', // 按钮链接地址
            },

        ]
    },
    {
        id: 2,
        name: 'Partners',
        data: [ // Carousel 显示的具体内容
            {
                imageSrc: '/images/our-partners/our-partners-img2.png', // 图片路径
                title: 'Outset Apparel', // 显示的标题
                description: '"Hello,I\'ve received the samples. They look amazing, thank you. \n' +
                    'I will spend time making specific notes on each sock and get \n' +
                    'back to you soon. Thank you."', // 描述信息
                description2:'-  Jordan',
                btnText: 'Visit Café Aprés', // 按钮上的文字
                link: 'www.outsetapparel.shop', // 按钮链接地址
            },

        ]
    },
    {
        id: 3,
        name: 'Partners',
        data: [ // Carousel 显示的具体内容
            {
                imageSrc: '/images/our-partners/our-partners-img3.png', // 图片路径
                title: 'AMBERJACK', // 显示的标题
                description: '"Obviously good. secretly great." ', // 描述信息
                description2:' ',
                btnText: 'Visit Café Aprés', // 按钮上的文字
                link: 'www.amberjack.shop', // 按钮链接地址
            },

        ]
    },
    {
        id: 4,
        name: 'Partners',
        data: [ // Carousel 显示的具体内容
            {
                imageSrc: '/images/our-partners/our-partners-img4.png', // 图片路径
                title: 'NIKE', // 显示的标题
                description: '“We will put the athlete* at the center of everything we do,\n' +
                    'We’re a company of dreamers, optimists, and inventors, and \n' +
                    'our eyes are on the future — we’re going to simplify and go.”  ', // 描述信息
                description2:'-  CEO',

                btnText: 'Visit Café Aprés', // 按钮上的文字
                link: 'www.nike.com/athletic-socks', // 按钮链接地址
            },

        ]
    },
    {
        id: 5,
        name: 'Partners',
        data: [ // Carousel 显示的具体内容
            {
                imageSrc: '/images/our-partners/our-partners-img5.png', // 图片路径
                title: 'BOMBAS', // 显示的标题
                description: '"Small things matter. They add up. Then, they turn into big \n' +
                    'things. So we took the time to pinpoint all the small issues with \n' +
                    'socks and t-shirts: the painful toe seams; annoying pilling; no \n' +
                    'shows that slip. You name it, we found it. Then we tweaked \n' +
                    'and tweaked until we reached total perfection."  ', // 描述信息
                description2:'-  BOMBAS',

                btnText: 'Visit Café Aprés', // 按钮上的文字
                link: 'www.bombas.com', // 按钮链接地址
            },

        ]
    }
];

const settings1 = {
    dotsClass: "slick-dots slick-thumb home-container-slick-dots ",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false
};
const OurPartners = () => {
    const { isMobile } = useDevice();

    const router = useRouter();
    const [selectedPartner, setSelectedPartner] = useState(0); // Track the selected partner

    const handleMouseEnter = (index:any) => {
        setSelectedPartner(index);
    };
    const handleImageClick = (index: number) => {
        setSelectedPartner(index);
        // sliderRef.current.slickGoTo(index);
    };
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 10,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     arrows:true
    // };
    return (
        <>
            <Head>
                <title>Our Partners | Walt Tec | Global Collaborations</title>
                <meta
                    name="description"
                    content="Walt Technology Group partners with global brands, offering high-quality, sustainable manufacturing solutions with compliance certifications like FDA and ISO."
                />

                {/* Open Graph Metadata */}
                <meta property="og:title" content="Our Partners | Walt Tec | Global Collaborations" />
                <meta
                    property="og:description"
                    content="Explore Walt Technology Group's trusted partnerships and certifications, supporting innovative and sustainable manufacturing for global brands."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://walttec.shop/our-partners/" />
                <meta property="og:image" content="https://walttec.shop/images/partners.jpg" />

                {/* Twitter Cards Metadata */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Partners | Walt Tec | Global Collaborations" />
                <meta
                    name="twitter:description"
                    content="Learn about Walt Technology Group's collaborations with leading brands and our commitment to sustainable, innovative manufacturing solutions."
                />
                <meta name="twitter:image" content="https://walttec.shop/images/partners.jpg" />

                <link rel="canonical" href="https://walttec.shop/our-partners/" />
                <meta name="robots" content="index,follow" />
            </Head>

            <Box className={`${styles.ourPartnersPage}`}>
                <Box position="relative">
                    <Slider {...settings1}  >

                        {dataList.map((video, index) => (
                            <Box key={index} position="relative">
                                <Box position="relative" width="100%" height="100%">
                                {video.type === 1 ? ( <video

                                        src={video.src}
                                        controls
                                        muted
                                        autoPlay
                                        loop
                                        playsInline
                                        preload="auto"
                                        poster={video.poster}
                                        style={{ width: '100%' }}
                                    /> )  : (  <Image
                                        src={video.src}
                                        alt={`image-${index}`}
                                        width={4000}
                                        height={2000}
                                        style={{ width: '100%', height: 'auto' }}
                                    />)} {/* 显示视频上方的文字内容 */}
                                    <Box position="absolute" bottom="20%" left="10%" >
                                        <Typography fontSize={`${isMobile?'4rem':'8.2rem'}`}  lineHeight={1.5} fontWeight={800} fontFamily={'HC'}>

                                            {video.header}

                                        </Typography>
                                        {/*<Typography fontSize={'3vw'} lineHeight={2}  fontFamily={'HS'}  style={{ width: '40vw' }} >*/}
                                        {/*    {*/}
                                        {/*        video.description*/}
                                        {/*    }*/}
                                        {/*</Typography>*/}
                                        <WaltButton
                                            text={video.btnText}
                                            icon="/icons/walttec/home-shopping-cart.png" // 使用图片路径
                                            onClick={() => router.push(video.btnLink)}
                                            iconPosition="left"
                                            borderColor="white"
                                            textColor="white"
                                            hoverBackgroundColor="#003680"
                                            hoverBorderColor="#003680"

                                            hoverTextColor="white"
                                            activeBackgroundColor="#003680"
                                            activeBorderColor="#003680"
                                            activeTextColor="white"
                                            style={{
                                                fontSize:`${isMobile?'2rem':'2.6rem'}`,
                                                 }} // 传入自定义样式
                                        />


                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
                <Box  className={styles.ourPartnersBox}>

                    <Box display="flex" justifyContent="space-around" mb={4} padding={'0 15%'} >
                        {partnersList.map((partner, index) => (
                            <Typography
                                fontSize={`${isMobile?'2.2rem':'3.6rem'}`}
                                key={partner.id}
                                className={`${styles.partnerTitle} `}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onClick={() => handleImageClick(index)}
                                style={{
                                    cursor: 'pointer',
                                    color: selectedPartner === index ? '#ADD8E6' : 'var( --primary-blue)',
                                }}
                            >
                                {partner.name}<br/>0{partner.id}
                            </Typography>
                        ))}
                    </Box>

                    <Box  className={styles.ourPartnersSlider}>
                        {/*<Slider {...settings}>*/}
                            {partnersList[selectedPartner].data.map((partnerItem, index) => (
                                <Box  key={index} className={styles.partnerItem} >
                                    <Box  className={styles.imageFrame}>
                                        <Image
                                            src={partnerItem.imageSrc}
                                            alt={`Partner-${index}`}
                                            width={600}
                                            height={400}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                    </Box>
                                    <Box className={styles.textContent} >
                                        <Typography  fontSize={`${isMobile?'3rem':'4.8rem'}`}  fontWeight={800} className={styles.itemTitle}>
                                            {partnerItem.title}
                                        </Typography>
                                        <Typography  fontSize={`${isMobile?'3rem':'3.6rem'}`} fontWeight={800} className={styles.itemLink}>
                                            {partnerItem.link}
                                        </Typography>
                                        <Typography fontSize={`${isMobile?'2rem':'2.2rem'}`}   className={styles.itemDescription}>
                                            {partnerItem.description}
                                            <br/>
                                            {partnerItem.description2}

                                        </Typography>

                                    </Box>
                                </Box>
                            ))}
                        {/*</Slider>*/}
                    </Box>
                </Box>
            </Box>

            <HubSpotForm/>
        </>
    );
};

export default OurPartners;
