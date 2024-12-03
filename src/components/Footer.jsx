import React from 'react';
import { Container } from '@mui/material'; // Material-UI Container for centering content

const Footer = () => {
  return (
    <footer className="bg-[#07292F] text-white py-4">
      <Container className="flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="src/assets/Logo1.png" alt="Logo" className="h-7 w-36" />
        </div>
        
        {/* Copyright on the right */}
        <div className="text-sm text-gray-500">
          <p>Copyright © 2023 Wizia. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
