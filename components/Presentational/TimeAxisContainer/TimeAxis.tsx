import React, { useEffect, useRef } from 'react';

// 定义每个时间轴项的类型
interface TimeAxisItem {
    label: string;
    left: number;
    top: number;
    opacity: number;
    rotation: number; // 用角度来表示旋转
    color: string;
    textShadow: string;
}

// `positionInfo` 数组包含了每个时间轴节点的样式和文本
const positionInfo: TimeAxisItem[] = [
    { label: 'Event 1', left: 20, top: 30, opacity: 0.5, rotation: -4, color: '#494f5a', textShadow: '1px 1.5px 0.5px #494f5a' },
    { label: 'Event 2', left: 40, top: 50, opacity: 1, rotation: -3, color: '#494f5a', textShadow: '1px 1.5px 0.5px #494f5a' },
    { label: 'Event 3', left: 60, top: 70, opacity: 1, rotation: -1.5, color: '#494f5a', textShadow: '0.5px 1.5px 0.5px #494f5a' },
    { label: 'Event 4', left: 80, top: 90, opacity: 1, rotation: 0, color: '#e0fffe', textShadow: '0px 1.5px 0px #e0fffe' },
    { label: 'Event 5', left: 100, top: 110, opacity: 1, rotation: 1.5, color: '#494f5a', textShadow: '-0.5px 1.5px 0.5px #494f5a' },
    { label: 'Event 6', left: 120, top: 130, opacity: 1, rotation: 3, color: '#494f5a', textShadow: '-1px 1.5px 0.5px #494f5a' },
    { label: 'Event 7', left: 140, top: 150, opacity: 0, rotation: 4, color: '#494f5a', textShadow: '-1px 1.5px 0.5px #494f5a' },
];

const TimeAxisBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // 清空画布
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                positionInfo.forEach((item) => {
                    drawLabel(ctx, item);
                });
            }
        }
    }, []);

    // 绘制文本标签
    const drawLabel = (
        ctx: CanvasRenderingContext2D,
        { label, left, top, opacity, rotation, color, textShadow }: TimeAxisItem
    ) => {
        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.font = '16px Arial';
        ctx.fillStyle = color;

        // 设置文本阴影
        const [xShadow, yShadow, blur, shadowColor] = textShadow.split(' ');
        ctx.shadowOffsetX = parseFloat(xShadow);
        ctx.shadowOffsetY = parseFloat(yShadow);
        ctx.shadowBlur = parseFloat(blur);
        ctx.shadowColor = shadowColor;

        // 设置文本旋转和位置
        ctx.translate(left, top);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.fillText(label, 0, 0);

        // 恢复到上一次保存的状态
        ctx.restore();
    };

    return (
        <div style={{ width: '100%', height: '200px', position: 'relative', backgroundColor: '#f4f4f4' }}>
            <canvas ref={canvasRef} width={500} height={200} />
        </div>
    );
};

export default TimeAxisBackground;
