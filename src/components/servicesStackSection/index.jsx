import { Box, Typography } from "@mui/material";
import img2 from "../../assets/img2.png";
import { useRef, useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



gsap.registerPlugin(ScrollTrigger);
const ServicesStackSection = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        client
            .fetch(`*[_type == "servicesStackSection"][0]{ services }`)
            .then((res) => setData(res));
    }, []);



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

    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    cardRefs.current = [];

    useLayoutEffect(() => {
        if (!data?.services?.length) return;
        const ctx = gsap.context(() => {
            const cards = cardRefs.current;

            gsap.set(cards, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                filter: "brightness(1)",   // 👈 IMPORTANT
                opacity: 1,                // 👈 IMPORTANT
            });

            cards.forEach((card, i) => {
                gsap.set(card, {
                    backgroundColor: i === 0 ? "#ffffff" : "#E7E7E7",
                });
            });


            // Initial states
            cards.forEach((card, i) => {
                if (i === 0) {
                    gsap.set(card, { y: 0, opacity: 1 });
                } else {
                    gsap.set(card, { y: "100%", opacity: 1 });
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${cards.length * window.innerHeight * 1.3}`,
                    scrub: 1,           // 👈 DIRECT scroll mapping
                    pin: true,
                    anticipatePin: 1,
                },
            });

            requestAnimationFrame(() => {
                ScrollTrigger.refresh();
            });

            cards.forEach((card, i) => {
                if (i === 0) return;

                // Incoming card (from bottom → active)
                tl.fromTo(
                    card,
                    { y: "100%", opacity: 1, filter: "brightness(1)" },
                    { y: "0%", opacity: 1, filter: "brightness(1)", ease: "none" }
                );

                // Incoming card → becomes ACTIVE (white)
                tl.to(
                    card,
                    {
                        backgroundColor: "#ffffff",
                        ease: "none",
                    },
                    "<"
                );

                // Previous card → goes to BACKGROUND (grey + dim)
                tl.to(
                    cards[i - 1],
                    {
                        backgroundColor: "#F0F0F0",
                        opacity: 0.35,
                        filter: "brightness(0.25)",
                        ease: "power1.out",
                    },
                    "<"
                );

            });
        }, containerRef);

        return () => ctx.revert();
    }, [data]);
    return (
        <Box

            ref={containerRef}
            sx={{
                width: "100%",
                height: { xs: "100vh", md: "100vh" },

                position: "relative",
                overflow: "hidden",
                borderTop: "2px solid #E7E7E7",
            }}
        >
            {data?.services?.map((service, index) => (
                <Box
                    key={index}
                    ref={(el) => (cardRefs.current[index] = el)}
                    sx={{
                        width: "100%",
                        // height: { xs: "none", md: "100%" },
                        // backgroundColor: service.bg,
                        height: "100vh",
                        maxWidth: "1600px",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", md: "row" },   // ← IMPORTANT
                        alignItems: "center",
                        padding: { xs: "110px 20px", md: "0px 50px" },
                        gap: { xs: 4, md: 6 },
                        color: "#1D1D1B"
                    }}
                >

                    {/* LEFT COLUMN */}
                    <Box
                        sx={{
                            width: { xs: "100%", sm: "100%", md: "auto" },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: { xs: "flex-start", md: "space-around" },
                            height: "100%",
                        }}
                    >
                        <Box sx={{

                        }}>
                            <Typography
                                sx={{
                                    fontSize: { xs: "23px", md: "30px" },
                                    fontFamily: "Inter Tight, sans-serif",
                                    letterSpacing: "-1.1px",
                                    fontWeight: 800,
                                    textTransform: "lowercase",
                                    mb: 1,
                                }}
                            >
                                {service.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "11px", md: "14px" },
                                    fontFamily: "Inter Tight, sans-serif",
                                    mb: 3,
                                    maxWidth: { xs: "86%", md: "450px" },
                                    lineHeight: 1.4,
                                }}
                            >
                                {service.description}
                            </Typography>
                        </Box>

                        <Box sx={{ mt: { xs: 0, md: 4 } }}>
                            <Box
                                onClick={handleScrollToContact}

                                sx={{
                                    px: { xs: "12px", md: "18px" },
                                    py: { xs: "12px", md: "18px" },
                                    fontSize: { xs: "11px", md: "14px" },
                                    background: "#1D1D1B",
                                    borderRadius: "30px",
                                    display: "inline-block",
                                    color: "white",
                                    fontWeight: 700,
                                    fontFamily: "Inter Tight, sans-serif",
                                    cursor: "pointer",
                                }}
                            >
                                let's work together
                            </Box>
                        </Box>
                    </Box>

                    {/* MIDDLE BULLETS */}
                    <Box
                        sx={{
                            display: "flex",
                            width: { xs: "100%", sm: "100%", md: "auto" },
                            flexDirection: "column",
                            gap: 1,
                            alignItems: "flex-start",
                            justifyContent: { xs: "flex-start", md: "flex-end" },
                            height: "100%", marginBottom: { xs: "0", md: "190px" }
                        }}
                    >
                        {service.points?.map((p, i) => (
                            <Typography
                                key={i}
                                sx={{
                                    fontSize: { xs: "11px", md: "14px" },
                                    fontWeight: 400,
                                    fontFamily: "Inter Tight, sans-serif",
                                    lineHeight: 1.5,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                → {p}
                            </Typography>
                        ))}
                    </Box>


                    {/* RIGHT IMAGE */}
                    < Box sx={{
                        paddingRight: "80px", width: { xs: "100%", md: "35%" },
                    }}>
                        <img
                            src={urlFor(service.image).width(800).url()}
                            alt={service.title}
                            style={{
                                width: "100%",
                                height: { xs: "400px", md: "auto" },
                                borderRadius: "8px",
                                objectFit: "cover",

                            }}
                        />
                    </Box>
                </Box >
            ))}
        </Box >
    );
};

export default ServicesStackSection;
