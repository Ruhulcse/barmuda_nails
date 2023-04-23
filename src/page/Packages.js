import {
  Button,
  Grid,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import React from "react";

let theme = createTheme({
  typography: {
    fontFamily: "'Gabriela', serif",
  },
});
theme = responsiveFontSizes(theme);

function Packages() {
  return (
    <div id="packages">
      <ThemeProvider theme={theme}>
        <Typography
          sx={{ paddingTop: "0.5em", paddingLeft: "0.5em" }}
          variant="h4"
        >
          Packages
        </Typography>
        <Typography
          sx={{ paddingTop: "1em", textAlign: "center" }}
          variant="h3"
        >
          Best Nail Art Studio
        </Typography>
        <Grid
          container
          sx={{ paddingTop: "2em" }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Paper
                className="paper"
                elevation={2}
                sx={{
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "15px",
                  color: "#fff",
                  background:
                    "linear-gradient(300.43deg, rgba(229, 156, 95, 0.8) 42.72%, rgba(255, 221, 85, 0.6) 97.02%, rgba(255, 221, 85, 0.6) 97.02%);",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <div>
                    <Typography sx={{ fontSize: "22px" }}>
                      Acrylic Nails
                    </Typography>
                    <Typography sx={{ fontSize: "18px" }}>
                      Service Time 30 Min
                    </Typography>
                  </div>
                  <Typography sx={{ fontSize: "22px" }}>30€</Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid
          sx={{ marginTop: "3em", marginBottom: "2em" }}
          container
          justifyContent="center"
        >
          <Button
            className="contact-button"
            sx={{
              fontFamily: "Fira Sans",
              fontSize: "20px",
              borderRadius: "50px",
              width: "170px",
              paddingTop: "10px",
            }}
            variant="contained"
          >
            Book now
          </Button>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Packages;
