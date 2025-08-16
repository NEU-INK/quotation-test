import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import styles from './OurJourney.module.scss';
import {useDevice} from "../../../utils/deviceContext";

const OurJourney = () => {
    const { isMobile } = useDevice();

    const dataList = [
        // { year: 1950, text: 'walt was founded in 1950 by Mr. Walter L.', img: '/images/walt/home-products1.png' },
        { year: 1968, text: 'Built the first socks machine.', img: '/images/walt/home-products-1968.png' },
        // { year: 1971, text: '布局全球成为袜业大王', img: '/images/walt/home-products2.png' },
        // { year: 1977, text: '布局全球成为袜业大王', img: '/images/walt/home-products3.png' },
        // { year: 1998, text: '改革开放时期再次爆发，全面擦撒擦的是从', img: '/images/walt/home-products4.png' },
        // { year: 2008, text: '擦撒擦的是v但是v ，擦撒擦撒v', img: '/images/walt/home-products4.png' },
    ];

    const [currentCanvasLocation, setCurrentCanvasLocation] = useState(10);
    const [currentYearIndex, setCurrentYearIndex] = useState(0);

    const rulerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

/*
    useEffect(() => {
    const drawRuler = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = canvas.width || 1600;
        const height = canvas.height || 40;
        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = '#13357b';
        ctx.fillStyle = 'rgb(241,34,34)';
        const itemWidth = 10;
        const divider = 10;
        const startY = height;

        const minYear = 1890;
        const offset = -currentYearIndex * itemWidth;
        const numTicks = Math.ceil(width / itemWidth) + 1;

        for (let i = 0; i < numTicks; i++) {
            const x = i * itemWidth + offset;
            const year = minYear + Math.floor(x / itemWidth);

            if (x > 0 && x < width) {
                ctx.beginPath();
                ctx.moveTo(x, startY);
                if (year % divider === 0) {
                    ctx.lineTo(x, height - 24);
                    ctx.lineWidth = 2;
                } else {
                    ctx.lineTo(x, height - 15);
                    ctx.lineWidth = 1;
                }
                ctx.stroke();
            }
        }
        setCurrentCanvasLocation(Math.floor(currentCanvasLocation / itemWidth) + Math.floor(canvas.width / 2 / itemWidth));
    };

        drawRuler();
    }, [currentYearIndex]);
*/

    useEffect(() => {
        const drawRuler = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const width = canvas.width || 1600;
            const height = canvas.height || 40;
            ctx.clearRect(0, 0, width, height);

            ctx.strokeStyle = '#13357b';
            ctx.fillStyle = 'rgb(241,34,34)';
            const itemWidth = 10;
            const divider = 10;
            const startY = height;

            const minYear = 1890;
            const offset = -currentYearIndex * itemWidth;
            const numTicks = Math.ceil(width / itemWidth) + 1;

            for (let i = 0; i < numTicks; i++) {
                const x = i * itemWidth + offset;
                const year = minYear + Math.floor(x / itemWidth);

                if (x > 0 && x < width) {
                    ctx.beginPath();
                    ctx.moveTo(x, startY);
                    if (year % divider === 0) {
                        ctx.lineTo(x, height - 24);
                        ctx.lineWidth = 2;
                    } else {
                        ctx.lineTo(x, height - 15);
                        ctx.lineWidth = 1;
                    }
                    ctx.stroke();
                }
            }

            setCurrentCanvasLocation(Math.floor(currentCanvasLocation / itemWidth) + Math.floor(canvas.width / 2 / itemWidth));
        };

        drawRuler();
    }, [currentYearIndex, currentCanvasLocation]); // 将 currentCanvasLocation 添加为依赖

    const handleScroll = () => {
        if (rulerRef.current) {
            const scrollLeft = rulerRef.current.scrollLeft;
            const rulerWidth = rulerRef.current.scrollWidth;
            const containerWidth = rulerRef.current.clientWidth;
            const yearWidth = rulerWidth / dataList.length;
            const index = Math.max(0, Math.min(dataList.length - 1, Math.round((scrollLeft + (containerWidth / 2) - (yearWidth / 2)) / yearWidth)));
            setCurrentYearIndex(index);
        }
    };

    useEffect(() => {
        if (rulerRef.current) {
            const rulerWidth = rulerRef.current.scrollWidth;
            const containerWidth = rulerRef.current.clientWidth;
            const yearWidth = rulerWidth / dataList.length;
            const targetScrollLeft = (currentYearIndex * yearWidth) - (containerWidth / 2) + (yearWidth / 2);
            rulerRef.current.scrollLeft = Math.min(Math.max(targetScrollLeft, 0), rulerWidth - containerWidth);
        }
    }, [currentYearIndex, dataList.length]);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!rulerRef.current) return;

        rulerRef.current.style.cursor = 'grabbing';
        const startX = e.clientX;
        const startScrollLeft = rulerRef.current.scrollLeft;
        const onMouseMove = (e: MouseEvent) => {
        if (!rulerRef.current) return; // 检查是否为 null
            rulerRef.current.scrollLeft = startScrollLeft - (e.clientX - startX);
        };

        const onMouseUp = () => {
        if (!rulerRef.current) return; // 检查是否为 null
            rulerRef.current.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            triggerInertiaEffect();
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const triggerInertiaEffect = () => {
        if (!rulerRef.current) return;

        let lastScrollLeft = rulerRef.current.scrollLeft;
        // let lastTimestamp = performance.now();

        const inertia = (timestamp: number) => {
            console.log(timestamp)
        if (!rulerRef.current) return; // 检查是否为 null
            const scrollDelta = rulerRef.current.scrollLeft - lastScrollLeft;
            lastScrollLeft = rulerRef.current.scrollLeft;

            if (Math.abs(scrollDelta) < 0.5) return;

            rulerRef.current.scrollLeft += scrollDelta * 0.95;
            requestAnimationFrame(inertia);
        };

        requestAnimationFrame(inertia);
    };
   const isGD = false;
    return (
        <Box className={styles.aboutUs}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image
                    src="/images/walt/home-our-bg.png"
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
                        OUR JOURNEY
                    </Typography>
                </Box>

                <Box className={styles.timeLine}>
                    <Box className={styles.years}>
                        <Box className={styles.yearBox}>
                            <Typography
                                fontSize={`${isMobile?'3rem':'3.6rem'}`} fontWeight={800} fontFamily={'HS'} color={'#7790b5'}
                            >
                                {currentYearIndex === 0 ? '1950' : dataList[currentYearIndex - 1]?.year}
                            </Typography>
                            <Typography fontSize={`${isMobile?'4rem':'4.8rem'}`} fontWeight={800} fontFamily={'HS'} color={'#13357b'} className={styles.currentYear}>
                                {dataList[currentYearIndex]?.year}
                            </Typography>
                            <Typography
                                fontSize={`${isMobile?'3rem':'3.6rem'}`}  fontWeight={800} fontFamily={'HS'} color={'#7790b5'}>
                                {currentYearIndex === dataList.length - 1 ? '1971' : dataList[currentYearIndex + 1]?.year}
                            </Typography>
                        </Box>
                    </Box>

                    <Box className={styles.ruleBox}>
                        <span className={styles.rule_cursorTop}></span>
                        {isGD && (
                            <Box
                            className={styles.rulerContainer}
                            ref={rulerRef}
                            onScroll={handleScroll}
                            onMouseDown={handleMouseDown}
                        >
                            <canvas ref={canvasRef} width={`${isMobile?'768':'2020'}`} height={40} className={styles.canvas} />
                        </Box>
                        )}
                        <Box
                            className={styles.rulerContainer}
                            ref={rulerRef}
                        >
                            <canvas ref={canvasRef} width={`${isMobile?'1000':'2020'}`} height={40} className={styles.canvas} />
                        </Box>
                        <span className={styles.rule_cursorBottom}></span>
                    </Box>
                    <Box className={styles.imageAndText}>
                        <Box className={styles.imageAndTextBox}>
                            {/*<Image*/}
                            {/*    src={dataList[currentYearIndex].img}*/}
                            {/*    alt={dataList[currentYearIndex].text}*/}
                            {/*    width={400}*/}
                            {/*    height={400}*/}

                            {/*    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' , overflow: 'hidden'}}*/}
                            {/*/>*/}
                            <img
                                src={dataList[currentYearIndex].img}
                                alt={dataList[currentYearIndex].text}


                                style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' , overflow: 'hidden'}}
                            />
                            <Typography  fontSize={`${isMobile?'2.6rem':'2.6rem'}`}  sx={{  lineHeight: 1, fontFamily: 'HS', textAlign: 'left', width: '100%' }} color={'#13357b'} style={{margin:'1rem 0 0 0'}}>
                                {dataList[currentYearIndex].text}
                            </Typography>
                        </Box>

                    </Box>


                </Box>
            </Box>
        </Box>
    );
};

export default OurJourney;


/*


import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import styles from './OurJourney.module.scss';

const OurJourney = () => {
    const dataList = [

        { year: 1950, text: 'walt was founded in 1950 by Mr. Walter L.', img: '/images/walt/home-products1.png' },
        { year: 1968, text: '从台湾搬迁至浙江', img: '/images/walt/home-products1.png' },
        { year: 1971, text: '布局全球成为袜业大王', img: '/images/walt/home-products2.png' },
        { year: 1977, text: '布局全球成为袜业大王', img: '/images/walt/home-products3.png' },
        { year: 1998, text: '改革开放时期再次爆发，全面擦撒擦的是从', img: '/images/walt/home-products4.png' },
        { year: 2008, text: '擦撒擦的是v但是v ，擦撒擦撒v', img: '/images/walt/home-products4.png' },

    ];
    // 控制canvas上标尺的位置
    const [currentCanvasLocation, setCurrentCanvasLocation] = useState(10);

    // 控制当前展示的年份索引。
    const [currentYearIndex, setCurrentYearIndex] = useState(0);

    const rulerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        drawRuler();

    }, [currentYearIndex]);


    // canvas绘图，根据 currentCanvasLocation 更新标尺的位置。
    const drawRuler = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 获取画布宽度和高度
        const width = canvas.width||1600;
        const height = canvas.height||40;

        // 清除画布
        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = '#13357b';
        ctx.fillStyle = 'rgb(241,34,34)';

        const itemWidth = 10; // 每个刻度的宽度
        const divider = 10; // 每个大刻度的间隔
        const startY = height; // 刻度线从画布的底部开始

    /!*    const minYear = Math.min(...dataList.map(d => d.year));
        const maxYear = Math.max(...dataList.map(d => d.year));*!/
        const minYear = 1890;
        // const maxYear = 2050;
        // const totalYears = maxYear - minYear;

        // 计算偏移量
        const offset = -currentYearIndex * itemWidth;
        const numTicks = Math.ceil(width / itemWidth) + 1;

        for (let i = 0; i < numTicks; i++) {
            const x = i * itemWidth + offset;
            const year = minYear + Math.floor(x / itemWidth);

            if (x > 0 && x < width) {
                ctx.beginPath();
                ctx.moveTo(x, startY);

                if (year % divider === 0) {
                    // ctx.fillText(year.toString(), x,height-28);
                    ctx.lineTo(x, height - 24);
                    ctx.lineWidth = 2; // 粗线
                } else {
                    ctx.lineTo(x, height - 15);
                    ctx.lineWidth = 1; // 细线
                }
                ctx.stroke();
            }
        }
        setCurrentCanvasLocation(Math.floor(currentCanvasLocation / itemWidth) + Math.floor(canvas.width / 2 / itemWidth));
    };

    // // 用于处理时间轴滚动事件，更新当前的年份索引。

    const handleScroll = () => {
        if (rulerRef.current) {
            const scrollLeft = rulerRef.current.scrollLeft;
            const rulerWidth = rulerRef.current.scrollWidth;
            const containerWidth = rulerRef.current.clientWidth;
            const yearWidth = rulerWidth / dataList.length;
            // const minYear = Math.min(...dataList.map(d => d.year));
            // const maxYear = Math.max(...dataList.map(d => d.year));
            const index = Math.max(0, Math.min(dataList.length - 1, Math.round((scrollLeft + (containerWidth / 2) - (yearWidth / 2)) / yearWidth)));
            setCurrentYearIndex(index);
        }
    };

    useEffect(() => {
        if (rulerRef.current) {
            const rulerWidth = rulerRef.current.scrollWidth;
            const containerWidth = rulerRef.current.clientWidth;
            const yearWidth = rulerWidth / dataList.length;
            // const minYear = Math.min(...dataList.map(d => d.year));
            // const maxYear = Math.max(...dataList.map(d => d.year));
            const targetScrollLeft = (currentYearIndex * yearWidth) - (containerWidth / 2) + (yearWidth / 2);

            // 限制滚动范围
            rulerRef.current.scrollLeft = Math.min(
                Math.max(targetScrollLeft, 0),
                rulerWidth - containerWidth
            );
        }
    }, [currentYearIndex, dataList.length]);


    // 处理拖拽和惯性滚动效果，使用户在拖动时间轴时体验更为平滑。
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!rulerRef.current) return;

        rulerRef.current.style.cursor = 'grabbing';
        const startX = e.clientX;
        const startScrollLeft = rulerRef.current.scrollLeft;
        const onMouseMove = (e: MouseEvent) => {
            rulerRef.current!.scrollLeft = startScrollLeft - (e.clientX - startX);
        };

        const onMouseUp = () => {
            rulerRef.current!.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            triggerInertiaEffect();
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    // 处理拖拽和惯性滚动效果，使用户在拖动时间轴时体验更为平滑。
    const triggerInertiaEffect = () => {
        if (!rulerRef.current) return;

        let lastScrollLeft = rulerRef.current.scrollLeft;
        let lastTimestamp = performance.now();

        const inertia = (timestamp: number) => {
            const deltaTime = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            const scrollDelta = rulerRef.current!.scrollLeft - lastScrollLeft;
            lastScrollLeft = rulerRef.current!.scrollLeft;

            if (Math.abs(scrollDelta) < 0.5) return;

            rulerRef.current!.scrollLeft += scrollDelta * 0.95;
            requestAnimationFrame(inertia);
        };

        requestAnimationFrame(inertia);
    };
    return (
        <Box className={styles.aboutUs}>
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image
                    src="/images/walt/home-our-bg.png"
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
                    <Typography   fontSize={'5.4vw'} fontWeight={800} fontFamily={'HC'} >
                        OUR JOURNEY
                    </Typography>
                </Box>

                <Box className={styles.timeLine}>
                    <Box className={styles.years}>
                        <Box className={styles.yearBox}>
                            <Typography
                                fontSize={'1.5vw'} fontWeight={800} fontFamily={'HS'} color={'#7790b5'}

                            >
                           {currentYearIndex===0?'start':dataList[currentYearIndex - 1]?.year }
                            </Typography>
                            <Typography fontSize={'2vw'} fontWeight={800} fontFamily={'HS'} color={'#13357b'} className={styles.currentYear}>
                                {dataList[currentYearIndex]?.year}
                            </Typography>
                            <Typography
                                fontSize={'1.5vw'} fontWeight={800} fontFamily={'HS'} color={'#7790b5'} >
                                {currentYearIndex===dataList.length-1?'end':dataList[currentYearIndex + 1]?.year}
                            </Typography>
                        </Box>
                    </Box>

                    <Box className={styles.ruleBox}>
                        <span className={styles.rule_cursorTop}></span>
                        <Box
                            className={styles.rulerContainer}
                            ref={rulerRef}
                            onScroll={handleScroll}
                            onMouseDown={handleMouseDown}
                        >
                            <canvas ref={canvasRef} width={4000} height={40} className={styles.canvas} />
                        </Box>
                        <span className={styles.rule_cursorBottom}></span>

                    </Box>
                    <Box className={styles.imageAndText}>
                        <Box className={styles.imageAndTextBox}>
                            <Image
                                src={dataList[currentYearIndex].img}
                                alt={dataList[currentYearIndex].text}
                                width={400}
                                height={200}
                                style={{maxWidth: '100%', maxHeight: '100%',height:'auto', objectFit: 'contain'}}
                            />
                            <Typography sx={{ fontSize: '1.2vw',lineHeight:1,fontFamily:'HS',textAlign:'left' ,width:'100%'}} color={'#13357b'}>
                                {dataList[currentYearIndex].text}
                            </Typography>
                        </Box>

                    </Box>


                </Box>
            </Box>
        </Box>
    );
};

export default OurJourney;
*/

