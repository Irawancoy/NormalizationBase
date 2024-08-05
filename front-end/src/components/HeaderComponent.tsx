import { Box } from '@mui/material';

const HeaderComponent = () => {
  return (
       <Box >
        <img src="/Header.png" alt="" width="100%" height="50px" />
        <Box component="img" src="/Logo.svg" alt="" sx={{ height: 50, position: 'absolute', top: 50, left: 350 }} />
      </Box>
  );
};

export default HeaderComponent;
