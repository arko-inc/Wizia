import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled Box for the root container
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

// Styled Grid for the inner grid layout
const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: theme.spacing(4),
  width: '80%',
  marginRight:'50px',
  marginLeft:'50px',
  maxWidth: '1200px',
  paddingLeft: theme.spacing(2), // Space from left
  paddingRight: theme.spacing(2), // Space from right
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr 1fr 1fr', // Three columns for smaller screens
  },
  [theme.breakpoints.down('xs')]: {
    gridTemplateColumns: '1fr', // Stacks the grid items for extra small screens
  },
}));

// Hover effect for the grid items
const HoverEffect = styled(Box)(({ theme }) => ({
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const Secondsec = () => {
  return (
    <Root>
      {/* Header Section */}
      <Typography
        variant="h6"
        style={{ 
          fontFamily: 'Montserrat', 
          fontWeight: '400', // Regular
          fontSize: '16px', 
          color:'#0FF1F6'
        }}
      >
        our trusted partners
      </Typography>

      {/* 5-Column Grid Layout */}
      <GridContainer container>
        <HoverEffect item>
          <img
            src="src/assets/BackHub.png"
            alt="Partner 1"
            style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
          />
        </HoverEffect>
        <HoverEffect item>
          <img
            src="src/assets/CableLabs.png"
            alt="Partner 2"
            style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
          />
        </HoverEffect>
        <HoverEffect item>
          <img
            src="src/assets/DBS.png"
            alt="Partner 3"
            style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
          />
        </HoverEffect>
        <HoverEffect item>
          <img
            src="src/assets/EasyEuro.png"
            alt="Partner 4"
            style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
          />
        </HoverEffect>
        <HoverEffect item>
          <img
            src="src/assets/AMD.png"
            alt="Partner 5"
            style={{ width: '100%', height: 'auto', maxHeight: '50px' }} // Full width image, reduced height
          />
        </HoverEffect>
      </GridContainer>
    </Root>
  );
};

export default Secondsec;
