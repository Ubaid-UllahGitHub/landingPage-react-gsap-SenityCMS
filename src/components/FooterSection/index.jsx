import { Box, Grid, Typography, Button } from "@mui/material";
import BigLogo from "../../assets/bigLogoFooter.svg";
import RandomImg from "../../assets/randomimg.svg";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function FooterSection() {

    const handleScrollToContact = () => {
        const contact = document.getElementById("contact");
        if (!contact) return;

        gsap.to(window, {
            scrollTo: {
                y: contact,
                autoKill: false,
            },
            duration: 1.2,
            ease: "power2.out",
        });
    };

    const sectionRef = useRef(null);
    const menuRef = useRef(null);
    const logoRef = useRef(null);
    const buttonRef = useRef(null);
    const randomRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // MENU — slide down
            gsap.from(menuRef.current, {
                y: -60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",  // when section enters view
                }
            });

            // BIG LOGO — left to right
            gsap.from(logoRef.current, {
                x: -120,
                opacity: 0,
                duration: 1.4,
                delay: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            });

            // BUTTON — bottom to top
            gsap.from(buttonRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.3,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            // RANDOM IMG — bottom to top + slight rotate
            gsap.from(randomRef.current, {
                y: 80,
                opacity: 0,
                rotate: 8,
                duration: 1.4,
                delay: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box
            component="section"
            ref={sectionRef}
            sx={{
                width: "100%",
                color: "#fff",
                fontFamily: "Inter Tight, sans-serif",
            }}
        >
            {/* INNER CONTAINER */}
            <Box sx={{
                maxWidth: "1600px", width: "93%", paddingTop: { xs: "20px", md: "35px" },
                px: { xs: 1, sm: 2, md: 4 },
                mx: "auto", backgroundColor: "#1D1D1B", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"
            }}>

                {/* ========== ROW 1 — MENU ========== */}
                <Grid ref={menuRef}
                    container
                    sx={{
                        mb: { xs: 15, md: 8 },
                        justifyContent: { xs: "center", md: "space-between" },
                        alignItems: "center",
                        textAlign: { xs: "center", md: "left" },
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 2, md: 0 }
                    }}>

                    {/* LEFT MENU — 3 ITEMS */}
                    <Grid item >
                        <Grid container spacing={4} sx={{ marginLeft: { xs: 0, md: "80px" }, justifyContent: { xs: "center", md: "flex-start" } }}>
                            {["Vision", "Cases", "Services"].map((item, i) => (
                                <Grid item key={i} >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "12px", sm: "13px", md: "15px" },
                                            fontWeight: 500,
                                            cursor: "pointer",
                                            fontFamily: "Inter Tight, sans-serif",
                                            "&:hover": { opacity: 0.6 },
                                            textTransform: "Lowercase",
                                            marginLeft: "20px"
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* RIGHT MENU — 2 ITEMS */}
                    <Grid item>
                        <Grid container spacing={4} sx={{ marginRight: { xs: 0, md: "80px" }, justifyContent: { xs: "center", md: "flex-end" } }}>
                            {["Behance", "Instagram"].map((item, i) => (
                                <Grid item key={i}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "10px", sm: "13px", md: "15px" },

                                            fontWeight: 500,
                                            color: "#fff",
                                            fontFamily: "Inter Tight, sans-serif",
                                            cursor: "pointer",
                                            "&:hover": { opacity: 0.6 },
                                            textTransform: "Uppercase",
                                            marginRight: "20px"
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={4} sx={{ width: "100%" }}>
                    <Grid
                        item
                        xs={12}
                        md={10}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",   // flush to bottom
                            height: "100%",
                        }}
                    >
                        {/* CENTER — BUTTON */}
                        <Grid
                            sx={{
                                textAlign: "center", position: "relative", top: { xs: "120px", sm: "140px", md: "160px" },
                                left: { xs: "210px", sm: "200px", md: "861px" }, zIndex: "2", transform: "translateX(-50%)",
                                "@media (min-width:1300px)": {
                                    top: "164px",
                                    left: "995px",
                                },
                            }}

                        >
                            <Button
                                onClick={handleScrollToContact}
                                ref={buttonRef}
                                sx={{
                                    px: { xs: 1.8, sm: 3, md: 4 },   // smaller padding on mobile
                                    py: { xs: 1.4, sm: 2.5, md: 3 },
                                    fontSize: { xs: "10px", sm: "14px", md: "15px" },
                                    borderRadius: "40px",
                                    backgroundColor: "#CAF55E",
                                    color: "#1D1D1B",
                                    fontWeight: 700,
                                    fontFamily: "Inter Tight, sans-serif",
                                    transform: "rotate(-20deg)",   // slight left tilt
                                    boxShadow: "0px 4px 10px rgba(0,0,0,0.12)",
                                    textTransform: "lowercase",   // small letters
                                    transition: "0.25s ease",

                                    "&:hover": {
                                        backgroundColor: "#d4ff74",
                                        transform: "rotate(0deg) scale(1.03)", // hover correction + pop
                                    },
                                }}
                            >
                                Let’s Work Together
                            </Button>
                        </Grid>

                        {/* RIGHT — RANDOM IMAGE */}
                        <Grid ref={randomRef}

                            sx={{
                                textAlign: "center", position: "relative", top: { xs: "-20px", sm: "80px", md: "214px" },
                                left: { xs: "65px", sm: "180px", md: "770px" }, transform: "translateX(-50%)",
                                "@media (min-width:1300px)": {
                                    top: "232px",
                                    left: "955px",
                                },

                            }}
                        >
                            <img
                                src={RandomImg}
                                alt="random"
                                style={{
                                    width: { xs: "5px", md: "75px" }, height: "auto", maxWidth: { xs: "20px", sm: "55px", md: "75px" }
                                }}
                            />
                            <Typography sx={{
                                fontSize: { xs: "10px", sm: "12px", md: "15px" }, fontFamily: "Inter Tight, sans-serif", marginTop: { xs: "10px", sm: "20px", md: "30px" },
                            }}>
                                project@uzzystudio.com
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>

                {/* ========== ROW 2 — MAIN CONTENT ========== */}
                <Grid container alignItems="center" spacing={4}>
                    {/* LEFT — BIG LOGO ONLY */}
                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",   // flush to bottom
                            height: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                overflow: "hidden", // optional: avoids scrollbars if image is slightly larger
                                marginLeft: {
                                    xs: "-10px", // mobile 
                                    sm: "-35px",
                                    //  tablet & desktop 
                                },
                            }}
                        >
                            <img
                                ref={logoRef}
                                src={BigLogo}
                                alt="big logo"
                                style={{
                                    width: "100%", // makes image fill container width
                                    height: "auto", // maintain aspect ratio
                                    display: "block", // remove default inline spacing
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
}
