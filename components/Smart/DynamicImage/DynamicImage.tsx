// 加载云端图片组件
import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface DynamicImageProps extends Omit<ImageProps, 'src'> {
    imageName: string; // 图片名称
    placeholderSrc?: string; // 可选占位图
    errorSrc?: string; // 可选错误图
    showSpinner?: boolean; // 是否显示加载 Spinner
}

const DynamicImage: React.FC<DynamicImageProps> = ({
                                                       imageName,
                                                       placeholderSrc = '/images/walt/404.png', // 默认占位图
                                                       errorSrc = '/images/walt/home-map-bg.png', // 默认错误图
                                                       showSpinner = true, // 默认显示加载 Spinner
                                                       ...imageProps
                                                   }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null); // 初始为空
    const [hasError, setHasError] = useState(false); // 错误状态
    const [isLoading, setIsLoading] = useState(true); // 加载状态

    useEffect(() => {
        const fetchImagePath = async () => {
            // console.log(`Fetching image path for---: ${imageName}`)
            try {
                setHasError(false);
                setIsLoading(true); // 开始加载
                const response = await fetch(`/api/image-path?imageName=${imageName}`);
                // console.log(`Fetching image path for---: ${imageName} response: ${response.status}`)
                if (response.ok) {
                    const { imagePath } = await response.json();
                    setImageSrc(imagePath);
                } else {
                    console.error(`Failed to load image: ${imageName}`);
                    setHasError(true);
                }
            } catch (error) {
                console.error('Error fetching image path:', error);
                setHasError(true);
            } finally {
                setIsLoading(false); // 加载结束
            }
        };

        fetchImagePath();
    }, [imageName]);

    // 显示错误图
    if (hasError) {
        return (
            <Image
                src={errorSrc} // 错误图
              alt='loading image'
            />
        // alt={imageProps.alt || 'Error loading image'} // 避免重复传递 alt
        // {...imageProps}
        );
    }

    // 加载中的占位内容
    if (isLoading && !imageSrc) {
        return (
            <div style={{ position: 'relative', width: imageProps.width, height: imageProps.height }}>
                {showSpinner ? (
                    <div className="spinner" style={spinnerStyle}>
                        <div style={spinnerInnerStyle}></div>
                    </div>
                ) : (
                    <Image
                        src={placeholderSrc} // 占位图
                        alt='Loading image'

                    />
                //     alt={imageProps.alt || 'Loading image'} // 避免重复传递 alt
                //
                // {...imageProps}
                )}
            </div>
        );
    }

    // 显示加载完成的图片
    return (
        <div></div>
        // <Image
        //     src={imageSrc as string} // 动态加载后的路径
        //     onError={() => setHasError(true)} // 捕捉运行时错误
        //     {...imageProps}
        // />
    );
};

export default DynamicImage;

// 内联 Spinner 样式
const spinnerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
};

const spinnerInnerStyle: React.CSSProperties = {
    width: '30px',
    height: '30px',
    border: '4px solid #f3f3f3',
    borderTop: '4px solid #3498db',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
};

// 动态注入 CSS 动画
if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleElement);
}
