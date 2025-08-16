import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import styles from './AboutUsVisionMission.module.scss';
import {useDevice} from "../../../utils/deviceContext";

const data = [
    {
        img:'/images/about-us/about-us-vision.png',
        title:'VISION',
        path:'/',
        text:'TO BE A GUIDING LIGHT TOWER FOR THE WORLD. ',
        type:1

    },
    {
        img:'/images/about-us/about-us-mission.png',

        title:'MISSION',
        path:'/',
        text:'TO USE TECHNOLOGY TO MAKE A POSITIVE IMPACT ON HUMANITY. ',
        type: 2

    }]
const valuesData =[
    {
    img:'/images/about-us/about-us-values-3.png',
    title:'SUSTAINABILITY.',
},
    {
        img:'/images/about-us/about-us-values-1.png',
        title:'RESPONSIBILITY.',
    },
    {
        img:'/images/about-us/about-us-values-2.png',
        title:'QUICK RESPONSE.',
    },

    {
        img:'/images/about-us/about-us-values-4.png',
        title:'INNOVATION.',
    },
]

const AboutUsVisionMission: React.FC = () => {
    const { isMobile } = useDevice();

    return (
        <Box className={styles.capacity}>
            <Box className={styles.cardsContainer}>
                {data.map((item, index) => (
                    <Box key={index} className={styles.card} display="flex" flexDirection={item.type === 2 ? 'row-reverse' : 'row'}>
                            <Image
                                src={item.img}
                                alt={`form-image-${index + 1}`}
                                width={2000}
                                height={2000}
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                            <Box  className={styles.cardRight} >
                                <Typography fontSize={`${isMobile?'3rem':'6rem'}`}  sx={{  fontWeight: 'Bold',lineHeight:2,fontFamily:'HS', }} align={item.type === 2 ? 'right' : 'left'}>
                                    {item.title}
                                </Typography>
                                <Typography fontSize={`${isMobile?'2rem':'3.6rem'}`}  sx={{ lineHeight:1,fontFamily:'HS', }} align={item.type === 2 ? 'right' : 'left'}>
                                    {item.text}
                                </Typography>
                            </Box>
                    </Box>
                ))}
            </Box>
            <Box className={styles.values}>
                <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image
                        src="/images/about-us/about-us-values-bg.png"
                        alt="Background"
                        objectFit="cover"
                        quality={100}
                        priority
                        width={3000}
                        height={3000}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
                <Box className={styles.valuesContent}>
                    <Typography fontSize={`${isMobile?'3rem':'6rem'}`}   textAlign={"center"} fontFamily={'HC'} fontWeight={700} >
                        VALUES
                    </Typography>
                    <Box className={styles.valuesImg}>
                        {valuesData.map((item, index) => (
                            <Box key={index} className={styles.valuesImgCard}>
                                <Box className={styles.imageWrapper}>
                                    <Image
                                        src={item.img}
                                        alt={`form-image-${index + 1}`}
                                        width={220}
                                        height={220}
                                        style={{ maxWidth: '50%', height: 'auto' }}
                                    />
                                </Box>
                                <Box className={styles.valuesImgText}>
                                    <Typography fontSize={`${isMobile?'1.8rem':'3.6rem'}`}   sx={{ lineHeight: 1.4, fontFamily: 'HS', textAlign: 'center' }}>
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>

                </Box>

            </Box>
        </Box>
    );
}

export default AboutUsVisionMission;
