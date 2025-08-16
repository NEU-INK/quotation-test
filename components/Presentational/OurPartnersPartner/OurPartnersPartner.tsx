import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import { useDevice } from "../../../utils/deviceContext";
import styles from './OurPartnersPartner.module.scss';

interface Partner {
    id: number;
    name: string;
    data: {
        imageSrc: string;
        title: string;
        description: string;
        description2: string;
        btnText: string;
        link: string;
    }[];
}

interface OurPartnersBoxProps {
    partnersList: Partner[];
}

const OurPartnersPartner: React.FC<OurPartnersBoxProps> = ({ partnersList }) => {
    const { isMobile } = useDevice();
    const sliderRef = useRef<any>(null); // Ref for controlling the slider
    const [selectedPartner, setSelectedPartner] = useState(0); // Track the selected partner

    const handleMouseEnter = (index: number) => {
        setSelectedPartner(index);
        sliderRef.current.slickGoTo(index); // Jump to the corresponding slide when hovering
    };

    const handleImageClick = (index: number) => {
        setSelectedPartner(index);
        sliderRef.current.slickGoTo(index);
    };

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
            <div
                className={className}
                style={{ ...style, display: "inline-block", background: "transparent" }}
                onClick={onClick}
            >
                <img alt={''} src={'/images/silder-arrow-left.png'} style={{ width: '2rem', height: '3rem' }} />
            </div>
        );
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,

        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current: number, next: number) => setSelectedPartner(next), // Update selectedPartner when the slider changes
    };

    return (
        <Box className={styles.ourPartnersBox}>
            <Box display="flex" justifyContent="space-around" mb={4} padding={'0 15%'}>
                {partnersList.map((partner, index) => (
                    <Typography
                        fontSize={`${isMobile ? '2.2rem' : '3.6rem'}`}
                        key={partner.id}
                        className={`${styles.partnerTitle}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onClick={() => handleImageClick(index)}
                        style={{
                            cursor: 'pointer',
                            color: selectedPartner === index ? '#ADD8E6' : 'var(--primary-blue)',
                        }}
                    >
                        {partner.name}
                        <br />
                        0{partner.id}
                    </Typography>
                ))}
            </Box>

            <Box className={styles.ourPartnersSlider}>
                <Box className={styles.ourPartnersSliderBox}>
                    <Slider ref={sliderRef} {...settings}>
                        {partnersList.map((partner, index) => (
                            <Box key={partner.id} className={styles.partnerItem}>
                                <Box className={styles.imageFrame}>
                                    <Image
                                        src={partner.data[0].imageSrc}
                                        alt={`Partner-${index}`}
                                        width={2000}
                                        height={2000}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </Box>
                                <Box className={styles.textContent}>
                                    <Typography
                                        fontSize={`${isMobile ? '3rem' : '4.8rem'}`}
                                        fontWeight={800}
                                        className={styles.itemTitle}
                                    >
                                        {partner.data[0].title}
                                    </Typography>
                                    <Typography
                                        fontSize={`${isMobile ? '3rem' : '3.6rem'}`}
                                        fontWeight={800}
                                        className={styles.itemLink}
                                    >
                                        {partner.data[0].link}
                                    </Typography>
                                    <Typography
                                        fontSize={`${isMobile ? '2rem' : '2.2rem'}`}
                                        className={styles.itemDescription}
                                    >
                                        {partner.data[0].description}
                                        <br />
                                        {partner.data[0].description2}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
};

export default OurPartnersPartner;
