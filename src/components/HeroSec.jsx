import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import LaunchIcon from '@mui/icons-material/Launch';


const Root = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${'src/components/rightbg.png'})`, // Use the imported image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(4),
  color: 'white',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0FF1F6',
  color: '#002228',
  borderRadius: '9999px',
  padding: theme.spacing(1, 3),
  marginTop: theme.spacing(4),
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Added shadow for depth
  '&:hover': {
    backgroundColor: '#00cccc',
  },
}));

const HeroSec = () => {
  return (
    <Root>
      <Box>
        <Typography
          variant="h6"
          className="text-left"
          style={{ color: '#0FF1F6', fontFamily: 'Montserrat', fontSize: '24px', fontWeight: '400' }}
        >
          AI SDRs (aiDRs)
        </Typography>
        <Typography
          variant="h1"
          className="text-left"
          style={{ color: 'white', fontFamily: 'Montserrat', fontSize: '64px', fontWeight: 'bold' }}
        >
          More <span style={{ fontStyle: 'italic', fontWeight: '300' }}>leads,</span>
        </Typography>
        <Typography
          variant="h1"
          className="text-left"
          style={{ color: 'white', fontFamily: 'Montserrat', fontSize: '64px', fontWeight: 'bold' }}
        >
          less <span style={{ fontStyle: 'italic', fontWeight: '300' }}>People.</span>
        </Typography>
        <Typography
          variant="body1"
          className="text-left"
          style={{ fontFamily: 'Work, sans-serif', fontSize: '20px', fontWeight: '300' }}
        >
          Train an aiDR on your ICP and messaging matrix.
        </Typography>
        <Typography
          variant="body1"
          className="text-left"
          style={{ fontFamily: 'Work, sans-serif', fontSize: '20px', fontWeight: '300' }}
        >
          Activate it on a patch. It will send personalized
        </Typography>
        <Typography
          variant="body1"
          className="text-left"
          style={{ fontFamily: 'Work, sans-serif', fontSize: '20px', fontWeight: '300' }}
        >
          sequences to every target contact.
        </Typography>
        <CustomButton
          variant="contained"
          endIcon={<LaunchIcon className="ml-2" />}
        >
          Sign Up for the Beta
        </CustomButton>
      </Box>
    </Root>
  );
};

export default HeroSec;
