import {
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React from "react";
import pictureOne from "../img/jodene-isakowitz-hvqHtZqNMeI-unsplash 1.png";
import picutreTwo from "../img/giorgio-trovato-gb6gtiTZKB8-unsplash 1.png";
import pictureThree from "../img/rashid-khreiss-pVw3XzhdKJg-unsplash 1.png";

let theme = createTheme({
  typography: {
    fontFamily: "'Gabriela', serif",
  },
});
theme = responsiveFontSizes(theme);

export default function Service() {
  return (
    <div id="service">
      <ThemeProvider theme={theme}>
        <Typography sx={{ paddingBottom: "1em" }} variant="h4">
          What we provide
        </Typography>
        <div className="section-service">
          <Grid spacing={{ xs: 5, sm: 7 }} container justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <img className="service-picture" src={pictureOne} alt="" />
              <Typography sx={{ fontSize: "18px", paddingTop: "1em" }}>
                Lorem ipsum dolor sit amet consectetur. Iaculis rutrum
                pellentesque mi tempor vitae.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <img className="service-picture" src={picutreTwo} alt="" />
              <Typography sx={{ fontSize: "18px", paddingTop: "1em" }}>
                Lorem ipsum dolor sit amet consectetur. Iaculis rutrum
                pellentesque mi tempor vitae.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <img className="service-picture" src={pictureThree} alt="" />
              <Typography
                className="service-text"
                sx={{ fontSize: "18px", paddingTop: "1em" }}
              >
                Lorem ipsum dolor sit amet consectetur. Iaculis rutrum
                pellentesque mi tempor vitae.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}
