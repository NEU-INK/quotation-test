import { Box } from '@mui/material'
import React from 'react'
import { siteName } from '../../../data/data'
import Image from 'next/image'
// import logoWhite from '../../../public/icons/walttec/logo-white.png'
import logoWaltTEC from '../../../public/images/logo-walttec.png'
import Link from 'next/link'

const Title = () => {
  return (
    <Box className="title-container">
      <Link href="/" className="title-link">
        <Box className="title-image">
          <Image src={logoWaltTEC.src} alt={siteName} width={211.8} height={50.3}  className="title-imageItem"/>
        </Box>
        {/*<Typography className='title-heading' >*/}
        {/*  {siteName}*/}
        {/*  /!*<span style={{ color: '#ffffff' }}>.</span>*!/*/}
        {/*</Typography>*/}
      </Link>
    </Box>
  )
}

export default Title
