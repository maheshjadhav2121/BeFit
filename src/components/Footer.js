import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "41px" }} />
      {/* <Stack direction="row" spacing={1}>
      
        <IconButton
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </IconButton>
      </Stack> */}

      <Typography
        variant="body1"
        textAlign="center"
        sx={{ fontSize: { lg: "16px", xs: "14px" }, maxWidth: "600px" }}
      >
        Discover the power of fitness with our platform! We teach effective
        exercise techniques through interactive tutorials, provididing you with
        detailed guidance for every exercise.
      </Typography>
    </Stack>
    <Typography
      variant="h1"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="10px"
    >
      Stay Active, Stay Healthy
    </Typography>
    <br />
    <Typography variant="body2" sx={{ textAlign: "center", color: "#888" }}>
      © {new Date().getFullYear()} BeFit All rights reserved.
    </Typography>
    <br />
  </Box>
);

export default Footer;
