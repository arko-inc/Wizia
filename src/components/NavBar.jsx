import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import logo from './logo.png'; // Adjusted import for the logo image

const NavLinks = [
  { name: 'About Us', link: '/about-us' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Customers', link: '/customers' },
  { name: 'Solutions', link: '/solutions' },
];

const BookDemoButton = styled(Button)({
  backgroundColor: '#0FF1F6',
  color: 'black',
  borderRadius: '9999px',
  fontSize: '12px',
  '&:hover': {
    backgroundColor: '#0dcfe6',
  },
});

const ContactUsButton = styled(Button)({
  borderColor: 'white',
  borderWidth: '2px',
  borderStyle: 'solid',
  color: 'white',
  borderRadius: '9999px',
  fontSize: '12px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#000',
  },
});

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <AppBar position="static" className="bg-[#002228] shadow-none">
      <Toolbar className="flex justify-between items-center p-4 bg-[#002228]">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-6 w-auto" /> {/* Adjusted size */}
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-12">
          {NavLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="text-white hover:text-gray-300 font-work text-[14px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-2 font-work">
          <BookDemoButton variant="contained" href="/book-demo">
            Book a Demo
          </BookDemoButton>
          <ContactUsButton variant="outlined" href="/contact-us">
            Contact Us
          </ContactUsButton>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 p-4 bg-[#002228] text-white font-work">
          {NavLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="hover:text-gray-300 font-work"
            >
              {link.name}
            </a>
          ))}
          <BookDemoButton variant="contained" href="/book-demo">
            Book a Demo
          </BookDemoButton>
          <ContactUsButton variant="outlined" href="/contact-us">
            Contact Us
          </ContactUsButton>
        </div>
      )}
    </AppBar>
  );
}

export default NavBar;
