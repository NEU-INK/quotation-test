import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import styles from './PartnersCustomers.module.scss';
import Slider from "react-slick";
import {useDevice} from "../../../utils/deviceContext";

const logoList = [
    {
        id:1,
        img:[
            {
                path: '/images/walt/logo/logo-01.png',
            },
            {
                path: '/images/walt/logo/logo-02.png',

            },
            {
                path: '/images/walt/logo/logo-03.png',

            },
            {
                path: '/images/walt/logo/logo-04.png',

            },
            {
                path: '/images/walt/logo/logo-05.png',

            },
            {
                path: '/images/walt/logo/logo-06.png',

            },
            {
                path: '/images/walt/logo/logo-07.png',
            },
            {
                path: '/images/walt/logo/logo-08.png',
            },
            {
                path: '/images/walt/logo/logo-09.png',
            },

            {
                path: '/images/walt/logo/logo-10.png',
            },

            {
                path: '/images/walt/logo/logo-11.png',
            },

            {
                path: '/images/walt/logo/logo-12.png',
            },

            {
                path: '/images/walt/logo/logo-13.png',
            },

            {
                path: '/images/walt/logo/logo-14.png',
            },
            {
                path: '/images/walt/logo/logo-15.png',
            },
            {
                path: '/images/walt/logo/logo-16.png',
            },
            {
                path: '/images/walt/logo/logo-17.png',
            },
            {
                path: '/images/walt/logo/logo-18.png',
            },
            {
                path: '/images/walt/logo/logo-19.png',
            },
            {
                path: '/images/walt/logo/logo-20.png',
            },
            {
                path: '/images/walt/logo/logo-21.png',
            },
            {
                path: '/images/walt/logo/logo-22.png',
            },
            {
                path: '/images/walt/logo/logo-23.png',
            },
            {
                path: '/images/walt/logo/logo-24.png',
            },
        ]
    },
    {
        id:2,
        img:[
            {
                path: '/images/walt/logo/logo-25.png',
            },
            {
                path: '/images/walt/logo/logo-26.png',
            },
            {
                path: '/images/walt/logo/logo-27.png',
            },
            {
                path: '/images/walt/logo/logo-28.png',
            },
            {
                path: '/images/walt/logo/logo-29.png',
            },
            {
                path: '/images/walt/logo/logo-30.png',
            },
            {
                path: '/images/walt/logo/logo-31.png',
            },
            {
                path: '/images/walt/logo/logo-32.png',
            },
            {
                path: '/images/walt/logo/logo-33.png',
            },
            {
                path: '/images/walt/logo/logo-34.png',
            },
            {
                path: '/images/walt/logo/logo-35.png',
            },
            {
                path: '/images/walt/logo/logo-36.png',
            },
            {
                path: '/images/walt/logo/logo-37.png',
            },
            {
                path: '/images/walt/logo/logo-38.png',
            },
            {
                path: '/images/walt/logo/logo-39.png',
            },
            {
                path: '/images/walt/logo/logo-40.png',
            },
            {
                path: '/images/walt/logo/logo-05.png',
            },
            {
                path: '/images/walt/logo/logo-08.png',
            },
            {
                path: '/images/walt/logo/logo-13.png',
            },
            {
                path: '/images/walt/logo/logo-01.png',
            },
            {
                path: '/images/walt/logo/logo-06.png',
            },
            {
                path: '/images/walt/logo/logo-03.png',
            },
            {
                path: '/images/walt/logo/logo-04.png',
            },
            {
                path: '/images/walt/logo/logo-09.png',
            }
        ]
    }
]


function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "inline-block", background: "transparent" }}
            onClick={onClick}
        >
            <img alt={''} src={'/images/silder-arrow-right.png'} style={{ width: '2rem', height: '3rem' }} />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        // "transparent"
        <div
            className={className}
            style={{ ...style, display: "inline-block", background:'transparent'  }}
            onClick={onClick}
        >
            <img alt={''} src={'/images/silder-arrow-left.png'} style={{ width: '2rem', height: '3rem' }} />
        </div>
    );
}
const PartnersCustomers: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const { isMobile } = useDevice();

    return (
        <Box className={styles.partnersCustomers} >
            <Box className={styles.top}>
                <Typography lineHeight={1} fontSize={`${isMobile?'3.2rem':'4.8rem'}`}  fontWeight={800} fontFamily={'HC'}>
                    OUR CREDIBILITY STEMS FROM <br />OUR PARTNERS AND CUSTOMERS.
                </Typography>
            </Box>
            <Box className={styles.cardsContainer}>
                <Slider {...settings} className={styles.slider}>
                    {logoList.map((item, index) => (
                        <Box className={styles.logoBox} key={index}>
                            {item.img.map((logo, key) => (
                                <Box className={styles.logoItem} key={key}>
                                    <Image src={logo.path} alt={`logo-${key}`} layout="responsive" width={80} height={80} style={{width:'100%',height:"auto"}}/>
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
}

export default PartnersCustomers;
