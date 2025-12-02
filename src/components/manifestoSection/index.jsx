import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Img1 from "../../assets/overlayImg1.svg";
import Img2 from "../../assets/overlayImg2.svg";
import Img3 from "../../assets/overlayImg3.svg";
import { useMediaQuery } from "@mui/material";
import ElectricDoodle from "../../assets/electric.svg";
import RandomDoodle from "../../assets/random1.svg";

const ManifestoSection = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [offset, setOffset] = useState(0);
    const scrollPrev = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const now = window.scrollY;

            const delta = now - scrollPrev.current;

            // VERY SMALL MOVEMENT (slow + smooth)
            const speed = 5; // adjust between 0.2 ↔ 1.0

            if (delta > 0) {
                // scrolling down → move left
                setOffset((o) => o - speed);
            } else {
                // scrolling up → move right
                setOffset((o) => o + speed);
            }

            scrollPrev.current = now;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box sx={{ width: "100%", maxWidth: "1600px", position: "relative", top: "-150px", overflow: "hidden", mx: "auto", paddingTop: "330px" }}>

            {/* ------------------------------------
                1️⃣ TOP AUTO-SLIDING MANIFESTO STRIP
            ------------------------------------- */}

            <Box
                sx={{
                    overflow: "hidden",
                    position: "relative",
                    width: "100%",
                    whiteSpace: "nowrap",
                    transform: "skewY(-1deg)",

                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        animation: "manifestoMarquee 18s linear infinite",
                    }}
                >
                    {/* TRACK 1 */}
                    <Box
                        sx={{
                            flexShrink: 0,
                            minWidth: "100%",
                            display: "flex",
                        }}
                    >
                        <Typography
                            component="span"
                            sx={{
                                fontSize: "14px",
                                fontWeight: 900,
                                fontFamily: "Inter Tight, sans-serif",
                                textTransform: "uppercase",
                                color: "#1D1D1B",
                                letterSpacing: 0,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {"MANIFESTO — ".repeat(20)}
                        </Typography>
                    </Box>

                    {/* TRACK 2 (IDENTICAL) */}
                    <Box
                        sx={{
                            flexShrink: 0,
                            minWidth: "100%",
                            display: "flex",
                        }}
                    >
                        <Typography
                            component="span"
                            sx={{
                                fontSize: "14px",
                                fontWeight: 900,
                                fontFamily: "Inter Tight, sans-serif",
                                textTransform: "uppercase",
                                color: "#1D1D1B",
                                letterSpacing: 0,
                                whiteSpace: "nowrap",
                            }}
                        >
                            {"MANIFESTO — ".repeat(20)}
                        </Typography>
                    </Box>
                </Box>

                <style>
                    {`
        @keyframes manifestoMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        `}
                </style>
            </Box>

            {/* ------------------------------------
                2️⃣ OVERLAY FLOATING IMAGES
            ------------------------------------- */}
            <Box sx={{ position: "relative", width: "100%", height: "420px", mt: 4 }}>

                {/* Left photo */}
                <Box
                    component="img"
                    src={Img1}
                    sx={{
                        position: "absolute",
                        top: isMobile ? "-234px" : "-382px",
                        left: "4%",
                        width: isMobile ? "250px" : "360px",
                        transform: "rotate(0deg)",
                        zIndex: 5,
                    }}
                />

                {/* Middle poster */}
                <Box
                    component="img"
                    src={Img2}
                    sx={{
                        position: "absolute",
                        top: isMobile ? "-63px" : "-123px",
                        left: isMobile ? "23%" : "25%",
                        width: isMobile ? "312px" : "450px",
                        transform: isMobile ? "rotate(-2deg)" : "rotate(-3deg)",
                        zIndex: 6,
                        filter: "drop-shadow(0px 30px 15px rgba(0,0,0,0.3))",
                    }}
                />

                {/* Big Right Image */}
                <Box
                    component="img"
                    src={Img3}
                    sx={{
                        position: "absolute",
                        top: isMobile ? " 225px" : "50px",
                        right: isMobile ? "22%" : "1% ",
                        width: isMobile ? "290px" : "570px",
                        transform: isMobile ? "rotate(-2deg)" : "rotate(0deg)",
                        zIndex: 7,
                        filter: "drop-shadow(0px 25px 20px rgba(0,0,0,0.25))",
                    }}
                />
            </Box>

            {/* ------------------------------------
                3️⃣ SCROLL CONTROLLED GIANT TEXT
            ------------------------------------- */}
            <Box
                sx={{
                    width: "100%",
                    overflow: "hidden",
                    position: "relative",
                    bottom: isMobile ? "-100px" : "150px",
                    transform: "skewY(-3deg)",

                }}
            >
                <Typography
                    sx={{
                        fontSize: isMobile ? "110px" : "250px",
                        fontWeight: 800,
                        fontFamily: "Inter Tight, sans-serif",
                        textTransform: "lowercase",
                        whiteSpace: "nowrap",
                        transform: `translateX(${offset}px)`,
                        transition: "transform 0.2s ease-out",
                        color: "#000",
                        position: "relative",
                        left: "-30%",
                    }}
                >
                    bebebebebebebebebebebebebebebebebebebebebebebebebebebebebbe
                </Typography>
            </Box>
            {/* text and big heading */}
            <Box sx={{
                padding: isMobile ? "140px 20px 0px 20px" : "80px 0px 0px 0px",
            }}>
                {/* ---------- ELECTRIC DOODLE (TOP-LEFT) ---------- */}
                <Box
                    component="img"
                    src={ElectricDoodle}
                    sx={{
                        position: "absolute",
                        left: isMobile ? "8%" : "12%",
                        bottom: isMobile ? "6%" : "250px",
                        width: isMobile ? "50px" : "90px",
                        opacity: 1,
                        zIndex: 1,
                    }}
                />

                {/* ---------- CENTER SMALL TEXT ---------- */}
                <Typography
                    sx={{
                        fontFamily: "Inter Tight",
                        fontSize: isMobile ? "10px" : "13px",
                        fontWeight: 900,
                        textAlign: isMobile ? "center" : "center",
                        color: "#1D1D1B",
                        lineHeight: 1.4,
                        marginX: "auto",
                        width: "350px",
                        textTransform: "uppercase",
                        marginBottom: isMobile ? "70px" : "130px",

                    }}
                >
                    YEP, WE’RE DESIGNERS. BUT <br />
                    ABOVE ALL, WE’RE THINKERS, <br />
                    ExPLORERS, AND STORYTELLERS.
                </Typography>

                {/* ---------- BIG CENTER HEADING ---------- */}
                <Box sx={{ position: "relative", textAlign: "center", margin: "20px 0px" }}>
                    {/* RANDOM DOODLE BEHIND HEADING */}
                    <Box
                        component="img"
                        src={RandomDoodle}
                        sx={{
                            position: "absolute",
                            left: "56%",
                            top: isMobile ? "40%" : "50%",
                            transform: "translateX(-50%)",
                            width: isMobile ? "200px" : "350px",
                            zIndex: 0,
                            opacity: 1,
                        }}
                    />

                    <Typography
                        sx={{
                            fontSize: isMobile ? "40px" : "110px",
                            fontWeight: 800,
                            fontFamily: "Inter Tight, sans-serif",
                            color: "#1D1D1B",
                            lineHeight: 1.1,
                            position: "relative",
                            letterSpacing: "-0.03em",
                            zIndex: 2,

                        }}
                    >
                        What we’re
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: isMobile ? "40px" : "110px",
                            fontWeight: 800,
                            fontFamily: "Inter Tight",
                            color: "#1D1D1B",
                            lineHeight: 1.1,
                            position: "relative",
                            letterSpacing: "-0.02em",
                            zIndex: 2,
                        }}
                    >
                        really good at
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
};

export default ManifestoSection;
