import React from "react";
import { TextField, Button, Box, Container, Grid, Typography } from "@mui/material";


const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "30px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              height: "30px",
            }}
          >
            <Typography variant="body2" color="inherit">
              © 2023
             </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
