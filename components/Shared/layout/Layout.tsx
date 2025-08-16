import React, { ReactNode } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import styles from './layout.module.scss'
import { useRouter } from 'next/router'

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
    const router = useRouter();
    const isHomePage = router.pathname === '/'; // 判断是否是首页
    // const isHomePage = true; // 判断是否是首页
    // const isHomePage = true; // 判断是否是首页

    return (
        // <div className={styles.responsiveness}>
        <div className={`${isHomePage ? '' : `${styles.headBg}`}`}>
            <Header />

            {children}
            <Footer />
        </div>
    )
}

export default Layout
