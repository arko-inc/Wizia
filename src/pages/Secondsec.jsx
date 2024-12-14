import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import BackHub from '../assets/BackHub.png';
import CableLabs from '../assets/CableLabs.png';
import DBS from '../assets/DBS.png';
import EasyEuro from '../assets/EasyEuro.png';
import AMD from '../assets/AMD.png';

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: '#002228',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  width: '80%',
  margin: '0 auto',
  maxWidth: '1200px',
  marginTop: theme.spacing(4),
}));

const HoverEffect = styled(Box)({
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease-in-out',
  },
});

function Secondsec(){
  const partners = [
    { src: BackHub, alt: 'BackHub' },
    { src: CableLabs, alt: 'CableLabs' },
    { src: DBS, alt: 'DBS' },
    { src: EasyEuro, alt: 'EasyEuro' },
    { src: AMD, alt: 'AMD' },
  ];

  return (
    <Root>
      <Typography
        variant="h6"
        style={{
          fontFamily: 'Montserrat',
          fontWeight: '400',
          fontSize: '16px',
          color: '#0FF1F6',
        }}
      >
        Our Trusted Partners
      </Typography>

      <GridContainer container spacing={4}>
        {partners.map((partner, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <HoverEffect>
              <img
                src={partner.src}
                alt={partner.alt}
                style={{ width: '100%', height: 'auto', maxHeight: '50px' }}
              />
            </HoverEffect>
          </Grid>
        ))}
      </GridContainer>
    </Root>
  );
};

export default Secondsec;
