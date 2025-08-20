import React, { MouseEventHandler, useState } from 'react'
import styles from './WaltButton.module.scss' // 引入 SCSS 模块

interface ButtonProps {
  text: string // 按钮文字
  icon?: string | JSX.Element // 默认图标，支持图片路径或 react-icons 图标
  iconHover?: string | JSX.Element // 鼠标悬停时的图标
  iconActive?: string | JSX.Element // 鼠标点击时的图标
  iconPosition?: 'left' | 'right' // 图标位置，默认为左边
  onClick?: MouseEventHandler<HTMLButtonElement> // 点击事件（非必传）
  href?: string // 路径跳转（非必传，优先级高于 onClick）
  backgroundColor?: string // 背景颜色
  borderColor?: string // 边框颜色
  textColor?: string // 文字颜色
  hoverBackgroundColor?: string // 鼠标悬停时的背景色
  hoverTextColor?: string // 鼠标悬停时的文字颜色
  hoverBorderColor?: string // 鼠标悬停时的边框颜色
  activeBackgroundColor?: string // 点击时的背景色
  activeTextColor?: string // 点击时的文字颜色
  activeBorderColor?: string // 点击时的边框颜色
  disabled?: boolean // 是否禁用按钮
  style?: React.CSSProperties // 自定义样式
}

const WaltButton: React.FC<ButtonProps> = ({
  text,
  icon,
  iconHover,
  iconActive,
  iconPosition = 'left',
  onClick,
  href,
  backgroundColor = 'transparent',
  borderColor = '#0070f3',
  textColor = '#0070f3',
  hoverBackgroundColor = '#0070f3',
  hoverTextColor = '#fff',
  hoverBorderColor = '#005bb5',
  activeBackgroundColor = '#005bb5',
  activeTextColor = '#fff',
  activeBorderColor = '#004080',
  disabled = false,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const renderIcon = () => {
    // 根据当前状态返回不同的图标
    if (isActive && iconActive) {
      return typeof iconActive === 'string' ? (
        <img src={iconActive} alt="active-icon" className={styles.icon} />
      ) : (
        iconActive
      )
    }
    if (isHovered && iconHover) {
      return typeof iconHover === 'string' ? (
        <img src={iconHover} alt="hover-icon" className={styles.icon} />
      ) : (
        iconHover
      )
    }
    return typeof icon === 'string' ? <img src={icon} alt="icon" className={styles.icon} /> : icon
  }

  // 渲染按钮内容，如果 href 存在，则使用 a 标签包裹按钮，支持跳转
  const ButtonContent = (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)} // 鼠标悬停时
      onMouseLeave={() => setIsHovered(false)} // 鼠标离开时
      onMouseDown={() => setIsActive(true)} // 鼠标按下时
      onMouseUp={() => setIsActive(false)} // 鼠标抬起时
      style={{
        padding: '10px 20px',
        borderRadius: '5px',
        border: `1px solid ${
          isActive ? activeBorderColor : isHovered ? hoverBorderColor : borderColor
        }`,
        backgroundColor: isActive
          ? activeBackgroundColor
          : isHovered
          ? hoverBackgroundColor
          : backgroundColor,
        color: isActive ? activeTextColor : isHovered ? hoverTextColor : textColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: icon ? (iconPosition === 'left' ? 'flex-start' : 'flex-end') : 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.3s ease', // 确保添加过渡效果
        ...style, // 合并外部传入的样式
      }}
      className={styles.button} // 使用模块化的样式
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.iconWrapper}>{renderIcon()}</span>
      )}
      <span>{text}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.iconWrapper}>{renderIcon()}</span>
      )}
    </button>
  )

  return href ? (
    <a href={href} className={styles.buttonWrapper} style={{ textDecoration: 'none' }}>
      {ButtonContent}
    </a>
  ) : (
    ButtonContent
  )
}

export default WaltButton
