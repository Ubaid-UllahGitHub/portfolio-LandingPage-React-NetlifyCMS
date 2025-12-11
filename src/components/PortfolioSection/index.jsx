import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PortfolioImg1 from "../../assets/portfolioimg1.svg";
import PortfolioImg2 from "../../assets/portfolioimg2.svg";
import PortfolioImg3 from "../../assets/portfolioimg3.svg";
import PortfolioImg4 from "../../assets/portfolioimg4.svg";
import PortfolioImg5 from "../../assets/portfolioimg5.svg";

import EyeHeart from "../../assets/eyeheart.svg";
import ThreeLines from "../../assets/threelines.svg";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
    const sectionRef = useRef(null);
    useEffect(() => {
        const elements = gsap.utils.toArray(".zoom-bg");

        elements.forEach((el) => {
            gsap.fromTo(
                el,
                { backgroundSize: "110%" },     // start slightly zoomed
                {
                    backgroundSize: "130%",     // smooth zoom
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,               // smooth scroll link
                    },
                }
            );
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);


    // ************************************
    // 🔥 DYNAMIC DATA (This controls layout)
    // ************************************
    const portfolioData = [
        {
            type: "full",
            img: PortfolioImg1,
            tags: ["WEB", "PROMO", "FOOD", "CANADA"],
            title: "Shawarmaz",
            subtitle: "Emotional & brittle. A deeply personal digital story toldthrough 10 interactive chapters."
        },
        {
            type: "half",
            items: [
                {
                    img: PortfolioImg2,
                    tags: ["brand identity", "crypto", "UAE"],
                    title: "Swap Coffee",
                    subtitle: "Emotional & brittle. A deeply personal digital story toldthrough 10 interactive chapters."
                },
                {
                    img: PortfolioImg3,
                    tags: ["WEB", "promo", "marketing", "china"],
                    title: "FMAG",
                    subtitle: "Emotional & brittle. A deeply personal digital story toldthrough 10 interactive chapters."
                },
            ],
        },
        {
            type: "full",
            img: PortfolioImg4,
            tags: ["WEB", "storytelling", "Lativia"],
            title: "Baiba Sturite",
            subtitle: "Emotional & brittle. A deeply personal digital story toldthrough 10 interactive chapters."
        },
        {
            type: "half",
            items: [
                {
                    img: PortfolioImg5,
                    tags: ["brand identity", "food & returant"],
                    title: "Wake & Shake",
                    subtitle: "Emotional & brittle. A deeply personal digital story toldthrough 10 interactive chapters."
                },
                { type: "cta" }, // RIGHT BOX CTA
            ],
        },
    ];

    // ************************************
    // 🔥 FULL WIDTH BOX
    // ************************************
    const FullBox = ({ img, tags, title, subtitle }) => (
        <Box
            className="zoom-bg"
            sx={{
                position: "relative",
                height: { xs: "300px", md: "500px" },
                backgroundImage: `url(${img})`,
                // backgroundSize: "cover",
                backgroundSize: { xs: "160%", md: "110%" },      // 🔥 start slightly zoomed
                backgroundPosition: "center",
                borderRadius: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: "8px",
                    position: "absolute",
                    top: 16,
                    left: 16,
                    ml: "30px",

                    // flexWrap: "wrap",   // 💥 allows 3–4 tags without breaking layout
                }}
            >
                {tags?.map((t, i) => (

                    <Typography
                        key={i}
                        sx={{
                            px: 1.2,
                            py: 0.8,
                            border: "1px solid white",
                            borderRadius: "20px",
                            color: "#fff",
                            fontSize: { xs: "8px", md: "10px" },
                            fontFamily: "Inter Tight, sans-serif",
                            textTransform: "uppercase",
                        }}
                    >
                        {t}
                    </Typography>
                ))}
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    px: 4,
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "30px", md: "55px" },
                        fontFamily: "Inter Tight, sans-serif",
                        letterSpacing: { xs: "-1.1px", md: "-3.9px" },
                        lineHeight: { xs: "27px", md: "52px" },
                        fontWeight: 400,
                        color: "#fff",
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "10px", md: "12px" },
                        fontWeight: 300,
                        color: "#fff",
                        textAlign: "right",
                        fontFamily: "Inter Tight, sans-serif",
                        marginRight: "75px",
                        opacity: 1,
                        width: "27%",
                        letterSpacing: "0.01px"
                    }}
                >
                    {subtitle}
                </Typography>
            </Box>

        </Box>
    );

    // ************************************
    // 🔥 HALF WIDTH BOX (Correct layout)
    // ************************************
    const HalfBox = ({ img, tags, title, subtitle }) => (
        <Box
            className="zoom-bg"

            sx={{
                flex: { xs: "unset", md: 1.1 },   // FIX FOR MOBILE
                width: { xs: "100%", md: "auto" },  // FULL WIDTH ON MOBILE
                position: "relative",
                height: { xs: "380px", md: "500px" }, // MORE HEIGHT FOR MOBILE TEXT
                backgroundImage: `url(${img})`,
                backgroundSize: "110%",
                backgroundPosition: "center",
                borderRadius: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: "8px",
                    position: "absolute",
                    top: 16,
                    left: 16,
                    ml: "30px",
                    flexWrap: "wrap",
                }}
            >
                {tags?.map((t, i) => (
                    <Typography
                        key={i}
                        sx={{
                            px: 1.2,
                            py: 0.8,
                            border: "1px solid white",
                            borderRadius: "20px",
                            color: "#fff",
                            fontSize: { xs: "8px", md: "10px" },
                            fontFamily: "Inter Tight, sans-serif",
                            textTransform: "uppercase",
                        }}
                    >
                        {t}
                    </Typography>
                ))}
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    bottom: 16,
                    left: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    px: 4,
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "30px", md: "55px" },
                        fontFamily: "Inter Tight, sans-serif",
                        letterSpacing: { xs: "-1.1px", md: "-3.9px" },
                        lineHeight: { xs: "27px", md: "52px" },
                        fontWeight: 400,
                        color: "#fff",
                        width: "50%"
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "10px", md: "12px" },
                        fontWeight: 400,
                        color: "#fff",
                        textAlign: "right",
                        marginRight: "75px",
                        opacity: 1,
                        width: "37%",
                        fontFamily: "Inter Tight",
                        letterSpacing: "0.01px"
                    }}
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    );

    // ************************************
    // 🔥 CTA BOX
    // ************************************
    const CTABox = () => (
        <Box
            sx={{
                flex: { xs: "unset", md: 1 },   // FIX FOR MOBILE
                width: { xs: "auto", md: "auto" },  // FULL WIDTH ON MOBILE
                position: "relative",
                height: { xs: "280px", md: "500px" }, // MORE HEIGHT FOR MOBILE TEXT
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 4,
            }}
        >
            {/* Doodles */}
            <Box sx={{ position: "absolute", top: { xs: "73px", md: "100px" }, right: { xs: "255px", md: "411px" } }}>
                <img src={ThreeLines} alt="" width={70} height={70} />
            </Box>

            <Box sx={{ position: "absolute", top: { xs: "190px", md: "350px" }, left: { xs: "193px", md: "482px" } }}>
                <img src={EyeHeart} alt="" width={150} height={150} />
            </Box>

            <Typography
                sx={{
                    fontFamily: "Inter Tight",
                    fontSize: { xs: "11px", sm: "14px", md: "15px" },
                    fontWeight: 900,
                    textTransform: "uppercase",
                    color: "#1D1D1B",
                    mb: 4,
                    width: "180px",
                }}
            >
                You see what we do. Imagine what we can do for you
            </Typography>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#1D1D1B",
                    color: "white",
                    px: { xs: 2, sm: 3, md: 3 },
                    py: { xs: 2, sm: 2.5, md: 3 },
                    fontSize: { xs: "11px", sm: "14px", md: "13px" },
                    borderRadius: "40px",
                    "&:hover": { backgroundColor: "#000" },
                }}
            >
                Let's Work Together
            </Button>
        </Box>
    );

    // ************************************
    // 🔥 RETURN
    // ************************************
    return (
        <Box sx={{ py: 14 }}>
            <Box sx={{ maxWidth: "1600px", mx: "auto", px: 2, display: "flex", flexDirection: "column", gap: "10px" }}>

                {portfolioData.map((row, index) => (
                    <React.Fragment key={index}>

                        {/* FULL WIDTH ROW */}
                        {row.type === "full" && (
                            <FullBox img={row.img} tags={row.tags} title={row.title} subtitle={row.subtitle} />
                        )}

                        {/* HALF WIDTH ROW */}
                        {row.type === "half" && (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "row" },
                                    width: "100%",
                                    gap: "10px",
                                }}
                            >
                                {row.items.map((item, i) =>
                                    item.type === "cta" ? (
                                        <CTABox key={i} />
                                    ) : (
                                        <HalfBox key={i} img={item.img} tags={item.tags} title={item.title} subtitle={item.subtitle} />
                                    )
                                )}
                            </Box>
                        )}

                    </React.Fragment>
                ))}

            </Box>
        </Box>
    );
};

export default PortfolioSection;
