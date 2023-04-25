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
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

let theme = createTheme({
  typography: {
    fontFamily: "'Gabriela', serif",
  },
});
theme = responsiveFontSizes(theme);

export default function Service() {
  // const { ref, inView } = useInView({
  //   threshold: 0.2,
  //   triggerOnce: true,
  // });
  // const animation = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: {
  //         type: "spring",
  //         duration: 1,
  //       },
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       x: "-100vw",
  //     });
  //   }
  // }, [inView, animation]);

  return (
    <div id="service">
      <ThemeProvider theme={theme}>
        <Typography sx={{ paddingBottom: "1em" }} variant="h4">
          What we provide
        </Typography>
        <div className="section-service">
          <Grid spacing={{ xs: 5, sm: 7 }} container justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ x: "-100vw", scale: 0 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ type: "spring", duration: 5 }}
              >
                <img className="service-picture" src={pictureOne} alt="" />
                <Typography sx={{ fontSize: "18px", paddingTop: "1em" }}>
                  Lorem ipsum dolor sit amet consectetur. Iaculis rutrum
                  pellentesque mi tempor vitae.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ y: "100vh", scale: 0 }}
                animate={{ y: 0, scale: 1 }}
                transition={{ type: "spring", duration: 5 }}
              >
                <img className="service-picture" src={picutreTwo} alt="" />
                <Typography sx={{ fontSize: "18px", paddingTop: "1em" }}>
                  Lorem ipsum dolor sit amet consectetur. Iaculis rutrum
                  pellentesque mi tempor vitae.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ x: "100vw", scale: 0 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ type: "spring", duration: 5 }}
              >
                <img className="service-picture" src={pictureThree} alt="" />
                <Typography
                  className="service-text"
                  sx={{ fontSize: "18px", paddingTop: "1em" }}
                >
                  Lorem ipsum dolor sit amet consectetur. Iaculis rutrum
                  pellentesque mi tempor vitae.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </div>
  );
}
