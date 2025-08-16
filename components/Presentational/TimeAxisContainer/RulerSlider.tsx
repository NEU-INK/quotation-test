import React, { useRef, useState, useEffect } from 'react';
import styles from './RulerSlider.module.scss';
{/*拨盘效果*/}
// <RulerSlider/>
const RulerSlider: React.FC = () => {
    const [height, setHeight] = useState<number>(170);
    const [year, setYear] = useState<number>(1968);

    const heightRef = useRef<HTMLDivElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);

    // 初始化设置 scrollLeft
    useEffect(() => {
        // 将 ref.current 的值保存到局部变量中
        const heightElement = heightRef.current;
        const yearElement = yearRef.current;

        // 对 heightRef 的操作
        if (heightElement) {
            heightElement.scrollLeft = 150; // 初始位置
            heightElement.addEventListener('scroll', handleHeightScroll, { passive: true });
        }

        // 对 yearRef 的操作
        if (yearElement) {
            yearElement.scrollLeft = 1968; // 初始位置
            yearElement.addEventListener('scroll', handleYearScroll, { passive: true });
        }

        // 清理函数，使用局部变量
        return () => {
            if (heightElement) {
                heightElement.removeEventListener('scroll', handleHeightScroll);
            }
            if (yearElement) {
                yearElement.removeEventListener('scroll', handleYearScroll);
            }
        };
    }, []);


    const handleHeightScroll = () => {
        if (heightRef.current) {
            const scrollLeft = heightRef.current.scrollLeft;
            const maxScroll = heightRef.current.scrollWidth - heightRef.current.clientWidth;
            const newHeight = Math.round((scrollLeft / maxScroll) * 300 + 30); // 30是最低值
            // console.log(`Height Scroll - scrollLeft: ${scrollLeft}, newHeight: ${newHeight}`);
            setHeight(newHeight < 30 ? 30 : newHeight);
        }
    };
    const handleYearScroll = () => {
        // console.log('handleYearScroll(')
        if (yearRef.current) {
            const scrollLeft = yearRef.current.scrollLeft;
            const maxScroll = yearRef.current.scrollWidth - yearRef.current.clientWidth;
            const newYear = Math.round((scrollLeft / maxScroll) * 300 + 30); // 30是最低值
            // console.log(`newYear Scroll - scrollLeft: ${scrollLeft}, newHeight: ${newYear}`);
            setYear(newYear < 30 ? 30 : newYear);
        }
    };


    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        // console.log('handleWeightScroll(',yearRef)
        if (!yearRef.current) return;

        yearRef.current.style.cursor = 'grabbing';
        const startX = e.clientX;
        const startScrollLeft = yearRef.current.scrollLeft;
        const onMouseMove = (e: MouseEvent) => {
            if (!yearRef.current) return; // 检查是否为 null
            yearRef.current.scrollLeft = startScrollLeft - (e.clientX - startX);
        };

        const onMouseUp = () => {
            if (!yearRef.current) return; // 检查是否为 null
            yearRef.current.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            // document.removeEventListener('mouseup', onMouseUp);
            // triggerInertiaEffect();
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    const handleMouseDownSX = (e: React.MouseEvent<HTMLDivElement>) => {
        // console.log('handleWeightScroll(',heightRef)
        if (!heightRef.current) return;

        heightRef.current.style.cursor = 'grabbing';
        const startX = e.clientX;
        const startScrollLeft = heightRef.current.scrollLeft;
        const onMouseMove = (e: MouseEvent) => {
            if (!heightRef.current) return; // 检查是否为 null
            heightRef.current.scrollLeft = startScrollLeft - (e.clientX - startX);
        };

        const onMouseUp = () => {
            if (!heightRef.current) return; // 检查是否为 null
            heightRef.current.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            // document.removeEventListener('mouseup', onMouseUp);
            // triggerInertiaEffect();
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    return (
        <div className={styles.rulerSlider}>
            <div className={styles.title}>你的身高</div>
            <div className={styles.boxSX}>
                <div className={styles.textSX}>{height} cm</div>
                <div onMouseDown={handleMouseDownSX} className={styles.outBoxSX} ref={heightRef}>
                    <div className={styles.liningBoxSX}></div>
                </div>
                <div className={styles.vertical}></div>
            </div>
            <div className={styles.title}>竖向</div>
            <div className={styles.box}>
                <div className={styles.text}>{year} 年</div>
                <div className={styles.outBox} ref={yearRef}  onMouseDown={handleMouseDown}>
                    {/*1232132131434343253465asdsadsadsafsdfdsfd*/}
                    {/*<canvas ref={canvasRef} width={`4000`} height={40}  className={styles.canvas}/>*/}
                    <div className={styles.liningBox}></div>
                </div>
                <div className={styles.vertical}></div>
            </div>


        </div>
    );
};

export default RulerSlider;
