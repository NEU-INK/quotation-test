import React, { useState, useEffect } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'
import HeaderMenu from '../../Smart/HeaderMenu/HeaderMenu'
import Title from '../../Presentational/Title/Title'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
    const router = useRouter()
    // const isHomePage = true
    const isHomePage = router.pathname === '/'
    // const isHomePage = true
    // console.log('isHomePage----',isHomePage)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        if (isHomePage) {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 0)
            }

            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [isHomePage])

    return (

        <Box className="header-container">
            <AppBar
                position="fixed"
                className={`header-bar ${isHomePage && !isScrolled ? 'transparent-bg' : 'blue-bg'}`}
            >
                <Toolbar disableGutters>
                    <Title />
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <HeaderMenu />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
