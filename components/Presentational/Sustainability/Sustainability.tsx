import React, { useState } from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import styles from './Sustainability.module.scss';
import { sustainabilityData } from '../../../data/data';

const Sustainability: React.FC = () => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      className={styles.sustainability}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Typography
        variant="h4"
        align="center"
        color="secondary"
        className={`${styles.dynamicText} ${hover ? styles.hover : ''}`}
        gutterBottom
      >
        What have we done about sustainable development?
      </Typography>
      <Typography align="left" paragraph>
        {sustainabilityData.description}
      </Typography>

      <Box className={`${styles.featuresContainer} ${styles.expand}`}>
        <Grid container spacing={2} className={styles.featuresContainerGrid}>
          {sustainabilityData.features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} className={styles.featureCard}>
                <Box className={styles.featureContent}>
                  <Box className={styles.featureImageContainer}>
                    <img src={feature.img} alt={feature.title} className={styles.featureImage} />
                  </Box>
                  <Box className={styles.featureTextContainer}>
                    <Typography variant="body2" className={styles.featureTitle}>{feature.title}</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Sustainability;
