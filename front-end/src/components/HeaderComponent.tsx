import React from 'react';
import { Box } from '@mui/material';
import '../styles/header.css';

const HeaderComponent = () => {
  return (
    <Box className="header-box">
      <img src="/Header.png" alt="Header" className="header-img" />
      <Box
        component="img"
        src="/Logo.svg"
        alt="Logo"
        className="header-logo"
      />
    </Box>
  );
};

export default HeaderComponent;
