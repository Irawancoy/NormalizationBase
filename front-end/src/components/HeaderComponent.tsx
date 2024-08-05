import { Box } from '@mui/material';

const HeaderComponent = () => {
  return (
    <Box sx={{mb:5, position: 'relative' }}>
      <img src="/Header.png" alt="Header" width="100%" height="50px" />
      <Box
        component="img"
        src="/Logo.svg"
        alt="Logo"
        sx={{
          height: 50,
          position: 'absolute',
          left: '50px',
          top: '50px',

        }}
      />
    </Box>
  );
};

export default HeaderComponent;
