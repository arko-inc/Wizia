import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#002228',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Ensures the section takes full viewport height
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', // Default to 5 images in a row
  gap: theme.spacing(4),
  width: '80%',
  margin: '0 auto', // Centers the grid
  maxWidth: '1200px',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)', // Three images per row for large-sized screens
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)', // Two images per row for medium-sized screens (tablets)
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)', // Two images per row for small screens (mobile)
  },
}));

const HoverEffect = styled(Box)(({ theme }) => ({
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const Secondsec = () => {
  return (
    <Root>
      <Typography
        variant="h6"
        style={{
          fontFamily: 'Montserrat',
          fontWeight: '400', // Regular
          fontSize: '16px',
          color: '#0FF1F6',
        }}
      >
        Our Trusted Partners
      </Typography>

      <GridContainer>
        <Grid item>
          <HoverEffect>
            <img
              src="src/assets/BackHub.png"
              alt="Partner 1"
              style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
            />
          </HoverEffect>
        </Grid>
        <Grid item>
          <HoverEffect>
            <img
              src="src/assets/CableLabs.png"
              alt="Partner 2"
              style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
            />
          </HoverEffect>
        </Grid>
        <Grid item>
          <HoverEffect>
            <img
              src="src/assets/DBS.png"
              alt="Partner 3"
              style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
            />
          </HoverEffect>
        </Grid>
        <Grid item>
          <HoverEffect>
            <img
              src="src/assets/EasyEuro.png"
              alt="Partner 4"
              style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
            />
          </HoverEffect>
        </Grid>
        <Grid item>
          <HoverEffect>
            <img
              src="src/assets/AMD.png"
              alt="Partner 5"
              style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
            />
          </HoverEffect>
        </Grid>
      </GridContainer>
    </Root>
  );
};

export default Secondsec;
