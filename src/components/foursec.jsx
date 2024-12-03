import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';

// Custom styled components using Material-UI and Tailwind CSS
const Root = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(src/assets/rightbg.png)', // Replace with your custom image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh', // Full screen height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative', // To position arrows
  color: 'white',
  padding: theme.spacing(4),
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '80%',
  position: 'relative',
  borderRadius: '10px', // Rounded corners for the carousel
  overflow: 'hidden', // Hide other items when switching
}));

const CarouselItem = styled(Box)(({ theme }) => ({
  backgroundColor: '#002228',
  height: '100%',
  width: '100%',
  textAlign: 'center',
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.5s ease-in-out',
}));

const CustomArrow = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  '&:hover': {
    backgroundColor: '#0FF1F6',
  },
}));

const CarouselText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Work, sans-serif',
  fontSize: '32px',
  fontWeight: 'light',
  color: 'white',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const CarouselSubText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Work, sans-serif',
  fontSize: '24px',
  fontWeight: 'semibold',
  color: '#0FF1F6',
  textAlign: 'center',
}));

const CarouselDescription = styled(Typography)(({ theme }) => ({
  fontFamily: 'Work, sans-serif',
  fontSize: '20px',
  fontWeight: 'regular',
  color: 'white',
  textAlign: 'center',
}));

const DotsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: theme.spacing(2),
  width: '100%',
}));

const Dot = styled(Box)(({ theme, active }) => ({
  backgroundColor: active ? '#0FF1F6' : '#fff',
  height: '10px',
  width: '10px',
  borderRadius: '50%',
  margin: theme.spacing(0.5),
  transition: 'background-color 0.3s ease',
}));

// Foursec component
const Foursec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % 3); // Loop through carousel items
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + 3) % 3); // Loop through carousel items
  };

  return (
    <Root>
      <CarouselContainer>
        {/* Left Arrow */}
        <CustomArrow onClick={handlePrev} style={{ left: '0' }}>
          <ArrowBackIos style={{ color: '#fff' }} />
        </CustomArrow>
        
        {/* Carousel Content with SwipeableViews */}
        <SwipeableViews
          index={activeIndex}
          onChangeIndex={setActiveIndex}
          enableMouseEvents
        >
          <CarouselItem>
            <Box className="mb-4">
              {/* Add your icon here */}
              <img src="src/assets/icon.png" alt="icon1" className="w-16 h-16 mx-auto" />
            </Box>
            <CarouselText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CarouselText>
            <CarouselSubText>John Doe</CarouselSubText>
            <CarouselDescription>Chief Strategy Officer @ Company</CarouselDescription>
          </CarouselItem>
          
          <CarouselItem>
            <Box className="mb-4">
              {/* Add your icon here */}
              <img src="src/assets/icon.png" alt="icon2" className="w-16 h-16 mx-auto" />
            </Box>
            <CarouselText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CarouselText>
            <CarouselSubText>John Doe</CarouselSubText>
            <CarouselDescription>Chief Strategy Officer @ Company</CarouselDescription>
          </CarouselItem>
          
          <CarouselItem>
            <Box className="mb-4">
              {/* Add your icon here */}
              <img src="src/assets/icon.png" alt="icon3" className="w-16 h-16 mx-auto" />
            </Box>
            <CarouselText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CarouselText>
            <CarouselSubText>John Doe</CarouselSubText>
            <CarouselDescription>Chief Strategy Officer @ Company</CarouselDescription>
          </CarouselItem>
        </SwipeableViews>
        
        {/* Right Arrow */}
        <CustomArrow onClick={handleNext} style={{ right: '0' }}>
          <ArrowForwardIos style={{ color: '#fff' }} />
        </CustomArrow>
      </CarouselContainer>

      {/* Dots Indicator */}
      <DotsContainer>
        {[0, 1, 2].map((index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </DotsContainer>
    </Root>
  );
};

export default Foursec;
