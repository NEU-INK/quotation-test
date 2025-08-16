import React, { useEffect, useRef, useState } from 'react';
import styles from './RuleComponent.module.scss';
const RuleComponent: React.FC = () => {
    const [ruleNumber, setRuleNumber] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [currentCanvasLocation, setCurrentCanvasLocation] = useState(10);
    const [mouseStartX, setMouseStartX] = useState(0);
    const [startValue, setStartValue] = useState(0);
    console.log(startValue)
    const [lastScrollDistance, setLastScrollDistance] = useState(0);
    const [enableInertiaMove, setEnableInertiaMove] = useState(true);
    const [isDragging, setIsDragging] = useState(false);

    const itemWidth = 10;
    const divider = 10;
    const startY = 0;
    const min = 0;
    const max = 100;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = canvas.parentElement?.clientWidth || 300;
        canvas.height = canvas.parentElement?.clientHeight || 200;

        const draw = () => {
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#000000';
            let offset = 0;

            const str = currentCanvasLocation.toString();
            const lastNumber = Number(str.charAt(str.length - 1));

            if (currentCanvasLocation > 0) {
                offset = itemWidth - lastNumber;
            } else if (currentCanvasLocation < 0) {
                offset = lastNumber || itemWidth;
            }

            for (let i = offset; i < canvas.width; i += itemWidth) {
                ctx.beginPath();
                ctx.moveTo(i, startY);
                const scaleNumber = i + currentCanvasLocation;
                if (scaleNumber % (divider * itemWidth) === 0) {
                    ctx.fillText(`${scaleNumber / itemWidth}`, i, 45);
                    ctx.lineTo(i, 30);
                } else {
                    ctx.lineTo(i, 10);
                }
                ctx.stroke();
            }

            setRuleNumber(currentCanvasLocation);
        };

        draw();
    }, [currentCanvasLocation]);
    // 记录鼠标按下的初始位置，设置拖动状态。
    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        setMouseStartX(e.clientX);
        setStartValue(currentCanvasLocation);
        setEnableInertiaMove(false);
        setIsDragging(true);
    };
    // 当鼠标拖动时，计算滑动距离，并更新 currentCanvasLocation。
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDragging) return;
        const mouseClientX = e.clientX;
        const moveX = Math.floor(mouseStartX - mouseClientX);
        setLastScrollDistance(mouseClientX - mouseStartX);
        setMouseStartX(mouseClientX);
        setCurrentCanvasLocation(prev => {
            const newLocation = prev + moveX;
            // console.log(newLocation)

            if (canScroll(newLocation) !== 0) return prev;
            return newLocation;
            // return prev;
        });
    };
    // 结束拖动，启动惯性滑动。
    const handleMouseUp = () => {
        setIsDragging(false);
        setEnableInertiaMove(true);
        ease(lastScrollDistance);
    };

    const ease = (target: number) => {
        if (!enableInertiaMove) return;

        if (Math.abs(target) < 1) return;

        target *= 0.9;
        setCurrentCanvasLocation(prev => {
            const newLocation = prev + Math.floor(target);
            if (canScroll(newLocation) !== 0) return prev;
            return newLocation;
        });

        requestAnimationFrame(() => ease(target));
    };

    const canScroll = (x: number): number => {
        const currentNumber = Math.floor(x / itemWidth);
        if (currentNumber <= min) {
            return -1;
        } else if (currentNumber >= max) {
            return 1;
        } else {
            return 0;
        }
    };

    return (
        <div className={styles.home}>
            {ruleNumber}
            <div id="rule-container" className={styles.rule_container}>
                <span className={styles.rule_cursor}></span>
                <canvas
                    ref={canvasRef}
                    width="100"
                    height="200"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={() => { if (isDragging) handleMouseUp(); }}
                />
            </div>
        </div>

    );
};

export default RuleComponent;
