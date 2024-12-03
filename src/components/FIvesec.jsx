import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/src/assets/rightbg.png)',
  backgroundSize: 'cover',
  padding: theme.spacing(4),
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh', // Ensures the section takes full viewport height
  position: 'relative', // Set relative position to control absolute child positioning
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  position: 'relative',  // Absolute position to stick it to the bottom-left
  bottom: 0,  // Align to the bottom of the parent container
  left: 0,    // Align to the left of the parent container
  maxWidth: '50%', // Setting the grid layout to be half the screen width
  margin: theme.spacing(4),
  alignSelf: 'flex-start', // Aligns the grid to the bottom left
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%', // Adjusting for small screens
  },
}));

const TextHighlight = styled(Typography)(({ theme }) => ({
  color: '#0FF1F6',
}));

const Stat = styled(Typography)(({ theme }) => ({
  color: '#0FF1F6',
  fontWeight: 'bold',
  fontSize: '40px',
  fontFamily: 'Montserrat',
  marginbottm:'10px'
}));

const StatDescription = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'medium',
  fontFamily: 'Montserrat',
  marginBottom: theme.spacing(2),
}));

const HoverEffect = styled(Grid)(({ theme }) => ({
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const Fivesec = () => {
  return (
    <Root>
      <Box className ="md:translate-y-36">
        <Typography
          variant="h3"
          className="font-semibold text-left "
          style={{ fontFamily: 'Montserrat', fontSize: '32px' }}
        >
          Allocate effort where your reps 
          <br/>
          make an impact.
        </Typography>
        <TextHighlight
          variant="h3"
          className="italic text-left"
          style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '500' }}
        >
          Let us handle the rest.
        </TextHighlight>
        <Typography
          variant="h6"
          className="text-left font-light"
          style={{ fontFamily: 'Montserrat', fontSize: '20px' }}
        >
          Keep your reps “in the air” -- out in the field and on the phone
          <br/>
           where they can build relationships.
        </Typography>
      </Box>
      <GridContainer container spacing={3}>
        <HoverEffect item xs={12} sm={4}>
          <Stat>32%</Stat>
          <StatDescription>
            Improvement in Open Rates
          </StatDescription>
        </HoverEffect>
        <HoverEffect item xs={12} sm={4}>
          <Stat>75%</Stat>
          <StatDescription>
            Improvement in Ramp Time
          </StatDescription>
        </HoverEffect>
        <HoverEffect item xs={12} sm={4}>
          <Stat>35%</Stat>
          <StatDescription>
            Improvement in Meetings Booked
          </StatDescription>
        </HoverEffect>
      </GridContainer>
    </Root>
  );
};

export default Fivesec;
