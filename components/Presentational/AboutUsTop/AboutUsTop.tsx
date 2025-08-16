
import React from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDevice} from "../../../utils/deviceContext";

const AboutUsTop = () => {
    const { isMobile } = useDevice();

    // const {
    //     videos,
    //
    // } = homeData;
   const  dataList= [
        {
            type:2,
            src: "/images/about-us/about-us-top.png",
            // src: "https://asset.cloudinary.com/dq928gtws/b0edac3e74a9c038662754ab6fd9abcb",
            poster: "/images/about-us/about-us-top.png",
            header: "MISSION AND VISION",
            description: "For the future and beyond",
            description2: " We Are Ready!",
            btnText: " PLACE CUSTOM ORDER",
            btnLink: "/about-us",
            // btnLink: "/about-us-learn-more",
        },
    ];

    const settings = {
        dotsClass: "slick-dots slick-thumb home-container-slick-dots ",

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false

    };

    return (
        <Box position="relative" >
            <Slider {...settings}  >

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
                                width={1920}
                                height={1080}
                                style={{ width: '100%', height: 'auto' }}
                            />)} {/* 显示视频上方的文字内容 */}
                            <Box position="absolute" bottom="20%"  left="10%" color='#003680'>
                                <Typography fontSize={`${isMobile?'4rem':'9.6rem'}`}  lineHeight={2} fontWeight={800} fontFamily={'HC'} style={{ fontWeight: 'bold' }}>
                                    {
                                        video.header
                                    }
                                </Typography>
                                <Typography fontSize={`${isMobile?'3rem':'6rem'}`}  lineHeight={1}  fontFamily={'HS'}  >
                                    {video.description}
                                    <br/>
                                    {video.description2}
                                </Typography>
                                {/*<Button*/}
                                {/*    variant="outlined"*/}
                                {/*    color="primary"*/}

                                {/*    size="large"*/}

                                {/*    startIcon={*/}
                                {/*        <Box*/}
                                {/*            component="img"*/}
                                {/*            src="./icons/walttec/home-shopping-cart.png"*/}
                                {/*            alt="Shopping Cart Icon"*/}
                                {/*            sx={{ width: '2vw', height: '2vw' }} // 设置图标的大小*/}
                                {/*        />*/}
                                {/*    }*/}
                                {/*    style={{*/}
                                {/*        fontSize: '1.5vw',*/}
                                {/*        margin: '2vw',*/}

                                {/*        borderColor: 'white', // 设置边框颜色为白色*/}
                                {/*        color: 'white', // 设置文字颜色*/}

                                {/*    }}*/}
                                {/*    onClick={() => router.push(video.btnLink)}*/}

                                {/*>*/}
                                {/*    {video.btnText}*/}
                                {/*</Button>*/}
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default AboutUsTop;
