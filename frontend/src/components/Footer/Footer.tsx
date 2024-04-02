import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      className={`flex justify-center items-center content-end h-[70px] bg-white`}
    >
      <Typography variant="h6">Copyright 2024 © SABAA by webGhoul.</Typography>
    </Box>
  );
};

export default Footer;
