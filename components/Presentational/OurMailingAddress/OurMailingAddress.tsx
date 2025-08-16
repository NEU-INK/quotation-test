
import {Grid, Box, Typography} from '@mui/material';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import styles from './OurMailingAddress.module.scss';
const OurMailingAddress = () => {

    return (
        <Box className={styles.ourMailingAddress}>
            <Grid container direction={{ xs: 'column', md: 'row' }} >
                <Grid item xs={5} className={styles.left} style={{flexDirection: 'column'}}>
                    <div className={styles.content}>
                        <Typography fontSize={'4.8rem'} fontWeight={700} lineHeight={2}>
                            OUR MAILING ADDRESS
                        </Typography>
                        <Typography fontSize={'2.6rem'} fontWeight={700} lineHeight={'5rem'}>
                            Walt Technology Group Co. Ltd
                        </Typography>
                        <Typography fontSize={'2.6rem'} fontWeight={500} style={{ lineHeight: '1', margin: '1.2rem 0' }}>
                            <img
                                src={'/images/contact-us-map.png'}
                                alt={''}
                                style={{
                                    height: '2.6rem',
                                    margin: '0 1rem 1rem 0',
                                    width: 'auto', // 设置图片高度与字体高度相等
                                    verticalAlign: 'middle', // 底部对齐文字
                                }}
                            />
                            48 Shijing Road, Haining Shi, Jiaxing Shi, Zhejiang, China, 314400
                        </Typography>
                    </div>
                    <Typography fontSize={'2.6rem'} fontWeight={700} className={styles.bottomText}>
                        Our Location on the MAP
                    </Typography>
                </Grid>

                <Grid item xs={7} className={styles.right}>
                    <Box className={styles.rightMapBox}>
                        <iframe className={styles.rightMap}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1324.8821486785655!2d120.72885277975907!3d30.54028582671994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344cd2620f36b901%3A0x7e165e4c5d61e428!2sHuaer%20Textile%20Science%26Technology%20Company%203rd%20Branch!5e0!3m2!1sen!2s!4v1726208507184!5m2!1sen!2s"
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Box>

                </Grid>
            </Grid>

        </Box>

    );
};

export default OurMailingAddress;
