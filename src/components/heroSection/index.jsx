import React from "react";
import { Box, Grid, Typography, useMediaQuery, keyframes } from "@mui/material";

// Assets
import BigLogo from "../../assets/Layer_1.svg";
import SmallIcon from "../../assets/Group_14.svg fill.svg";

// Keyframes
const slideDown = keyframes`
  0% { opacity: 0; transform: translateY(-80px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(60px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Hero = () => {
    const isTablet = useMediaQuery("(max-width:1024px)");
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                // height: "auto",
                maxWidth: "1600px",
                mx: "auto",
                pt: isMobile ? 14 : 10,
                pb: 6,
            }}
        >
            <Grid container sx={{
                width: "100%", px: { xs: 2, sm: 4, md: 6 }, // xs=mobile, sm=tablet, md=desktop
                position: "relative"
            }}>

                {/* LEFT — BIG LOGO */}
                <Grid item xs={12} md={8}>
                    <Box
                        sx={{
                            animation: `${slideDown} 1.2s ease-out`,
                            animationFillMode: "forwards",
                            zIndex: 100,
                        }}
                    >
                        <img
                            src={BigLogo}
                            alt="Hero Logo"
                            style={{
                                width: "100%",
                                maxWidth: isMobile
                                    ? "240px"
                                    : isTablet
                                        ? "480px"
                                        : "600px",
                                height: "auto",
                                position: "relative",
                                top: isMobile ? -50 : isTablet ? -100 : -60,
                            }}
                        />
                    </Box>
                </Grid>

                {/* RIGHT — TEXT */}
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            position: isMobile ? "relative" : "absolute",
                            right: isMobile ? "-135px" : "130px",
                            top: isMobile ? "-28px" : "200px",
                            textAlign: "right",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: isMobile ? "center" : "flex-start",
                            width: isMobile ? "100%" : "auto",
                            animation: `${slideUp} 1s ease-out`,
                            animationDelay: "1s",
                            opacity: 0,
                            animationFillMode: "forwards",
                        }}
                    >
                        {/* Small Icon */}
                        <Box sx={{ mb: 1, pl: isMobile ? 0 : "30px" }}>
                            <img src={SmallIcon} alt="icon" width={isMobile ? 22 : 24} />
                        </Box>

                        {/* Text */}
                        <Typography
                            sx={{
                                fontFamily: "Inter Tight, sans-serif",
                                fontSize: isMobile ? "12px" : "13px",
                                fontWeight: 900,
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                                lineHeight: 1.2,
                                color: "#1D1D1B",
                            }}
                        >
                            WE CREATE <br />
                            <Box
                                component="span"
                                sx={{
                                    display: "block",
                                    textAlign: isMobile ? "center" : "left",
                                }}
                            >
                                WEBSITES AND BRANDS <br />
                                PEOPLE REMEMBER. <br />
                                NOT JUST SCROLL PAST.
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Hero;
