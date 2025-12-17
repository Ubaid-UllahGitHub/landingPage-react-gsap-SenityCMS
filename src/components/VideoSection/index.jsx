import React, { useRef, useLayoutEffect } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import smilePhoto from "../../assets/smilephoto.svg";
import electric from "../../assets/electric.svg";
import heroVideo from "../../assets/video.mp4";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
    const sectionRef = useRef(null);
    const videoWrapperRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const videoWrap = videoWrapperRef.current;
            const section = sectionRef.current;

            // Initial small size
            gsap.set(videoWrap, { scale: 0.6, transformOrigin: "center center" });

            // Timeline for scroll-grow animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=180%",
                    scrub: true,
                    pin: true,
                },
            });

            tl.to(videoWrap, {
                scale: 1.2,
                ease: "none",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box
            ref={sectionRef}
            sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                py: 20,
            }}
        >
            {/* TOP-LEFT LARGE IMAGE */}
            <Box
                sx={{
                    position: "absolute",
                    top: "60px",
                    left: "160px",
                    width: { xs: "130px", md: "220px" },
                    opacity: 0.9,
                }}
            >
                <img src={smilePhoto} width="100%" alt="smile" />
            </Box>

            {/* BOTTOM-RIGHT LARGE IMAGE */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "32px",
                    right: "100px",
                    width: { xs: "100px", md: "250px" },
                    opacity: 0.9,
                }}
            >
                <img src={electric} width="100%" alt="electric" />
            </Box>

            {/* CENTER VIDEO - will scale */}
            <Box
                ref={videoWrapperRef}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "80%", md: "750px" },
                    zIndex: 3,
                    borderRadius: "0px",
                    overflow: "hidden",
                    boxShadow: "0 20px 80px rgba(0,0,0,0.4)",
                }}
            >

                <video
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
            </Box>
            {/* MARQUEE TEXT SLIDER */}
            <Box
                sx={{
                    mt: 8,
                    whiteSpace: "nowrap",
                    height: "300px",
                    overflow: "hidden",
                    position: "relative",
                    transform: "skewY(-5deg)",   // ONLY layout transform
                }}
            >
                <Box
                    className="marquee-inner"
                    sx={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        animation: "marqueeDiagonal 12s linear infinite",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "18px",   // mobile
                                sm: "22px",   // small tablets
                                md: "30px",   // large tablets
                                lg: "40px",   // desktop
                            },
                            fontWeight: 500,
                            color: "#000",
                            fontFamily: "Inter Tight, sans-serif",
                        }}
                    >
                        Culture / Innovation / Design / Branding / Innovation / Design / Branding / Strategy /
                        Culture / Innovation / Design / Branding / Culture / Innovation / Design / Branding /
                        Culture / Innovation / Design / Branding / Culture / Innovation / Design / Branding /
                    </Typography>
                </Box>
            </Box>
            <style>
                {`
@keyframes marqueeDiagonal {
  0% {
    transform: translateX(0) translateY(0);
  }
  100% {
    transform: translateX(-50%) translateY(20px);
  }
}
`}
            </style>


        </Box>
    );
};

export default VideoSection;
