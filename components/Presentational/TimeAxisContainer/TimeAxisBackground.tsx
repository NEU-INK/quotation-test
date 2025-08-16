import React, { useRef, useEffect } from 'react';

interface TimeAxisBackgroundProps {
    width: number;
    height: number;
    timeAxisColor: string;
    timeAxisEndColor: string;
}

const TimeAxisBackground: React.FC<TimeAxisBackgroundProps> = ({
                                                                   width,
                                                                   height,
                                                                   timeAxisColor,
                                                                   timeAxisEndColor,
                                                               }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 设置画布大小
        canvas.width = width;
        canvas.height = height;

        // 保存当前状态
        ctx.save();

        // 创建渐变
        const grd = ctx.createLinearGradient(-width / 2, 0, width / 2, 0);
        grd.addColorStop(0, timeAxisEndColor);
        grd.addColorStop(0.5, timeAxisColor);
        grd.addColorStop(1, timeAxisEndColor);
        ctx.strokeStyle = grd;

        // 移动坐标轴到中心点
        ctx.translate(width / 2, 0);

        // 绘制弧线
        ctx.beginPath();
        ctx.arc(0, 1800, 1800, 263.5 * Math.PI / 180, 276.5 * Math.PI / 180);
        ctx.stroke();
        ctx.closePath();

        // 恢复状态
        ctx.restore();
    }, [width, height, timeAxisColor, timeAxisEndColor]);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default TimeAxisBackground;
