import {
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React from "react";
import ContactForm from "../components/ContactForm";
import MyComponent from "../components/MapComponent";

let theme = createTheme({
  typography: {
    fontFamily: "'Fira Sans'",
  },
});
theme = responsiveFontSizes(theme);

export default function Contact() {
  return (
    <div id="contact">
      <ThemeProvider theme={theme}>
        <Typography sx={{ fontFamily: "'Gabriela', serif" }} variant="h4">
          Contact
        </Typography>
        <div className="contact-content">
          <Grid
            container
            spacing={{ xs: 6, sm: 8 }}
            sx={{ paddingTop: "1em" }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <MyComponent />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}
