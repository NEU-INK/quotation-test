

import React from 'react';
import { Box, IconButton, Menu, Divider, useMediaQuery, InputBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';
import { siteName, pages } from '../../../data/data';
import hamburgerClose from '../../../public/images/hamburgerClose.png';
import hamburgerOpen from '../../../public/images/hamburgerOpen.png';
import HeaderMenuItem from '../../Presentational/HeaderMenuItem/HeaderMenuItem';
import SearchIcon from '@mui/icons-material/Search';

const HeaderMenu = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [hamburgerIcon, setHamburgerIcon] = React.useState<boolean>(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchOpen, setSearchOpen] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const router: NextRouter = useRouter();
    const theme = useTheme();
    // 宽度是否符合 Material-UI 主题中的 md (768px 及以上) 的断点条件
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElNav(event.currentTarget);
        setHamburgerIcon(true);
    };

    const handleCloseNavMenu = (path: string) => {
        if (path !== router.pathname) {
            router.push(path);
        }
        setHamburgerIcon(false);
        setAnchorElNav(null);
    };

    const handleSearch = () => {
        if (searchQuery) {
            const googleSearchUrl = `https://www.google.com/search?q=site:https://www.walttec.shop%20${encodeURIComponent(searchQuery)}`;
            window.open(googleSearchUrl, '_blank');
            setSearchQuery(''); // 清空输入框
            setSearchOpen(false); // 隐藏输入框
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleBlur = () => {
        setSearchOpen(false);
    };

    return (
        <Box className="header-menu-container">
            {isDesktop ? (
                <Box className="desktop-menu">
                    {pages.map((page, index) => (
                        <HeaderMenuItem
                            key={index}
                            handleCloseNavMenu={handleCloseNavMenu}
                            text={page.text}
                            path={page.path}
                            submenuItems={page.submenuItems}
                        />
                    ))}
                    {searchOpen && (
                        <InputBase
                            placeholder="Search…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                            onBlur={handleBlur}
                            inputRef={inputRef}
                            sx={{ ml: 2, flex: 1, borderBottom: '1px solid white', color: 'white',fontSize: '2.6rem'  }}
                        />
                    )}
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={() => {
                            setSearchOpen((prev) => !prev);
                            if (!searchOpen) inputRef.current?.focus(); // 聚焦输入框
                        }}
                        sx={{ fontSize: '2.6rem' }} // 设置 IconButton 内图标的大小
                    >
                        <SearchIcon sx={{ fontSize: '2.6rem' }} /> {/* 设置图标大小为2.6rem */}
                    </IconButton>

                </Box>
            ) : (
                <>
                    {searchOpen && (
                        <InputBase
                            placeholder="Search…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                            onBlur={handleBlur}
                            inputRef={inputRef}
                            sx={{ ml: 0, flex: 1, borderBottom: '1px solid white', color: 'white' ,fontSize:'2rem'}}
                        />
                    )}
                    <IconButton size="small" color="inherit"  sx={{ fontSize: '2rem' }} onClick={() => {
                        setSearchOpen((prev) => !prev);
                        if (!searchOpen) inputRef.current?.focus(); // 聚焦输入框

                    }}>
                        <SearchIcon sx={{ fontSize: '3rem' }} />
                    </IconButton>
                    <IconButton size="large" aria-label="account of current user" onClick={handleOpenNavMenu} color="inherit">
                        <Box className="menu-icon">
                            <Image
                                src={hamburgerIcon ? hamburgerClose.src : hamburgerOpen.src}
                                alt={siteName}
                                width={40}
                                height={40}
                                style={{ width: '6vw', height: 'auto' }}
                            />
                        </Box>
                    </IconButton>

                    <Menu
                        PaperProps={{ style: { width: '100%', boxShadow: 'none' } }}
                        className="header-menu"
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={Boolean(anchorElNav)}
                        onClose={() => {
                            setAnchorElNav(null);
                            setHamburgerIcon(false);
                        }}
                    >
                        <Divider />
                        {pages.map((page, index) => (

                            <HeaderMenuItem
                                key={index}
                                handleCloseNavMenu={handleCloseNavMenu}
                                text={page.text}
                                path={page.path}
                                submenuItems={page.submenuItems}
                                isMobile={true} // Pass down mobile flag
                            />
                        ))}
                    </Menu>
                </>
            )}
        </Box>
    );
};

export default HeaderMenu;


