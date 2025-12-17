import { Box, Typography } from "@mui/material";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

import member1 from "../../assets/member1.svg";
import member2 from "../../assets/member2.svg";
import member3 from "../../assets/member3.svg";
import member4 from "../../assets/member4.svg";
import member5 from "../../assets/member5.svg";
import totalMember from "../../assets/totalmember.svg";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedMembers() {
    const isMobile = window.innerWidth <= 658;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

    const containerRef = useRef(null);
    const imagesRef = useRef([]);
    const leftWordRef = useRef(null);
    const rightWordRef = useRef(null);

    const images = [member1, member2, member3, member4, member5, totalMember];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=800",
                    pin: true,
                    scrub: 1,
                },
            });

            // Initial: Images overlapped + text close together
            gsap.set(imagesRef.current, {
                xPercent: -50,
                yPercent: -50,
                left: "50%",
                top: "50%",
                position: "absolute",
                opacity: 1,
                scale: 1,
            });

            gsap.set(leftWordRef.current, { x: isMobile ? 110 : isTablet ? 80 : 110 });
            gsap.set(rightWordRef.current, { x: isMobile ? -110 : isTablet ? -80 : -110 });
            // 1️⃣ Move words to create space
            tl.to(leftWordRef.current, {
                x: 7,
                ease: "power2.out",
            });

            tl.to(
                rightWordRef.current,
                {
                    x: -3,
                    ease: "power2.out",
                },
                "<"
            );

            // 2️⃣ Split the images smoothly
            tl.to(
                imagesRef.current,
                {
                    x: (i) => {
                        const center = (images.length - 1) / 2;
                        const dist = i - center; // negative = left, positive = right, 0 = center
                        return dist * (isMobile ? 20 : isTablet ? 30 : 40); // spread distance (adjust)
                    },
                    duration: 2,
                    ease: "power3.out",
                },
                "<0.2"
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box

            ref={containerRef}
            sx={{
                width: "100%",
                maxWidth: "1600px",
                mx: "auto",
                height: isMobile ? "600px" : isTablet ? "100vh" : "100vh",
                background: "#F8F8F8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Inter, sans-serif",
                position: "relative",
                overflow: "hidden",
                padding: "0 20px",
            }}
        >
            <Typography
                sx={{
                    fontSize: isMobile ? "30px" : isTablet ? "48px" : "75px",
                    fontWeight: 700,
                    textAlign: "center",
                    letterSpacing: { xs: "-1px", md: "-2px" },
                    lineHeight: isMobile ? "40px" : isTablet ? "52px" : "80px",
                    fontFamily: "'Inter Tight', sans-serif",
                    marginRight: isMobile ? "30px" : isTablet ? "0px" : "0px",
                    color: "#121314",
                    position: "relative",
                    zIndex: 2,
                    overflow: "hidden",
                }}
            >
                Each of our designers <br />
                was the best among <br />
                <span ref={leftWordRef} style={{ display: "inline-block", marginRight: "6px", overflow: "hidden", }}>
                    several
                </span>

                <span
                    style={{
                        position: "relative",
                        width: "280px",
                        height: "60px",
                        display: "inline-block",
                        overflow: "hidden",
                    }}
                >
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            ref={(el) => (imagesRef.current[i] = el)}
                            style={{
                                width: isMobile ? "40px" : isTablet ? "45px" : "68px",
                                height: isMobile ? "40px" : isTablet ? "45px" : "68px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                position: "absolute",
                            }}
                        />
                    ))}
                </span>

                <span ref={rightWordRef} style={{ display: "inline-block", marginLeft: "6px", overflow: "hidden", }}>
                    others
                </span>

            </Typography>
        </Box>
    );
}

