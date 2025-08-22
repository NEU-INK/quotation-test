import React, { useState } from 'react'
import { MenuItem, Typography, Box } from '@mui/material'
import styles from './HeaderMenuItem.module.scss'

interface HeaderMenuItemProps {
  handleCloseNavMenu: (path: string) => void
  text: string
  path: string
  submenuItems?: Array<{ path: string; text: string }>
  isMobile?: boolean
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
  handleCloseNavMenu,
  text,
  path,
  submenuItems = [],
  isMobile = false,
}) => {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  // console.log(anchorEl)
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (!isMobile && submenuItems.length > 0) {
      // setAnchorEl(event.currentTarget)
      setShowSubMenu(true)
    }
  }

  const handleMouseLeave = () => {
    setShowSubMenu(false)
    // setAnchorEl(null)
  }

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{ position: 'relative' }}
    >
      <MenuItem
        onClick={() => handleCloseNavMenu(path)}
        sx={{
          height: 70,
          display: 'flex',
          margin: isMobile ? '0 10px' : '0 20px',
          minWidth: isMobile ? '100px' : 'auto',
          justifyContent: isMobile ? 'flex-start' : 'center',
          '&:hover': {
            color: 'var(--hover-blue)',
          },
        }}
      >
        <Typography
          textAlign="center"
          fontFamily="HS"
          sx={{
            fontSize: isMobile ? '2.6rem' : '2.6rem',
          }}
        >
          {text}
        </Typography>
      </MenuItem>
      {/*&& showSubMenu*/}
      {!isMobile && showSubMenu && submenuItems.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '220px',
            border: '1px solid rgba(255,255,255,0.9)',
            borderRadius: '5px',
            fontFamily: 'HS',
            fontSize: '2.2rem',
            backgroundColor: 'rgba(255,255,255,0.9)',
            overflow: 'hidden',
          }}
        >
          {submenuItems.map((submenuItem, index) => (
            <div
              className={styles.submenuItems}
              key={index}
              onClick={() => handleCloseNavMenu(submenuItem.path)}
            >
              {submenuItem.text}
            </div>
          ))}
        </div>
      )}

      {isMobile && submenuItems.length > 0 && (
        <Box sx={{ paddingLeft: 2 }}>
          {submenuItems.map((submenuItem, submenuIndex) => (
            <div
              key={submenuIndex}
              className={styles.submenuItems2}
              onClick={() => handleCloseNavMenu(submenuItem.path)}
            >
              {submenuItem.text}
            </div>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default HeaderMenuItem
