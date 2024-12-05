import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';

// Custom styled components
const Root = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(/src/assets/rightbg.png)', // Fixed path for public folder
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  color: 'white',
  padding: theme.spacing(4),
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '80%',
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
}));

const CarouselWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  width: '100%',
}));

const CarouselItem = styled(Box)(({ theme }) => ({
  flex: '0 0 100%', // Each item takes 100% of the container width
  backgroundColor: '#002228',
  height: '100%',
  textAlign: 'center',
  padding: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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

const DotsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: theme.spacing(2),
  width: '100%',
}));

const Dot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active }) => ({
  backgroundColor: active ? '#0FF1F6' : '#fff',
  height: '10px',
  width: '10px',
  borderRadius: '50%',
  margin: '0.5rem',
  transition: 'background-color 0.3s ease',
}));

const Foursec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      id: 1,
      icon: 'src/assets/icon.png',  // Fixed path for public folder
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subText: 'John Doe',
      description: 'Chief Strategy Officer @ Company',
    },
    {
      id: 2,
      icon: 'src/assets/icon.png',  // Fixed path for public folder
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subText: 'Jane Doe',
      description: 'Chief Technology Officer @ Company',
    },
    {
      id: 3,
      icon: 'src/assets/icon.png',  // Fixed path for public folder
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subText: 'Alex Smith',
      description: 'Chief Marketing Officer @ Company',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <Root>
      <CarouselContainer>
        <CustomArrow onClick={handlePrev} sx={{ left: '0' }}>
          <ArrowBackIos sx={{ color: '#07292F' }} />
        </CustomArrow>

        <CarouselWrapper sx={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <Box className="mb-4">
                <img src={slide.icon} alt={`icon${slide.id}`} className="w-16 h-16 mx-auto" />
              </Box>
              <Typography variant="h4" color="white">
                {slide.text}
              </Typography>
              <Typography variant="subtitle1" color="#0FF1F6">
                {slide.subText}
              </Typography>
              <Typography variant="body1" color="white">
                {slide.description}
              </Typography>
            </CarouselItem>
          ))}
        </CarouselWrapper>

        <CustomArrow onClick={handleNext} sx={{ right: '0' }}>
          <ArrowForwardIos sx={{ color: '#fff' }} />
        </CustomArrow>
      </CarouselContainer>

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </DotsContainer>
    </Root>
  );
};

export default Foursec;
